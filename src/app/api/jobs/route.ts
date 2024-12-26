import { NextRequest, NextResponse } from 'next/server'
import { connectToDatabase } from '@/lib/mongodb'

export async function GET() {
  try {
    const db = await connectToDatabase()
    const jobs = await db.collection('jobs').find({}).toArray()
    return NextResponse.json(jobs)
  } catch (error) {
    console.error('Error fetching jobs:', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const job = await request.json()
    const db = await connectToDatabase()
    const result = await db.collection('jobs').insertOne(job)
    return NextResponse.json({ success: true, id: result.insertedId })
  } catch (error) {
    console.error('Error creating job:', error)
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 })
  }
}