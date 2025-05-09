
import Image from 'next/image';
import { Truck, PackageCheck, Wallet, Headset } from 'lucide-react';

const features = [
  {
    icon: <PackageCheck size={28} />,
    title: 'Free Shipping',
    description: 'Shop your favorite styles with the convenience of free delivery, directly to your doorstep.',
  },
  {
    icon: <Truck size={28} />,
    title: 'Fast Delivery',
    description: 'Experience fast delivery, ensuring your stylish finds arrive at your door in no time.',
  },
  {
    icon: <Wallet size={28} />,
    title: 'Flexible Payment',
    description: 'Shop now and pay your way with flexible payment options designed to fit your budget.',
  },
  {
    icon: <Headset size={28} />,
    title: 'Premium Support',
    description: 'Enjoy premium support with personalized assistance, a seamless shopping experience every time.',
  },
];

const Feature = () => {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      <div className="flex flex-col lg:flex-row items-start gap-10 max-w-7xl mx-auto">
        {/* Left Image */}
        <div className="w-full lg:w-1/3">
          <Image
            src="/designer.jpg"
            alt="Designer working"
            width={500}
            height={600}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* Features */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-4 border-t pt-6">
              <div className="text-black">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
