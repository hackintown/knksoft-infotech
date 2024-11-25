"use client";

import { memo } from "react";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Service } from "@/types/Services";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button/Button";

interface ServiceFeaturesProps {
  service: Service;
}

export const ServiceFeatures = memo(function ServiceFeatures({
  service,
}: ServiceFeaturesProps) {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="space-y-4">
        <span className="inline-block px-4 py-1.5 bg-[#001449]/10 rounded-full text-sm font-medium text-white">
          {service.number}
        </span>
        <h2 className="text-4xl font-bold text-white">{service.title}</h2>
        <p className="text-lg text-white/80 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Features Grid */}
      {service.features && (
        <div className="grid grid-cols-2 gap-4">
          {service.features.map((feature, index) => {
            const Icon: LucideIcon =
              (Icons[feature.icon as keyof typeof Icons] as LucideIcon) ||
              Icons.HelpCircle;

            return (
              <div
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-[#001449]/[0.08] p-6",
                  "from-[#001449]/[0.08] to-[#111111]/[0.02]",
                  "hover:from-[#001449]/[0.12] hover:to-[#111111]/[0.04]",
                  "transition-all duration-300 ease-out"
                )}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#001449]/10 to-[#af0000]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-white/10 text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-[#001449]/20 to-[#af0000]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      )}

      {/* Call to Action */}
      <Button 
        variant="outline" 
        size="md" 
        rightIcon={
          <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        }
        className="transition-all duration-300 ease-out"
      >
        Learn More
      </Button>

    </div>
  );
});
