import Link from 'next/link';

const categories = [
  { label: 'Footwear', image: '/footwear.png', slug: 'footwear' },
  { label: 'Dresses', image: '/dress.png', slug: 'dresses' },
  { label: 'Travel Bags', image: '/bag.png', slug: 'travel-bags' },
  { label: 'Outerwear', image: '/outwear.png', slug: 'outerwear' },
  // { label: 'Men', image: '/men.png', slug: 'men' },
  // { label: 'Saree', image: '/saree.png', slug: 'saree' },
  // { label: 'Jewellery', image: '/jewel.png', slug: 'jewel' },
  // { label: 'Electronics', image: '/electronics.png', slug: 'electronics' },
];

export default function Category() {
  return (
    <section className="px-6 md:px-20 py-16 mt-20">
      <div className="mb-10">
        <p className="text-sm uppercase text-gray-600 tracking-widest">⌘ Categories</p>
        <h2 className="text-4xl font-semibold mt-2">Our Collection</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <Link key={idx} href={`/category/${cat.slug}`}>
            <div className="bg-[#c8d4d7] relative group overflow-hidden rounded-md shadow-sm cursor-pointer">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-72 h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 rounded shadow-md">
                {cat.label}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
