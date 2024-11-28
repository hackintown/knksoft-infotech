'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mukul',
    position: 'Founder',
    company: 'Aagyo, India',
    image: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
    quote: 'I am happy to have chosen Valueappz to launch my Hyperlocal Food and Grocery Delivery Business. We got all necessary features of Zomato, BlinkIt into a single platform in less than 3 months and a fraction of tech costs that we would have incurred building it from scratch. Our business has been growing exponentially and ValueAppz team has been flexible to make customizations based on our customers feedback.',
  },
  {
    id: 2,
    name: 'Sarah',
    position: 'CEO',
    company: 'TechFlow, USA',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote: 'Working with this team has transformed our business operations completely. Their innovative solutions and dedication to customer success have helped us achieve remarkable growth in record time.',
  },
  {
    id: 3,
    name: 'James',
    position: 'Director',
    company: 'InnovateCo, UK',
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
    quote: 'The level of professionalism and technical expertise demonstrated by the team is outstanding. They delivered exactly what we needed and went above and beyond to ensure our satisfaction.',
  },
]

export default function Testimonials() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Hear What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the transformative experiences of our valued customers and how our services have positively impacted their business.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !mx-2',
            bulletActiveClass: '!bg-rose-400 !opacity-100',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonials-swiper !pb-16"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 px-4">
                <div className="w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden bg-rose-200 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <blockquote className="text-lg md:text-xl text-gray-700 mb-6 relative">
                    <span className="absolute -left-4 -top-4 text-6xl text-rose-200">&ldquo;</span>
                    <p className="relative z-10">{testimonial.quote}</p>
                  </blockquote>
                  <div>
                    <p className="font-semibold text-xl text-gray-900 mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600">
                      {testimonial.position} - {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #cbd5e1;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet:hover {
          opacity: 0.8;
        }
      `}</style>
    </section>
  )
}
