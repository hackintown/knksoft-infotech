'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import { cn } from '@/lib/utils'

// Import slick styles at the top of your file
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ArrowLeftIcon, ArrowRightIcon, Paintbrush, Code2, TestTube2, Rocket } from 'lucide-react'

const steps = [
    {
        id: 1,
        title: 'Visual and Technical Design',
        description: 'Our mobile development solution experts design the user experience (UX) and user interface with intuitive designs that mirror your business ethics and identity.',
        image: 'https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-c168d03/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/10/10105827/mad_procs_img.png',
        icon: Paintbrush
    },
    {
        id: 2,
        title: 'Development',
        description: 'Our mobile development solution experts design the user experience (UX) and user interface with intuitive designs that mirror your business ethics and identity.',
        image: '/images/process/development.png',
        icon: Code2
    },
    {
        id: 3,
        title: 'Quality Analysis',
        description: 'Our mobile development solution experts design the user experience (UX) and user interface with intuitive designs that mirror your business ethics and identity.',
        image: '/images/process/testing.png',
        icon: TestTube2
    },
    {
        id: 4,
        title: 'Deployment',
        description: 'Our mobile development solution experts design the user experience (UX) and user interface with intuitive designs that mirror your business ethics and identity.',
        image: '/images/process/deployment.png',
        icon: Rocket
    },
    {
        id: 5,
        title: 'Maintenance',
        description: 'Our mobile development solution experts design the user experience (UX) and user interface with intuitive designs that mirror your business ethics and identity.',
        image: '/images/process/maintenance.png',
        icon: Rocket
    },
]

export default function Process() {
    const [activeStep, setActiveStep] = useState(1)
    // Add ref for slider
    const sliderRef = useRef<Slider>(null)

    // Slick slider settings
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        swipeToSlide: true,
        beforeChange: (oldIndex: number, next: number) => setActiveStep(next + 1),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    // Update step click handler
    const handleStepClick = (stepId: number) => {
        setActiveStep(stepId)
        // Go to the selected slide
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(stepId - 1, true)
        }
    }

    return (
        <section className="py-8 md:py-16 bg-gradient-to-b from-slate-950 to-slate-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                        What&apos;s Your Journey Through Our Mobile App Development Process?
                    </h2>
                    <p className="text-sm md:text-base text-gray-400 max-w-3xl mx-auto">
                        As a premier mobile app development company, we build innovative Android and iOS apps with precision
                        and care, ensuring every project exceeds expectations and delivers impactful results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-6 md:gap-2 items-center max-w-7xl mx-auto">
                    {/* Left side - Phone Image */}
                    <div className="relative order-2 md:order-1">
                        <Image
                            src="https://cdn-hjokj.nitrocdn.com/xKvPrJeRKcMfBVHKpjbxbYMvqmxtHXge/assets/images/optimized/rev-c168d03/d3l9a8mvoa6cl8.cloudfront.net/wp-content/uploads/2024/10/10105827/mad_procs_img.png"
                            alt="Mobile App Development"
                            width={400}
                            height={500}
                            className="object-contain h-full max-h-[300px] md:max-h-[500px] mx-auto"
                        />
                    </div>

                    {/* Right side - Content */}
                    <div className="flex-1 order-1 md:order-2">
                        {/* Steps Navigation */}
                        <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mb-8 md:mb-12">
                            {steps.map((step) => (
                                <button
                                    key={step.id}
                                    onClick={() => handleStepClick(step.id)}
                                    className={cn(
                                        'px-3 md:px-6 py-1.5 md:py-2 text-sm md:text-base rounded-full transition-all duration-300 border border-slate-700/30',
                                        activeStep === step.id
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-opacity-20 bg-slate-800 text-gray-400 hover:bg-opacity-30'
                                    )}
                                >
                                    Step {step.id}
                                </button>
                            ))}
                        </div>

                        {/* Cards Grid with Slick Slider */}
                        <Slider ref={sliderRef} {...sliderSettings} className="slick-slider-custom -mx-2">
                            {steps.map((step) => (
                                <div key={step.id} className="px-2">
                                    <div
                                        className={cn(
                                            'p-4 md:p-6 rounded-lg bg-slate-800/20 border border-slate-700/30 relative h-full',
                                            activeStep === step.id ? 'ring-2 ring-blue-500' : ''
                                        )}
                                    >
                                        <div className="bg-slate-800/20 rounded-full p-2 w-fit">
                                            {step.icon && <step.icon className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />}
                                        </div>
                                        <div className="pt-6 md:pt-8">
                                            <h3 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">{step.title}</h3>
                                            <p className="text-xs md:text-sm text-gray-400">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                        {/* Custom Navigation Arrows */}
                        <div className="flex justify-center md:justify-start gap-4 mt-6 md:mt-8">
                            <button
                                onClick={() => handleStepClick(activeStep > 1 ? activeStep - 1 : activeStep)}
                                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            >
                                <span className="sr-only">Previous</span>
                                <ArrowLeftIcon className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => handleStepClick(activeStep < steps.length ? activeStep + 1 : activeStep)}
                                className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                            >
                                <span className="sr-only">Next</span>
                                <ArrowRightIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}