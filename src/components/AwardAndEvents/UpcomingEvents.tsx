'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Users } from 'lucide-react'

const events = [
  { title: 'Annual Tech Conference', date: 'September 15-17, 2024', location: 'San Francisco, CA', attendees: '5000+' },
  { title: 'AI & Machine Learning Workshop', date: 'October 5, 2024', location: 'Online', attendees: '2000+' },
  { title: 'Cybersecurity Summit', date: 'November 20, 2024', location: 'New York, NY', attendees: '3000+' },
]

export default function UpcomingEvents() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">Upcoming Events</h2>
        <div className="space-y-10">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8"
            >
              <div className="bg-blue-500 text-white rounded-full p-6">
                <Calendar className="w-12 h-12" />
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{event.title}</h3>
                <div className="flex flex-col md:flex-row md:items-center text-gray-600 space-y-2 md:space-y-0 md:space-x-6">
                  <p className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-blue-500" /> {event.date}</p>
                  <p className="flex items-center"><MapPin className="w-5 h-5 mr-2 text-blue-500" /> {event.location}</p>
                  <p className="flex items-center"><Users className="w-5 h-5 mr-2 text-blue-500" /> {event.attendees} Attendees</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold text-lg hover:bg-blue-600 transition duration-300"
              >
                Register Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

