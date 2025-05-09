import { notFound } from 'next/navigation';
import { products } from '@/data/latest';
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

  return (
    <div className="p-8 max-w-5xl mx-auto">
      {/* Product details */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 rounded-lg"
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl font-semibold mb-2">${product.price.toFixed(2)} USD</p>
          <p className="text-sm text-gray-500 mb-2">Size: {product.size}</p>
          <p className="mb-6">{product.description}</p>

          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {similarProducts.map((item) => (
              <Link key={item.id} href={`/latest/${item.id}`}>
                <div className="p-4 rounded-lg hover:shadow transition cursor-pointer">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-44 h-60 object-cover mb-2 rounded"
                  />
                  <h3 className="text-md font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
