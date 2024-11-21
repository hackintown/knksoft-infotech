"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button/Button";
import { FlipWords } from "../ui/flip-words";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import {
  Cloud,


  Code2,

  Smartphone,
  Network,
} from "lucide-react";

export default function Hero() {
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      designation: "CEO",
      image: "/team/ceo.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      designation: "CTO",
      image: "/team/cto.jpg",
    },
    {
      id: 3,
      name: "Mike Brown",
      designation: "Lead Architect",
      image: "/team/architect.jpg",
    },
  ];

  const solutions = [
    {
      icon: Code2,
      title: "Custom Development",
      description: "Tailored software solutions",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS & Azure expertise",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "iOS & Android apps",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Network,
      title: "DevOps Services",
      description: "CI/CD & automation",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const flipWords = [
    "Enterprise Solutions",
    "Digital Innovation",
    "Cloud Architecture",
    "Custom Development",
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
      <div className="absolute h-full w-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container relative mx-auto px-4 py-20 sm:py-32">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5"
              >
                <span className="text-sm font-medium text-primary">
                  Trusted by Fortune 500 Companies
                </span>
              </motion.div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Transforming Business Through{" "}
                <span className="inline-block">
                  <FlipWords words={flipWords} className="text-primary" />
                </span>
              </h1>

              <p className="max-w-2xl text-lg text-muted-foreground">
                Leverage our decade of expertise in delivering cutting-edge
                enterprise solutions, cloud architecture, and digital transformation
                services.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="primary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                View Case Studies
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <AnimatedTooltip items={teamMembers} />
                <div className="text-sm text-muted-foreground">
                  Meet our leadership team with{" "}
                  <span className="font-semibold text-foreground">
                    20+ years
                  </span>{" "}
                  of combined experience
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-0"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-background/50 p-6 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
                <solution.icon className={`h-10 w-10 bg-gradient-to-br ${solution.gradient} rounded-xl p-2 text-white`} />
                <h3 className="mt-4 font-semibold">{solution.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {[
            { value: "200+", label: "Enterprise Clients" },
            { value: "50+", label: "Tech Experts" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-primary/10 bg-background/50 p-6 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
