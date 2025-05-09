'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

type SaleCardProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  bgColor: string;
};

const SaleCard = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  bgColor,
}: SaleCardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(buttonLink);
  };

  return (
    <div className={`flex flex-col md:flex-row items-center ${bgColor} rounded-xl p-8 gap-8`}>
      <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{description}</p>
        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-white text-gray-800 font-medium rounded-full px-6 py-3 shadow hover:shadow-md transition"
        >
          {buttonText}
          <span className="text-xl">&raquo;</span>
        </button>
      </div>
      <div className="flex-1">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={400}
          className="rounded-xl object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default function Offer() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 grid gap-10 md:grid-cols-2">
      <SaleCard
        title="Exclusive winter sale save more!"
        description="Shop today and enjoy up to 40% off all outerwear and accessories!"
        buttonText="Shop Comfort"
        buttonLink="/shop"
        imageSrc="/cloths.jpg"
        bgColor="bg-[#f8eccc]"
      />
      <SaleCard
        title="Seasonal Sale – Up to 50% Off!"
        description="Shop now and save up to 50% on selected styles."
        buttonText="Explore Fusion"
        buttonLink="/collection"
        imageSrc="/cloths2.jpg"
        bgColor="bg-[#bef0ed]"
      />
    </section>
  );
}
