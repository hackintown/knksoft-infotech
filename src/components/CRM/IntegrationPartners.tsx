'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Salesforce', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'HubSpot', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Mailchimp', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Slack', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Zapier', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Google Workspace', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Microsoft 365', logo: '/placeholder.svg?height=80&width=200' },
  { name: 'Zendesk', logo: '/placeholder.svg?height=80&width=200' },
]

export default function IntegrationPartners() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Integration Partners</h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Seamlessly connect your favorite tools with our CRM solution for enhanced productivity.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-md"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={80}
                className="max-h-12 w-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

