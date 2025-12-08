// components/Footer.tsx
import React from "react";
import { RiMailLine, RiPhoneLine, RiMapPinLine } from "react-icons/ri";

const Footer: React.FC = () => {
  return (
    <footer className="bg-linear-to-r from-gray-900 via-black to-gray-900 border-t border-gray-700 mt-4">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="text-center">
          <p className="text-white text-lg font-semibold mb-4">
            All the Copyrights are Reserved To  Voltsec.io
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
            <span className="flex items-center">
              <RiMailLine className="mr-2" />
              Contact@voltsec.io
            </span>
            <span className="flex items-center">
              <RiPhoneLine className="mr-2" />
              +91 99976 90669
            </span>
            <span className="flex items-center">
              <RiMapPinLine className="mr-2" />
              New Delhi, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
