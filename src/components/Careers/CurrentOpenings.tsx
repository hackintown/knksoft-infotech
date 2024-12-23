'use client'

import { motion } from 'framer-motion'
import { useState, FormEvent, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import { BsBriefcase, BsGeoAlt, BsClock } from 'react-icons/bs'
import { ApplicationForm } from '@/lib/careers/types'

interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string
  description: string[]
  responsibilities: string[]
  skills: string[]
  experience: string
  education: string
  ctc: string
  email: string
}

const departments = [
  'All',
  'Development',
  'Business',
  'Marketing',
  'Quality Analyst',
] as const

export default function CurrentOpenings() {
  const [selectedDepartment, setSelectedDepartment] = useState<typeof departments[number] | 'All'>('All')
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [applicationForm, setApplicationForm] = useState<ApplicationForm>({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    resume: null,
    coverLetter: ''
  });
  const [jobs, setJobs] = useState<Job[]>([])

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch('/api/jobs')
      const data = await response.json()
      setJobs(data)
    } catch (error) {
      console.error('Error fetching jobs:', error)
    }
  }

  const filteredJobs = selectedDepartment === 'All'
    ? jobs
    : jobs.filter(job => job.department === selectedDepartment)

  const handleApplicationSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Application submitted:', applicationForm);
    setSelectedJob(null);
    setApplicationForm({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      resume: null,
      coverLetter: ''
    });
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Current Openings</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our team of passionate professionals and help build the future of technology
          </p>
        </motion.div>

        <Tab.Group>
          <Tab.List className="flex space-x-2 rounded-xl bg-white p-1 shadow-lg mb-8 overflow-x-auto">
            {departments.map((dept) => (
              <Tab
                key={dept}
                className={({ selected }) =>
                  `w-full rounded-lg py-3 px-4 text-sm font-medium leading-5
                  ${selected
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
                onClick={() => setSelectedDepartment(dept)}
              >
                {dept}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredJobs.map((job, idx) => (
            <motion.div
              key={`${job.id}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <BsBriefcase className="mr-2" />
                    {job.department}
                  </div>
                  <div className="flex items-center">
                    <BsGeoAlt className="mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <BsClock className="mr-2" />
                    {job.type}
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Responsibilities:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {job.responsibilities.slice(0, 3).map((resp, idx) => (
                        <li key={`${job.id}-resp-${idx}`}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-600">Experience: {job.experience}</p>
                      <p className="text-gray-600">Education: {job.education}</p>
                    </div>
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">{selectedJob.title}</h3>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={applicationForm.fullName}
                  onChange={(e) => setApplicationForm({ ...applicationForm, fullName: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={applicationForm.email}
                  onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={applicationForm.phone}
                  onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  value={applicationForm.experience}
                  onChange={(e) => setApplicationForm({ ...applicationForm, experience: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume *
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => setApplicationForm({ ...applicationForm, resume: e.target.files?.[0] || null })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  value={applicationForm.coverLetter}
                  onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

