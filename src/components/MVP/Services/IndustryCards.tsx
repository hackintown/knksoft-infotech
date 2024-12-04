"use client";
import { motion } from "framer-motion";

const industries = [
  { title: "Construction", description: "Streamline project management...", icon: "🏗️" },
  { title: "Healthcare", description: "Enhance patient care...", icon: "🩺" },
  { title: "Insurance", description: "Optimize claims processing...", icon: "📄" },
  { title: "FinTech", description: "Empower financial institutions...", icon: "💰" },
  { title: "Logistics and Transportation", description: "Optimize supply chains...", icon: "🚛" },
];

export default function IndustryCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-5 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Unlocking Industry Potential with Custom MVPs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg p-6 rounded-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold">{industry.title}</h3>
              <p className="mt-2 text-gray-600">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
