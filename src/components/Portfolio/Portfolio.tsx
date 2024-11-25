"use client";

import React, { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import { motion } from "framer-motion";
import {
  EffectCoverflow,
  Navigation,
  Autoplay,
  Pagination,
} from "swiper/modules";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    imageUrl:
      "https://img.freepik.com/free-vector/business-website-page-design-template-with-three-launching-rockets-features_1284-54889.jpg?t=st=1732370104~exp=1732373704~hmac=d41a1e2a912590ad04df0dc046c3a989e57b4fa83d82b38f88fc2ba064ee1c79&w=740",
    alt: "Project 1",
    blurDataURL: "data:image/jpeg;base64,/9j...",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/poster-man-sitting-front-laptop-with-man-it_1191871-27524.jpg?w=740",
    alt: "Project 2",
    blurDataURL: "data:image/jpeg;base64,/9j...",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-vector/mock-up-web-apps-presentation_774564-145.jpg?w=740",
    alt: "Project 4",
    blurDataURL: "data:image/jpeg;base64,/9j...",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-vector/mock-up-web-apps-presentation_774564-145.jpg?w=740",
    alt: "Project 5",
    blurDataURL: "data:image/jpeg;base64,/9j...",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-vector/mock-up-web-apps-presentation_774564-145.jpg?w=740",
    alt: "Project 3",
    blurDataURL: "data:image/jpeg;base64,/9j...",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-vector/mock-up-web-apps-presentation_774564-145.jpg?w=740",
    alt: "Project 6",
    blurDataURL: "data:image/jpeg;base64,/9j...",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-vector/mock-up-web-apps-presentation_774564-145.jpg?w=740",
    alt: "Project 7",
    blurDataURL: "data:image/jpeg;base64,/9j...",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-vector/mock-up-web-apps-presentation_774564-145.jpg?w=740",
    alt: "Project 8",
    blurDataURL: "data:image/jpeg;base64,/9j...",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-vector/mock-up-web-apps-presentation_774564-145.jpg?w=740",
    alt: "Project 9",
    blurDataURL: "data:image/jpeg;base64,/9j...",
  },
];

export default function Portfolio() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = useCallback(() => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  }, [swiperInstance]);

  const handleNext = useCallback(() => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  }, [swiperInstance]);

  const handleSlideChange = useCallback(() => {
    if (swiperInstance) {
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }
  }, [swiperInstance]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
      <div className="absolute h-full w-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container pt-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 lg:mb-6"
        >

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Transforming Ideas Into
              <span className="text-primary block mt-2">
                Digital Excellence
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl text-base lg:text-lg text-muted-foreground mx-auto"
          >
            Explore our portfolio of successful projects across web development,
            mobile applications, cloud solutions, and enterprise software.
          </motion.p>
        </motion.div>

        <div className="mt-10">
          <div className="relative w-full max-w-7xl mx-auto py-10 px-10 sm:px-12 lg:px-24">
            <Swiper
              onSwiper={setSwiperInstance}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2.5}
              spaceBetween={0}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 250,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,
              }}
              modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
              className="swiper-container"
              onSlideChange={handleSlideChange}
              breakpoints={{
                320: {
                  slidesPerView: 1.5,
                },
                500: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2.5,
                },
              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={slide.imageUrl}
                      alt={slide.alt}
                      fill
                      priority={index < 2}
                      sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                      quality={75}
                      placeholder="blur"
                      blurDataURL={slide.blurDataURL}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={handlePrev}
              className={`absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-indigo-500 backdrop-blur-sm transition-all duration-300 ${
                isBeginning
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:opacity-80 hover:bg-indigo-600"
              }`}
              aria-label="Previous slide"
              disabled={isBeginning}
            >
              <IoIosArrowBack className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
            </button>
            <button
              onClick={handleNext}
              className={`absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-indigo-500 backdrop-blur-sm transition-all duration-300 ${
                isEnd
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:opacity-80 hover:bg-indigo-600"
              }`}
              aria-label="Next slide"
              disabled={isEnd}
            >
              <IoIosArrowForward className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
