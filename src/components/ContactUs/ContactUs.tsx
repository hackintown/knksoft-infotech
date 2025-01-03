"use client";

import { useState } from "react";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { toast } from 'react-toastify';
import { Button } from "../ui/Button/Button";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    companyName: "",
    companySize: "",
    jobTitle: "",
    serviceInterest: "",
    budget: 5000,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const phoneRegex = /^\d{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please check the form for errors");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit form');

      toast.success("Message sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        countryCode: "+1",
        phone: "",
        companyName: "",
        companySize: "",
        jobTitle: "",
        serviceInterest: "",
        budget: 5000,
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <section className="relative h-[30vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://st2.depositphotos.com/1019970/11309/i/450/depositphotos_113094540-stock-photo-contact-us-banner.jpg"
          alt="Contact Us"
          width={1920}
          height={1080}
          priority
          className="absolute w-full h-full inset-0 z-0 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to discuss your project? Our team is here to help you
                succeed.
              </p>
              <div className="space-y-6">
                {/* Contact Info Items */}
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiPhone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiMail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@itcompany.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FiMapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Tech Street, Silicon Valley, CA 94000
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Enhanced Map Section */}
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Our Location</h2>
              <div className="rounded-xl overflow-hidden shadow-lg h-[300px] lg:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sus!4v1637309850935!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="w-full h-full"
                ></iframe>
              </div>
            </section>
          </div>

          {/* Contact Form - Update the submit button */}
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-2xl">
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'
                      } rounded-md focus:outline-none focus:ring-2 ${errors.fullName ? 'focus:ring-red-500' : 'focus:ring-blue-500'
                      }`}
                    required
                    disabled={isSubmitting}
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="flex">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="w-20 px-2 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="companySize"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="serviceInterest"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service of Interest
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="webDevelopment">Web Development</option>
                  <option value="mobileDevelopment">
                    Mobile App Development
                  </option>
                  <option value="cloudServices">Cloud Services</option>
                  <option value="dataAnalytics">Data Analytics</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="aiMl">AI & Machine Learning</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Budget: ${formData.budget.toLocaleString()}
                </label>
                <input
                  type="range"
                  id="budget"
                  name="budget"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$1,000</span>
                  <span>$100,000+</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <Button variant={"primary"} size={"lg"} className="" rightIcon={<FiSend className="w-5 h-5" />}
                disabled={isSubmitting}
                isLoading={isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
