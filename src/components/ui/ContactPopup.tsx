"use client";

import { useState } from "react";
import type {
  ContactFormData,
  ContactPopupProps,
} from "../../types/popup-contact-form";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    businessEmail: "",
    contactNumber: "",
    companyName: "",
    companySize: "",
    jobTitle: "",
    budget: 5000,
    idea: "",
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-4xl rounded-lg bg-gradient-to-br from-blue-50 to-white p-6 shadow-xl md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              aria-label="Close popup"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Tech Stack Icons */}
            <div className="absolute right-0 top-0 -z-10 h-full w-1/3 opacity-20">
              <div className="relative h-full w-full">
                {/* Add your tech stack icons here */}
                <div className="absolute right-12 top-12">
                  <Image
                    src="/placeholder.svg"
                    width={500}
                    height={500}
                    alt=""
                    className="h-12 w-12"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-blue-600">Wait!</h2>
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Give Your Idea a Chance to Shine
                </h3>
                <p className="text-xl font-bold text-gray-900">
                  Talk to Our Experts!
                </p>
                <p className="mt-2 text-gray-600">
                  Let&apos;s discuss your idea and build great things together!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Full Name"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="businessEmail"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Business Email
                    </label>
                    <input
                      id="businessEmail"
                      type="email"
                      value={formData.businessEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessEmail: e.target.value,
                        })
                      }
                      placeholder="Business Email"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="contactNumber"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Contact Number
                    </label>
                    <div className="flex">
                      <select
                        className="rounded-l-md border border-r-0 border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        defaultValue="+91"
                      >
                        <option value="+91">+91</option>
                      </select>
                      <input
                        id="contactNumber"
                        type="tel"
                        value={formData.contactNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactNumber: e.target.value,
                          })
                        }
                        placeholder="Contact Number"
                        className="w-full rounded-r-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company (or project) Name
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      placeholder="Company Name"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="companySize"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Company Size
                    </label>
                    <input
                      id="companySize"
                      type="text"
                      value={formData.companySize}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companySize: e.target.value,
                        })
                      }
                      placeholder="Company Size"
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="jobTitle"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Job Title
                    </label>
                    <select
                      id="jobTitle"
                      value={formData.jobTitle}
                      onChange={(e) =>
                        setFormData({ ...formData, jobTitle: e.target.value })
                      }
                      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                      required
                    >
                      <option value="">Select your job title</option>
                      <option value="ceo">CEO</option>
                      <option value="cto">CTO</option>
                      <option value="manager">Manager</option>
                      <option value="developer">Developer</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Budget: ${formData.budget}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        budget: Number(e.target.value),
                      })
                    }
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-blue-200"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="idea"
                    className="block text-sm font-medium text-gray-700"
                  >
                    What&apos;s your idea?
                  </label>
                  <textarea
                    id="idea"
                    value={formData.idea}
                    onChange={(e) =>
                      setFormData({ ...formData, idea: e.target.value })
                    }
                    placeholder="Tell us about your idea..."
                    className="h-32 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    required
                  />
                </div>

                <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Request a Call Back!
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-sm text-gray-600 underline hover:text-gray-800"
                  >
                    I&apos;d like to keep it to myself!
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
