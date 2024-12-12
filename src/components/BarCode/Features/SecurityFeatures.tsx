'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const features = [
  {
    title: 'High-Speed Scanning',
    description: 'Scan barcodes at lightning-fast speeds with our advanced technology.',
    icon: '⚡',
  },
  {
    title: 'Multi-Code Reading',
    description: 'Read multiple barcodes simultaneously for increased efficiency.',
    icon: '🔍',
  },
  {
    title: 'Cloud Integration',
    description: 'Seamlessly integrate with cloud services for real-time data syncing.',
    icon: '☁️',
  },
  {
    title: 'Mobile Compatibility',
    description: 'Use our solutions on any mobile device for on-the-go scanning.',
    icon: '📱',
  },
]

export default function SecurityFeatures() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-1 bg-blue-600 mt-4"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

