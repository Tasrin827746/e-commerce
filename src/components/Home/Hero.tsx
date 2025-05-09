'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const HeroBanner = () => {
  return (
    <section className="w-full flex flex-col md:flex-row h-screen overflow-hidden mt-20">
      {/* Left Side */}
      <motion.div
        className="flex-1 bg-[#f8eccc] flex flex-col justify-center px-6 md:px-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.h1
          className="text-6xl md:text-[80px] font-semibold leading-tight tracking-wide text-black uppercase"
          custom={0.1}
          variants={fadeIn}
        >
          Wear your confidence
        </motion.h1>

        <motion.p
          className="text-gray-600 mt-6 max-w-md"
          custom={0.2}
          variants={fadeIn}
        >
          Discover a curated selection of timeless designs and modern trends crafted to elevate your wardrobe. From statement pieces to everyday essentials, find the perfect fit that defines your unique style.
        </motion.p>

        <motion.div
          className="mt-6 flex items-center gap-4"
          custom={0.3}
          variants={fadeIn}
        >
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium flex items-center gap-2 hover:shadow-md transition">
            Shop Now <span className="bg-black text-white p-1 rounded-full"><ArrowRight size={14} /></span>
          </button>
        </motion.div>

        <motion.div
          className="mt-10"
          custom={0.4}
          variants={fadeIn}
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {['/user1.jpg', '/user2.jpg', '/user3.webp'].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`user-${i}`}
                  className="rounded-full border-2 border-white w-14 h-14"
                />
              ))}
            </div>
            <div>
              <p className="font-semibold text-black">50+</p>
              <p className="text-sm text-gray-500">Join our growing community of satisfied customers.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        className="flex-1 relative bg-[#bef0ed]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          src="/hero.png"
          alt="model"
          layout="fill"
          objectFit="contain"
          className="z-10"
        />
      </motion.div>
    </section>
  );
};

export default HeroBanner;
