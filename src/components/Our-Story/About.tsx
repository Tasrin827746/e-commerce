
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className="px-6 md:px-20 py-24 bg-white mt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text content + bottom image */}
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">⌘ About Us</p>
            <h2 className="text-5xl font-semibold mt-2 mb-6">Our Story</h2>
            <h3 className="text-2xl font-light text-gray-800 mb-4">
              Redefining fashion for a modern world with elegance & ethical practices
            </h3>
            <p className="text-gray-600 mb-6">
              At Vessa, we redefine modern fashion with timeless designs that celebrate individuality and elegance.
              Founded with a passion for creating stylish, high-quality clothing, we aim to empower every individual to express themselves through fashion.
            </p>
            <Link href="/collection">
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition">
                Explore Collection <span>&raquo;</span>
              </button>
            </Link>
          </div>

          {/* Image below the button */}
          <div className="mt-10 w-full h-60 relative rounded overflow-hidden">
            <Image
              src="/about1.jpg"
              alt="Closet"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Top image only */}
        <div className="w-full h-[420px] relative rounded overflow-hidden">
          <Image
            src="/about2.jpg"
            alt="Designers at work"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
