import { useState, useEffect } from 'react'
import { Job } from '@/lib/careers/types'

interface Props {
  editingJob: Job | null
  onSubmitSuccess: () => void
}

export default function AdminJobForm({ editingJob, onSubmitSuccess }: Props) {
  const [formData, setFormData] = useState<Partial<Job>>({
    title: '',
    department: '',
    location: '',
    type: '',
    description: [''],
    responsibilities: [''],
    skills: [''],
    experience: '',
    education: '',
    ctc: '',
    email: ''
  })

  useEffect(() => {
    if (editingJob) {
      setFormData(editingJob)
    }
  }, [editingJob])

  const handleArrayInput = (
    field: keyof Job,
    index: number,
    value: string
  ) => {
    setFormData((prev) => {
      const currentField = prev[field as keyof Partial<Job>];
      // Ensure currentField is a string[] before calling map
      if (Array.isArray(currentField)) {
        return {
          ...prev,
          [field]: currentField.map((item, i) => (i === index ? value : item)),
        };
      }
      return prev; // Return unchanged if the field is not an array
    });
  };

  const addArrayItem = (field: keyof Job) => {
    setFormData((prev) => {
      const currentField = prev[field as keyof Partial<Job>];
      // Ensure currentField is a string[] before adding an item
      if (Array.isArray(currentField)) {
        return {
          ...prev,
          [field]: [...currentField, ''],
        };
      }
      return prev;
    });
  };

  const removeArrayItem = (field: keyof Job, index: number) => {
    setFormData((prev) => {
      const currentField = prev[field as keyof Partial<Job>];
      // Ensure currentField is a string[] before filtering
      if (Array.isArray(currentField)) {
        return {
          ...prev,
          [field]: currentField.filter((_, i) => i !== index),
        };
      }
      return prev;
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const url = editingJob
        ? `/api/jobs/${editingJob._id}`
        : '/api/jobs'

      const method = editingJob ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save job')
      }

      setFormData({
        title: '',
        department: '',
        location: '',
        type: '',
        description: [''],
        responsibilities: [''],
        skills: [''],
        experience: '',
        education: '',
        ctc: '',
        email: ''
      })

      onSubmitSuccess()
    } catch (error) {
      console.error('Error saving job:', error)
      alert(error instanceof Error ? error.message : 'Failed to save job')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {editingJob ? 'Edit Job Listing' : 'Add New Job'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Information */}
        <div className="space-y-4 md:col-span-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="e.g. Senior Software Engineer"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Department *
              </label>
              <select
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Department</option>
                <option value="Development">Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Type *
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
          </div>
        </div>

        {/* Array Fields */}
        {['description', 'responsibilities', 'skills'].map((field) => (
          <div key={field} className="space-y-2 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
              {field} *
            </label>
            {(formData[field as keyof Job] as string[] || []).map((item, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => handleArrayInput(field as keyof Job, index, e.target.value)}
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                  placeholder={`Add ${field.slice(0, -1)}`}
                />
                <button
                  type="button"
                  onClick={() => removeArrayItem(field as keyof Job, index)}
                  className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem(field as keyof Job)}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              + Add {field.slice(0, -1)}
            </button>
          </div>
        ))}

        {/* Additional Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Experience Required *
            </label>
            <input
              type="text"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="e.g. 3+ years"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Education *
            </label>
            <input
              type="text"
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="e.g. Bachelor's in Computer Science"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CTC/Salary Range *
            </label>
            <input
              type="text"
              value={formData.ctc}
              onChange={(e) => setFormData({ ...formData, ctc: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="e.g. $80,000 - $100,000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Email *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="e.g. careers@company.com"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button
          type="button"
          onClick={() => setFormData({ title: '', department: '', location: '', type: '', description: [''], responsibilities: [''], skills: [''], experience: '', education: '', ctc: '', email: '' })}
          className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
        >
          Clear Form
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {editingJob ? 'Update Job' : 'Post Job'}
        </button>
      </div>
    </form>
  )
} 