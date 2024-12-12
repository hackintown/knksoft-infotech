"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How accurate is your barcode scanning technology?",
    answer: "Our barcode scanning technology achieves 99.9% accuracy across all major barcode types and conditions.",
  },
  {
    question: "What types of barcodes do you support?",
    answer: "We support all major barcode formats including 1D (UPC, EAN, Code 128) and 2D (QR, DataMatrix, PDF417).",
  },
  {
    question: "Can I integrate your solution with my existing systems?",
    answer: "Yes, our solution offers API integration capabilities and can be integrated with most ERP and inventory management systems.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer 24/7 technical support, comprehensive documentation, and dedicated account managers for enterprise clients.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Find answers to common questions about our barcode solutions
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <span
                    className={`transform transition-transform ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-gray-600 dark:text-gray-400"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}