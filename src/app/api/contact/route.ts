import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import nodemailer from "nodemailer";

// Environment variable validation
const requiredEnvVars = [
  "MYSQL_HOST",
  "MYSQL_USER",
  "MYSQL_PASSWORD",
  "MYSQL_DATABASE",
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASSWORD",
  "NOTIFICATION_EMAIL",
];

// Validate all required environment variables on startup
requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`Missing required environment variable: ${envVar}`);
    throw new Error(`Missing environment variable: ${envVar}`);
  }
});

// Database connection pool configuration
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: Number(process.env.MYSQL_PORT) || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// SMTP email configuration
const emailConfig = {
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

/**
 * Handles POST requests for contact form submissions
 * @param request - NextRequest object containing form data
 * @returns NextResponse with success/error message
 */
export async function POST(request: NextRequest) {
  let connection;
  try {
    const body = await request.json();

    const requiredFields = [
      "fullName",
      "email",
      "countryCode",
      "phone",
      "companyName",
      "companySize",
      "jobTitle",
      "launchTime",
      "about",
      "budget",
      "source_url",
    ];
    const missingFields = requiredFields.filter((field) => !body[field]);
    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Get database connection from pool
    connection = await pool.getConnection();

    // Ensure contact_submissions table exists
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        country_code VARCHAR(10) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        company_name VARCHAR(255) NOT NULL,
        company_size VARCHAR(50) NOT NULL,
        job_title VARCHAR(100) NOT NULL,
        launch_time VARCHAR(50) NOT NULL,
        about TEXT NOT NULL,
        budget VARCHAR(50) NOT NULL,
        source_url VARCHAR(255) NOT NULL,
        submitted_at DATETIME NOT NULL
      )
    `;
    await connection.execute(createTableQuery);

    // Format current timestamp for MySQL
    const currentDate = new Date();
    const formattedDate = currentDate
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    // Insert form submission into database
    const query = `
      INSERT INTO contact_submissions 
      (full_name, email, country_code, phone, company_name, 
       company_size, job_title, launch_time, about, budget, 
       source_url, submitted_at) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await connection.execute(query, [
      body.fullName,
      body.email,
      body.countryCode,
      body.phone,
      body.companyName,
      body.companySize,
      body.jobTitle,
      body.launchTime,
      body.about,
      body.budget,
      body.source_url,
      formattedDate,
    ]);

    // Send notification email if SMTP is configured
    if (process.env.SMTP_HOST) {
      const transporter = nodemailer.createTransport(emailConfig);
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.NOTIFICATION_EMAIL,
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${body.fullName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Phone:</strong> ${body.countryCode} ${body.phone}</p>
          <p><strong>Company:</strong> ${body.companyName}</p>
          <p><strong>Company Size:</strong> ${body.companySize}</p>
          <p><strong>Job Title:</strong> ${body.jobTitle}</p>
          <p><strong>Launch Timeline:</strong> ${body.launchTime}</p>
          <p><strong>Budget:</strong> $${body.budget}</p>
          <p><strong>About Project:</strong> ${body.about}</p>
          <p><strong>Source URL:</strong> ${body.source_url}</p>
        `,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error in POST /api/contact:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to process request",
      },
      { status: 500 }
    );
  } finally {
    // Always release the database connection back to the pool
    if (connection) connection.release();
  }
}
