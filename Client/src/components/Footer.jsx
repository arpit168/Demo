import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 px-6">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            DemoApp
          </h2>
          <p className="text-sm leading-relaxed">
            A modern demo application built with React and Tailwind CSS.
            Clean UI, scalable structure and professional design.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Services</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer transition">Blog</li>
            <li className="hover:text-white cursor-pointer transition">Help Center</li>
            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer transition">Terms</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm">Email: support@demoapp.com</p>
          <p className="text-sm mt-2">Phone: +91 98765 43210</p>

          <div className="flex gap-4 mt-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
              F
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition cursor-pointer">
              I
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sky-500 transition cursor-pointer">
              T
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DemoApp. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
