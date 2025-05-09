import { FC } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const pagesLinks = [
    { name: 'About us', href: '/about' },
    { name: 'Shop', href: '/shop' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Store', href: '/store' },
  ];

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding & Newsletter */}
        <div>
          <img src="/logo.png" alt="" className='w-12 h-12 rounded-full'/>
          <p className="mt-4 text-gray-300">
            Stay updated with the latest trends, & exclusive promotions.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-white bg-transparent border"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-transparent border text-white hover:bg-gray-100 hover:text-black"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm uppercase text-gray-500">Get in touch</h3>
          <p className="mt-4 text-lg">katberryorg@gmail.com</p>
        </div>

        {/* Pages */}
        <div>
  <h3 className="text-sm uppercase text-gray-500">Pages</h3>
  <ul className="mt-4 space-y-2">
    {pagesLinks.map((link) => (
      <li key={link.name}>
        <a href={link.href} className="hover:underline">
          {link.name}
        </a>
      </li>
    ))}
  </ul>
</div>

        {/* Resources */}
        <div>
        <h3 className='text-sm text-gray-500'>SOCIAL MEDIA</h3>
        <div className="flex space-x-4 mt-6">
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram className="text-white hover:text-blue-400" />
    </a>
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FaFacebookF className="text-white hover:text-blue-400" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <FaTwitter className="text-white hover:text-blue-400" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <FaLinkedin className="text-white hover:text-blue-400" />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <FaYoutube className="text-white hover:text-blue-400" />
    </a>
  </div>
        </div>
       
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-gray-400 text-center md:text-left md:flex md:justify-between">
        <p>© 2025 Katberry. Designed by Tasrin. Powered by Katberry</p>
        <div className="mt-2 md:mt-0 space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Delivery & Returns</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
