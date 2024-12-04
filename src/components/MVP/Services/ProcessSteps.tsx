"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Prototype Design", description: "Turn your idea into a prototype." },
  { title: "Single-Feature MVP", description: "Focus on the most critical feature." },
  { title: "Pilot MVP Development", description: "Test and refine your idea." },
];

export default function ProcessSteps() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-5 lg:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Validate Your Idea and Get User Feedback
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-lg p-6 rounded-lg w-full lg:w-1/3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
