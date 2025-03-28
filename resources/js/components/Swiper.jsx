import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import testmonialIcon from '../assets/testmonialIcon.svg';
import testmonial1 from '../assets/testmonial1.webp';
import testmonial2 from '../assets/testmonial2.webp';

const Swipper = () => {
  const testimonials = [
    {
      quote: "This platform made renting equipment effortless! The transparent pricing and fast delivery saved us time and money.",
      name: "Michael Kimaro",
      role: "Project Supervisor",
      avatar: testmonial1
    },
    {
      quote: "Reliable, efficient, and incredibly easy to use. I highly recommend this service to anyone in the construction industry!",
      name: "Amina Yusuf",
      role: "Construction Manager",
      avatar: testmonial2
    },
    {
      quote: "This platform made renting equipment effortless! The transparent pricing and fast delivery saved us time and money.",
      name: "Michael Kimaro",
      role: "Project Supervisor",
      avatar: testmonial1
    },
  ];

  return (
    <Swiper
      slidesPerView={1.25}
      spaceBetween={20}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1.5,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2.3,
          spaceBetween: 80,
        },
        1280: {
          slidesPerView: 3.2,
          spaceBetween: 80,
        }
      }}
      modules={[FreeMode, Pagination]}
      className="px-4 md:px-8 mt-12 [&_.swiper-pagination-bullet-active]:bg-amber-500"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full">
            <img 
              src={testmonialIcon} 
              alt="quote icon" 
              className="w-12 h-12 mb-4"
            />
            <p className="text-gray-600 mb-6">{testimonial.quote}</p>
            <div className="flex items-center gap-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Swipper;