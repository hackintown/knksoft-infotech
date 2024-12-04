"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="container mx-auto text-center px-5 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold">
            Build Your MVP App from Scratch With Our No-Code App Building Tools!
          </h2>
          <p className="mt-4 text-lg">
            Start your MVP journey today and bring your ideas to life.
          </p>
          <button className="mt-6 px-8 py-3 bg-white text-blue-600 rounded-lg font-bold hover:bg-gray-200">
            Start Your MVP App Development
          </button>
        </motion.div>
      </div>
    </section>
  );
}
