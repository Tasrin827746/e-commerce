'use client';

import { notFound } from 'next/navigation';
import { products } from '@/data/allproducts';
import Link from 'next/link';

type ProductPageProps = {
  params: { id: string };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  const similarProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );

  const handleAddToCart = () => {
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="bg-[#f0f0f0] p-6 rounded-lg flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-sm h-auto object-contain rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold text-gray-800 mb-2">
            ${product.price.toFixed(2)} USD
          </p>
          <p className="text-md text-gray-600 mb-2">
            <span className="font-medium">Size:</span> {product.size}
          </p>
          <p className="text-md text-gray-700 mb-6">
            <span className="font-medium">Description:</span> {product.description}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Similar Products Section */}
      {similarProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {similarProducts.map((item) => (
              <Link key={item.id} href={`/product/${item.id}`}>
                <div className="p-4 bg-white rounded-lg hover:shadow-lg transition cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-44 h-60 object-cover mb-3 rounded mx-auto"
                  />
                  <h3 className="text-md font-semibold text-center">{item.title}</h3>
                  <p className="text-sm text-gray-500 text-center">
                    ${item.price.toFixed(2)} USD
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
