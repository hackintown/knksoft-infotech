'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const timelineEvents = [
    {
        year: '2024',
        title: 'Global Tech Excellence Award',
        description: 'Recognized for outstanding contributions to cloud computing'
    },
    {
        year: '2023',
        title: 'Innovation Summit Launch',
        description: 'Successfully launched our annual technology innovation summit'
    },
    {
        year: '2022',
        title: 'Best IT Solutions Provider',
        description: 'Awarded as the leading IT solutions provider in the region'
    }
]

export default function EventsTimeline() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">Our Journey</h2>
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200" />
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`flex items-center justify-between mb-8 ${
                                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                            }`}
                        >
                            <div className="w-5/12" />
                            <div className="z-10">
                                <CheckCircle className="w-8 h-8 text-blue-500" />
                            </div>
                            <div className="w-5/12 bg-white p-6 rounded-lg shadow-lg">
                                <span className="text-blue-500 font-bold">{event.year}</span>
                                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                                <p className="text-gray-600">{event.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
} 