import { FC } from 'react';
import { LucideShirt, LucideGlobe, LucideRuler } from 'lucide-react';
import { JSX } from 'react/jsx-runtime';

type Feature = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: <LucideShirt className="w-8 h-8" />,
    title: 'Handcrafted Perfection',
    description: 'Shop your favorite styles with the convenience of free delivery, directly to your doorstep.',
  },
  {
    icon: <LucideGlobe className="w-8 h-8" />,
    title: 'Global Craftsmanship',
    description: 'Shop now and pay your way with flexible payment options designed to fit your budget.',
  },
  {
    icon: <LucideRuler className="w-8 h-8" />,
    title: 'Size–Inclusive Designs',
    description: 'Shop now and pay your way with flexible payment options designed to fit your budget.',
  },
];

const Crafts: FC = () => {
  return (
    <section className="bg-[#ece6dd] py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center md:items-start gap-4">
            <div className="text-black">{feature.icon}</div>
            <h3 className="text-lg font-medium text-black">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Crafts;
