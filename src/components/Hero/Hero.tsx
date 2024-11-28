"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button/Button";
import { FlipWords } from "../ui/flip-words";
import { AnimatedTooltip } from "../ui/animated-tooltip";
import { Cloud, Code2, Smartphone, Network } from "lucide-react";
import {
  SiReact,
  SiAew,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiFlutter,
  SiKotlin,
  SiSwift,
  SiMongodb,
  SiPostgresql,
  SiMicrosoftazure,
  SiNodedotjs,
  SiSpring,
  SiDotnet,
  SiAndroid,
} from "react-icons/si";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import * as Icons from "lucide-react";

export default function Hero() {
  const teamMembers = [
    {
      id: 1,
      name: "Brijesh Joshi",
      designation: "CEO",
      image: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    },
    {
      id: 2,
      name: "Manoj Kumar",
      designation: "Full Stack Developer",
      image: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
    },
    {
      id: 3,
      name: "Mike Brown",
      designation: "Lead Architect",
      image: "https://api.uifaces.co/our-content/donated/1H_7AxP0.jpg",
    },
  ];

  const solutions = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom & MVF Development",
      gradient: "from-blue-500 to-cyan-500",
      techStack: [
        { Icon: SiReact, name: "React" },
        { Icon: SiPython, name: "Python" },
        { Icon: SiNodedotjs, name: "Node.js" },
        { Icon: SiSpring, name: "Spring" },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Azure & CI/CD",
      gradient: "from-purple-500 to-pink-500",
      techStack: [
        { Icon: SiAew, name: "AWS" },
        { Icon: SiMicrosoftazure, name: "Azure" },
        { Icon: SiDocker, name: "Docker" },
        { Icon: SiKubernetes, name: "Kubernetes" },
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Solutions",
      description: "Native & Cross-platform",
      gradient: "from-green-500 to-emerald-500",
      techStack: [
        { Icon: SiFlutter, name: "Flutter" },
        { Icon: SiKotlin, name: "Kotlin" },
        { Icon: SiSwift, name: "Swift" },
        { Icon: SiAndroid, name: "Android" },
      ],
    },
    {
      icon: Network,
      title: "Enterprise Solutions",
      description: "CRM, LMS & Asset Management",
      gradient: "from-orange-500 to-red-500",
      techStack: [
        { Icon: SiDotnet, name: ".NET" },
        { Icon: SiMongodb, name: "MongoDB" },
        { Icon: SiPostgresql, name: "PostgreSQL" },
        { Icon: SiSpring, name: "Spring" },
      ],
    },
  ];

  const flipWords = [
    "Enterprise Solutions",
    "Cloud Architecture",
    "Custom Development",
    "Digital Transformation",
    "DevOps Excellence",
  ];

  const clients = [
    {
      name: "Microsoft",
      image: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/uploads/2023/01/layer-503@2x.webp",
    },
    {
      name: "Google",
      image: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/uploads/2023/01/vodafone@3x.webp",
    },
    {
      name: "Amazon",
      image: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/uploads/2023/01/layer-510@2x.webp",
    },
    {
      name: "Meta",
      image: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/uploads/2023/01/zipeats.webp",
    },
    {
      name: "Apple",
      image: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/uploads/2023/01/dai.webp",
    },
    {
      name: "IBM",
      image: "https://cdn-gnpmp.nitrocdn.com/zXfatNvCxdJLOJQwdBcjdAFpyWHclmaD/assets/images/optimized/rev-6b6d411/www.code-brew.com/wp-content/uploads/2023/01/layer-32@2x.webp",
    },
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
                  Trusted by Global Enterprise Leaders
                </span>
              </motion.div>

              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight sm:text-5xl">
                Professional IT Solutions for
                <span className="inline-block">
                  <FlipWords words={flipWords} className="text-primary" />
                </span>
              </h1>

              <p className="max-w-2xl text-base font-light lg:text-lg text-muted-foreground">
                Comprehensive IT services including custom software development,
                cloud solutions, enterprise systems, and digital transformation.
                From MVF development to full-scale enterprise solutions, we
                deliver excellence.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" variant="primary" rightIcon={
                <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              }>
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                View Projects
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <AnimatedTooltip items={teamMembers} />
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Meet our leadership team with
                  <span className="font-semibold text-foreground">
                    20+ years
                  </span>
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
                transition={{
                  delay: index * 0.1 + 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-background/50 p-6 backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                />

                <div className="flex items-start justify-between">
                  <div>
                    <solution.icon
                      className={`h-10 w-10 bg-gradient-to-br ${solution.gradient} rounded-xl p-2 text-white`}
                    />
                    <h3 className="mt-4 font-semibold">{solution.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {solution.description}
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    className="flex flex-col gap-2"
                  >
                    {solution.techStack?.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="group relative"
                      >
                        <tech.Icon className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-primary" />
                        <div className="absolute -right-2 top-0 hidden translate-x-full rounded-md bg-background/90 px-2 py-1 text-xs group-hover:block">
                          {tech.name}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative mt-6 sm:mt-8 md:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-semibold mb-2">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground">
            Partnering with global enterprises to deliver excellence
          </p>
        </motion.div>

        <div className="relative flex flex-col items-center justify-center gap-4">
          <InfiniteMovingCards
            items={clients}
            direction="right"
            speed="slow"
          />
          {/* <InfiniteMovingCards
            items={[...clients].reverse()}
            direction="right"
            speed="slow"
          /> */}
        </div>
      </div>
    </section>
  );
}
