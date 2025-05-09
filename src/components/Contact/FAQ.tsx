import { Mail, Phone, Plus } from "lucide-react";

const faqs = [
  "Do you offer international shipping?",
  "What should I do if I receive a defective or incorrect item?",
  "Can I use multiple discount codes on a single order?",
  "How do I know what size to choose?",
  "How can I properly maintain and care for my clothes?",
  "What payment methods do you accept?",
];

const FAQ = () => {
  return (
    <section className="bg-white py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side */}
        <div>
          <p className="text-sm font-medium text-gray-500 mb-2">⌘ FAQ’S</p>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 mb-10">
            Find answers to our most common questions and learn more about our product.
          </p>

          <div className="space-y-6 border-t border-gray-200 pt-6">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-600" />
              <p className="text-sm text-gray-800">
                <span className="font-medium"></span> katberryorg@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3 border-t border-gray-200 pt-6">
              <Phone className="w-5 h-5 text-gray-600" />
              <p className="text-sm text-gray-800">
                <span className="font-medium"></span> +880-199-7412-505
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-l border-gray-300 pl-4 hover:bg-gray-50 py-4 cursor-pointer transition"
            >
              <p className="text-gray-800 text-sm">{faq}</p>
              <Plus className="w-4 h-4 text-gray-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
