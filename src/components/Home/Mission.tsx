"use client";

import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Mission = () => {

  const router = useRouter();
  return (
    <section className="w-full py-20 px-6 md:px-20 bg-white">
      <div className="flex flex-col lg:flex-row items-start gap-10 max-w-7xl mx-auto">
        {/* Left Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/fashion.jpg" 
            alt="Fashion stylist browsing clothes"
            width={600}
            height={500}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug mb-6">
            Our mission is to empower individuals to express their unique style confidently through curated collections.
          </h2>
          <div className="text-gray-600 space-y-5 text-base">
            <p>
              From everyday essentials to standout statement pieces, each item is thoughtfully designed to ensure quality, comfort, and elegance. We take pride in crafting clothing that complements every aspect of your lifestyle, whether you&apos;re dressing for work, play, or special occasions.
            </p>
            <p>
              Sustainability drives us forward. We are committed to responsible practices that respect both people and the planet while delivering fashion that feels as good as it looks.
            </p>
          </div>

          <button onClick={()=> router.push ('/our-story')} className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black text-black hover:bg-black hover:text-white transition">
            About us <ChevronsRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;
