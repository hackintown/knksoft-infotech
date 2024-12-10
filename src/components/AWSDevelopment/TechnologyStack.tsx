"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Database, Shield } from 'lucide-react';

const categories = [
  {
    id: 'compute',
    icon: <Server className="w-6 h-6" />,
    title: 'Compute Services',
    technologies: [
      { name: 'AWS EC2', description: 'Scalable virtual servers in the cloud' },
      { name: 'AWS Lambda', description: 'Serverless compute service' },
      { name: 'ECS/EKS', description: 'Container orchestration services' }
    ]
  },
  {
    id: 'database',
    icon: <Database className="w-6 h-6" />,
    title: 'Database Services',
    technologies: [
      { name: 'Amazon RDS', description: 'Managed relational databases' },
      { name: 'DynamoDB', description: 'NoSQL database service' },
      { name: 'ElastiCache', description: 'In-memory caching service' }
    ]
  },
  {
    id: 'security',
    icon: <Shield className="w-6 h-6" />,
    title: 'Security Services',
    technologies: [
      { name: 'AWS IAM', description: 'Identity and access management' },
      { name: 'AWS WAF', description: 'Web application firewall' },
      { name: 'AWS KMS', description: 'Key management service' }
    ]
  }
];

export function TechnologyStack() {
  const [activeTab, setActiveTab] = useState('compute');

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600">
            Leveraging the best of AWS services for your success
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center px-6 py-3 rounded-full ${
                activeTab === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              } transition-all duration-300`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories
            .find((cat) => cat.id === activeTab)
            ?.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {tech.name}
                </h3>
                <p className="text-gray-600">{tech.description}</p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}