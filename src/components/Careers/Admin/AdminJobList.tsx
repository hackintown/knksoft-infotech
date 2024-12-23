import { Job } from '@/lib/careers/types'
import { BsPencil, BsTrash } from 'react-icons/bs'

interface Props {
  jobs: Job[]
  onEdit: (job: Job) => void
  onDelete: () => void
}

export default function AdminJobList({ jobs, onEdit, onDelete }: Props) {
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job?')) return
    
    try {
      await fetch(`/api/jobs/${id}`, { method: 'DELETE' })
      onDelete()
    } catch (error) {
      console.error('Error deleting job:', error)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Job Listings</h2>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
          {jobs.length} Jobs
        </span>
      </div>
      
      <div className="space-y-4">
        {jobs.map((job) => (
          <div 
            key={job._id} 
            className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                <div className="space-y-1">
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">🏢</span> {job.department}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">📍</span> {job.location}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">⏰</span> {job.type}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(job)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  title="Edit job"
                >
                  <BsPencil className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  title="Delete job"
                >
                  <BsTrash className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {jobs.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No jobs posted yet. Add your first job listing!
          </div>
        )}
      </div>
    </div>
  )
} 