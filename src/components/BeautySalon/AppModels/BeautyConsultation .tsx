"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  Users,
  MenuSquare,
  Bell,
  Star,
  BarChart2,
} from "lucide-react";

const BeautyConsultation = () => {
  const features = [
    {
      icon: <Calendar className="w-6 h-6 text-[#ff4d4d]" />,
      title: "Appointment Scheduling",
      description: "Easy booking system for clients",
    },
    {
      icon: <Users className="w-6 h-6 text-[#ff4d4d]" />,
      title: "Stylist Selection",
      description: "Choose your preferred stylist",
    },
    {
      icon: <MenuSquare className="w-6 h-6 text-[#ff4d4d]" />,
      title: "Service Menu",
      description: "Browse complete service catalog",
    },
    {
      icon: <Bell className="w-6 h-6 text-[#ff4d4d]" />,
      title: "Automated Reminders",
      description: "Never miss an appointment",
    },
    {
      icon: <Star className="w-6 h-6 text-[#ff4d4d]" />,
      title: "Reviews and Ratings",
      description: "Client feedback system",
    },
    {
      icon: <BarChart2 className="w-6 h-6 text-[#ff4d4d]" />,
      title: "Reporting & Analytics",
      description: "Track business performance",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="container px-4 py-6 lg:py-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 relative max-w-lg"
        >
          <Image
            src="https://www.valueappz.com/images/virtual-consultation-img.png"
            alt="Salon Booking App"
            width={600}
            height={800}
            className="rounded-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Right side - Content */}
        <div className="w-full lg:w-1/2">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold mb-6 lg:mb-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-3 after:rounded-full after:h-[4px] after:w-14 after:bg-[#ff4d4d]"
          >
            Salon Appointment Booking Platform
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 mb-8"
          >
            Empower your clients to schedule and manage appointments with a
            robust platform with our salon booking app development services.
          </motion.p>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="p-3 bg-red-50 rounded-full">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <button className="group bg-[#ff4d4d] text-white px-8 py-3 rounded-full hover:bg-[#ff3333] transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
              <span>Book A Consultation</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeautyConsultation;
