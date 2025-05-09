'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

const categoryMap: { [key: string]: string } = {
  'footwear': 'Explore our premium shoes and sneakers!',
  'dresses': 'Discover our elegant collection of dresses.',
  'travel-bags': 'Check out travel-ready and stylish bags.',
  'outerwear': 'Stay warm with our cozy outerwear.',
  // 'men': 'Explore our premium shoes and sneakers!',
  // 'saree': 'Discover our elegant collection of dresses.',
  // 'jewel': 'Check out travel-ready and stylish bags.',
  // 'electronics': 'Check out travel-ready and stylish bags.',
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const description = categoryMap[slug];
  const filteredProducts = products.filter((product) => product.category === slug);

  return (
    <div className="min-h-screen px-6 md:px-20 py-16">
      <h1 className="text-3xl font-bold capitalize">{slug}</h1>
      <p className="mt-4 text-lg text-gray-600">{description || 'No category description found.'}</p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="border rounded-lg p-6 hover:shadow-lg transition bg-gray-300">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover rounded"
                />
                <h3 className="text-lg font-semibold mt-4">{product.title}</h3>
                <p className="text-gray-700">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500">No products found in this category.</p>
        )}
      </div>
    </div>
  );
}
