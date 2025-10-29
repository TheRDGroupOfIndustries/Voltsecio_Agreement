// components/Header.tsx
import React from 'react';

interface HeaderProps {
  title?: string;
  subtitle?: string;
  effectiveDate?: string;
  version?: string;
}

const Header: React.FC<HeaderProps> = ({
  title = 'The RD Group of Industries',
  subtitle = 'Partnership & Reseller Agreement',
  effectiveDate = '10/29/2025',
  version = '1.0',
}) => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-xl border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center">
          <h1
            className="text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Pacifico, serif' }}
          >
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-2">{subtitle}</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
            <span className="flex items-center">
              <i className="ri-calendar-line mr-2"></i>Effective Date: {effectiveDate}
            </span>
            <span className="flex items-center">
              <i className="ri-file-text-line mr-2"></i>Version {version}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
