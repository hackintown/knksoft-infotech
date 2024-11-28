"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/Button/Button";
import { FlipWords } from "../ui/flip-words";
import * as Icons from "lucide-react";

export default function WhoWeAre() {
    const flipWords = [
        "App Development",
        "Web Solutions",
        "Software Services",
        "AI Development",
        "Cloud Solutions"
    ];

    return (
        <section className="py-10 sm:py-12 md:py-14 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <span className="text-sm font-medium text-primary uppercase tracking-wider">
                            WHO WE ARE
                        </span>

                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                            We Specialize in On Demand
                            <span className="block mt-2">
                                <FlipWords words={flipWords} className="text-primary" />
                            </span>
                        </h2>

                        <p className="max-w-2xl text-base font-light lg:text-lg text-muted-foreground">
                            Our specialties in web-mobile apps and AI development services make ideas turn to reality, managed to half startup business open into quality software at the platform industry. We are a company with a DNA of entrepreneurship, and hence, we value the time and money invested by our clients.
                        </p>

                        <p className="max-w-2xl text-base font-light lg:text-lg text-muted-foreground">
                            Want to know more about us? Get in touch with the industry expert.
                        </p>

                        <Button size="lg" variant="primary" rightIcon={
                            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        }>
                            Explore More
                        </Button>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] lg:h-[600px]"
                    >
                        <Image
                            src="https://www.valueappz.com/img/restro-img-opt.png"
                            alt="Development Services Illustration"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 