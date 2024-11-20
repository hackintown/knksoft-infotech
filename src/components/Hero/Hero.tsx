"use client";

import { motion } from "framer-motion";
import { FiDatabase, FiCloud, FiShield, FiAward } from "react-icons/fi";
import { SiTypescript, SiReact, SiAmazon, SiDocker } from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../ui/Button/Button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const stats = [
    { label: "Projects Delivered", value: "200+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Team Experts", value: "50+" },
    { label: "Years Experience", value: "10+" },
  ];

  const technologies = [
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiReact, name: "React" },
    { icon: SiAmazon, name: "AWS" },
    { icon: SiDocker, name: "Docker" },
  ];

  return (
    <section className="hero-gradient min-h-screen pt-24 pb-12 px-4 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <motion.div
        className="container mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight"
                variants={itemVariants}
              >
                Enterprise Solutions for
                <span className="text-gradient block">Digital Innovation</span>
              </motion.h1>

              <motion.p
                className="text-lg text-foreground/80 max-w-xl"
                variants={itemVariants}
              >
                Leveraging cutting-edge technology to deliver scalable, secure,
                and innovative solutions for enterprise digital transformation.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                variants={itemVariants}
              >
                <Button
                  size="lg"
                  variant="primary"
                  rightIcon={<span className="animate-pulse">→</span>}
                >
                  Schedule Consultation
                </Button>
                <button className="px-6 py-3 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                  View Case Studies
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: FiCloud,
                  title: "Cloud Solutions",
                  desc: "Scalable infrastructure",
                },
                {
                  icon: FiShield,
                  title: "Cyber Security",
                  desc: "Enterprise protection",
                },
                {
                  icon: FiDatabase,
                  title: "Data Analytics",
                  desc: "Intelligent insights",
                },
                {
                  icon: FiAward,
                  title: "AI Integration",
                  desc: "Smart automation",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all"
                >
                  <feature.icon className="w-6 h-6 mb-2 text-primary" />
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-foreground/70">{feature.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="space-y-8 hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm"
                >
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5"
                  >
                    <tech.icon className="w-5 h-5" />
                    <span className="text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
