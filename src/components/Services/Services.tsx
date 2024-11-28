"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "./ServicesData";
import { ServiceCard } from "./ServicesCard";
import { ServiceFeatures } from "./ServicesFeatures";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Services() {
  const [activeService, setActiveService] = useState(servicesData[0]);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleServiceClick = useCallback((service: typeof servicesData[0]) => {
    if (!isDesktop) {
      setActiveService(service);
    }
  }, [isDesktop]);

  const handleServiceHover = useCallback((service: typeof servicesData[0]) => {
    if (isDesktop) {
      setActiveService(service);
    }
  }, [isDesktop]);

  return (
    <section className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Pre-Integration With Industry-Leading
          <span className="text-primary block mt-2">
            Platforms to Save Your Time
          </span>
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-base font-light lg:text-lg text-muted-foreground">
          Our custom on demand software development services focuses on saving time and providing the most value to the clients.
        </p>
      </motion.div>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isActive={activeService.id === service.id}
              onClick={() => handleServiceClick(service)}
              onHover={() => handleServiceHover(service)}
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
