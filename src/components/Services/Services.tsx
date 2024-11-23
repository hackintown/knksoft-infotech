"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings } from "lucide-react";
import { servicesData } from "./ServicesData";
import { ServiceCard } from "./ServicesCard";
import { ServiceFeatures } from "./ServicesFeatures";

export default function Services() {
  const [activeService, setActiveService] = useState(servicesData[0]);
  // Memoize the click handler
  const handleServiceClick = useCallback(
    (service: (typeof servicesData)[0]) => {
      setActiveService(service);
    },
    []
  );

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="flex items-center gap-2 text-primary">
          <Settings className="h-6 w-6" />
          <h2 className="text-lg font-semibold">SERVICES</h2>
        </div>
        <h1 className="mt-4 text-4xl font-bold">
          What&apos;s Brewing In The Code Brew Labs?
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Discover the digital possibilities for your brand with our
          comprehensive suite of services.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService.id === service.id}
              onClick={() => handleServiceClick(service)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl bg-primary p-8"
        >
          <AnimatePresence mode="wait">
            <ServiceFeatures key={activeService.id} service={activeService} />
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
