'use client';

import { Search, User, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'Shop', href: '/shop' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Collection', href: '/collection' },
  { label: 'Blogs', href: '/blog' },
  { label: 'Reviews', href: '/review' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b shadow-sm bg-slate-50">
      <nav className="flex items-center justify-between px-6 py-4 max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-widest">
          <Link href="/">
            <img src="/logo.png" alt="Vessa Logo" className="w-12 h-12 rounded-full cursor-pointer" />
          </Link>
        </div>

        {/* Center Links */}
        <ul className="hidden md:flex gap-8 tracking-wider text-black uppercase font-medium text-sm">
          {navItems.map((item) => (
            <li className='transition duration-400 ease-in-out transform hover:scale-110 hover:text-blue-600 hover:font-semibold cursor-pointer' key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center px-4 py-2 rounded-full border text-sm text-gray-600 w-64 focus-within:border-blue-600 focus-within:ring-0 focus-within:ring-black">
            <Search className="h-4 w-4 mr-2 text-gray-600" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none w-ful text-gray-600l"
            />
          </div>

          {/* User & Cart */}
          <User className="w-5 h-5 cursor-pointer text-gray-700 hover:text-blue-500" />
          <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-700 hover:text-blue-500" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
