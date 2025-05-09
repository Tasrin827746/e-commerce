'use client';

import Link from 'next/link';
import { products } from '@/data/features';

export default function FeaturedProducts() {
  return (
    <section className="py-12 px-6 mt-20">
      <h4 className="uppercase text-sm tracking-wide text-gray-500 mb-2">⌘ Exclusive Finds</h4>
      <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/featured/${product.id}`}>
            <div className="cursor-pointer group">
              <div className="bg-[#e2d7d3] p-6 rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto w-40 h-64"
                />
              </div>
              <h3 className="text-lg font-medium mt-4">{product.title}</h3>
              <p className="text-sm text-gray-500">${product.price.toFixed(2)} USD</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
