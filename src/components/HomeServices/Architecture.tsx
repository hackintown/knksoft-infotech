"use client"
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Architecture() {
    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                        <span className="text-[#ff4d4d] relative">
                            Technology & Solution
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#ff4d4d] transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                        </span>
                        <span className="text-[#2d3748]"> Architecture</span>
                    </h2>
                    <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
                        ValueAppz relies on a robust cutting-edge technology stack, high customizations,
                        and robust third-party integrations to power up your next-gen home service
                        marketplace app solutions.
                    </p>
                </motion.div>

                {/* Main Infrastructure */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="rounded-2xl overflow-hidden max-w-5xl mx-auto">
                        <div className="p-6 lg:p-8">
                            <div className="relative aspect-[16/9]">
                                <Image
                                    src="https://www.valueappz.com/img/diagram1.png"
                                    alt="Home Services Architecture"
                                    fill
                                    className="object-contain"
                                    priority
                                    sizes="(max-width: 768px) 100vw,
                                           (max-width: 1200px) 80vw,
                                           1200px"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>


            </div>
        </section>
    );
}
