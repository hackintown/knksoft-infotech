"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Service } from "@/types/Services";

interface ServiceFeaturesProps {
  service: Service;
}

export const ServiceFeatures = memo(function ServiceFeatures({
  service,
}: ServiceFeaturesProps) {
  // Enhanced animation variants
  const container = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="space-y-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg"
    >
      <motion.div variants={item} className="space-y-4">
        <h2 className="text-4xl font-extrabold text-white">{service.title}</h2>
        <p className="text-lg text-white/90 leading-relaxed">
          {service.description}
        </p>
      </motion.div>

      {service.features && (
        <>
          <motion.div variants={item}>
            <button
              type="submit"
              className="flex gap-2 items-center shadow-xl text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-red-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              Explore
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-indigo-800 group-hover:fill-indigo-800"
                ></path>
              </svg>
            </button>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {service.features.map((feature) => {
              const Icon: LucideIcon =
                (Icons[feature.icon as keyof typeof Icons] as LucideIcon) ||
                Icons.HelpCircle;

              return (
                <div
                  key={feature.title}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="rounded-full bg-white/20 p-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-base font-semibold text-white">
                    {feature.title}
                  </p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </>
      )}
    </motion.div>
  );
});
