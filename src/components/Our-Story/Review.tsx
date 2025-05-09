'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Ronald Richards',
    image: '/customer1.jpg',
    feedback:
      'Great service and fast delivery. The shoes I ordered are exactly as pictured, comfortable, and stylish. A bit expensive, but worth it!',
  },
  {
    name: 'Leslie Alexander',
    image: '/customer0.jpg',
    feedback:
      'I bought a dress for a special event, and it was perfect! The fabric is beautiful, and I got so many compliments. Highly recommend!',
  },
  {
    name: 'Marvin McKinney',
    image: '/customer2.jpg',
    feedback:
      "My new go-to store for casual and workwear. Everything I've purchased has been high quality and fits well.",
  },
  {
    name: 'Leslie Alexander',
    image: '/customer3.jpg',
    feedback:
      'Perfect for a special event! The fabric is beautiful and I got many compliments. Highly recommend!',
  },
];

export default function Review() {
  return (
    <section className="py-32 px-6 md:px-24 bg-white mt-20">
      <p className="text-sm uppercase tracking-widest text-gray-500">⌘ Testimonials</p>
      <h2 className="text-5xl font-semibold mt-2 mb-12">Happy Customers</h2>

      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="group"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white border rounded-2xl p-10 transition hover:shadow-xl h-64 hover:bg-slate-100 mb-8">
                <div className="flex gap-6 items-start">
                  <div className="w-44 h-20 relative rounded-full border-2 border-gray-200">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 text-base italic mb-4 leading-relaxed">
                      {item.feedback}
                    </p>
                    <h4 className="font-semibold text-lg text-gray-800">{item.name}</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-prev !text-black !w-10 !h-10 !bg-gray-200 !rounded-full !shadow-md !flex !items-center !justify-center !top-1/2 -translate-y-1/2 -left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="swiper-button-next !text-black !w-10 !h-10 !bg-gray-200 !rounded-full !shadow-md !flex !items-center !justify-center !top-1/2 -translate-y-1/2 -right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Swiper>
      </div>
    </section>
  );
}
