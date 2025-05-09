import React from "react";

const Contact = () => {
  return (
    <div className="bg-white py-16 px-6 lg:px-24 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          <img
            src="/contact.jpg" 
            alt="Let's Connect"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div>
          <p className="text-sm font-medium text-gray-500">⌘ CONTACT US</p>
          <h2 className="text-4xl font-bold text-black mt-2 mb-8">Let&apos;s Connect</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium">First Name*</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name*</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email*</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Message*</label>
              <textarea
                placeholder="Enter your message here..."
                className="w-full border-b border-gray-300 focus:outline-none focus:border-black py-2"
                rows={4}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <p className="text-sm">
                I hereby agree to the{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>{" "}
                of Vessa.
              </p>
            </div>

            <button
              type="submit"
              className="mt-4 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
