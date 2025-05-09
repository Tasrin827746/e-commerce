'use client';

import { useState } from 'react';
import Link from 'next/link';
import { products } from '@/data/latest';

export default function LatestProducts() {
  const [showAll, setShowAll] = useState(false);

  const visibleProducts = showAll ? products : products.slice(0, 6);

  return (
    <section className="py-12 px-6">
      <h4 className="uppercase text-sm tracking-wide text-gray-500 mb-2">⌘ Now Trending</h4>
      <h2 className="text-4xl font-bold mb-8">Latest Products</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {visibleProducts.map((product) => (
          <Link key={product.id} href={`/latest/${product.id}`}>
            <div className="cursor-pointer group">
              <div className="bg-[#d6e1f0] px-2 py-6 rounded-lg">
                <img
                  src={product.image}
                  alt={product.title}
                  className="mx-auto w-40 h-44"
                />
              </div>
              <h3 className="text-lg mt-4">{product.title}</h3>
              <p className="text-sm text-gray-500">${product.price.toFixed(2)} USD</p>
            </div>
          </Link>
        ))}
      </div>

      {!showAll && products.length > 3 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            See All Products
          </button>
        </div>
      )}
    </section>
  );
}
