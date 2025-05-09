import { Mail, Phone } from "lucide-react";

const Info = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-medium text-gray-500 mb-2">⌘ Contact Information</p>
          <h2 className="text-xl text-gray-800 font-normal leading-relaxed mb-10">
            We’re here to help! Whether you have a question about our products, an order,
            or just want to connect, we’d love to hear from you.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* General Contact */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">General Contact</h3>
              <p className="text-sm text-gray-600 mb-4">
                Contact us for any support or general inquiries.
              </p>
              <div className="inline-flex items-center bg-gray-200 rounded-full px-4 py-2 text-sm text-gray-800">
                <Phone size={16} className="mr-2" />
                +880-199-7412–505
              </div>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get in touch with us through email for quick support.
              </p>
              <div className="inline-flex items-center bg-gray-200 rounded-full px-4 py-2 text-sm text-gray-800">
                <Mail size={16} className="mr-2" />
                katberryorg@gmail.com
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full">
          <img
            src="/contact2.jpg" 
            alt="Contact Illustration"
            className="w-full rounded-lg object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
