"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import * as Icons from "lucide-react";

export default function ResultDriven() {
    return (
        <section className="py-10 sm:py-12 md:py-14 bg-primary/5 relative overflow-hidden lg:!pb-[15.5rem]">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="absolute left-0 -top-12 h-[799px] w-[45%]  hidden lg:block"
                    >
                        <Image
                            src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-47d43d1/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2023/07/27094922/ab_mvp.png"
                            alt="MVP Development Services"
                            fill
                            className="object-contain w-full h-full"
                            priority
                        />
                    </motion.div>

                    <div className="lg:col-start-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 relative before:content-[''] before:absolute before:-left-32 before:-top-5 before:w-32 before:h-32 before:bg-[url('https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-47d43d1/www.apptunix.com/wp-content/uploads/2023/07/bulb.svg')] before:bg-contain before:bg-no-repeat before:animate-bulbPulse"
                        >
                            <div className="flex items-center gap-3">
                                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                    Result-Driven
                                    <span className="block">
                                        MVP Development Services
                                    </span>
                                </h2>
                            </div>

                            <p className="text-base lg:text-lg text-foreground/80">
                                Our MVP app development company helps you maximize your business 
                                potential, enabling you to launch your reliable MVP product instantly. Sell 
                                smarter and faster while learning from your customers to turn your ideas into 
                                actionable solutions. With our no-code MVP development services, you can 
                                unleash your full potential and take your business to new heights.
                            </p>

                            <p className="text-base lg:text-lg text-foreground/80">
                                <span className="text-primary font-medium">MVP and POC</span> have become integral to modern software development. While 
                                a proof of concept document ensures the technical feasibility of your business 
                                solution, a minimum viable product lets you push the release ahead of time 
                                and collect valuable feedback to build a functional MVP app.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
