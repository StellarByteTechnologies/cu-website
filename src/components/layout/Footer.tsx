import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-gray-900 text-white px-4 sm:px-6 md:px-12 py-8">
      <div className="flex flex-col items-center mt-[30px] mb-[20px] sm:mt-[40px] sm:mb-[30px] lg:mt-[60px] lg:mb-[40px]">
        {/* Inner Container */}
        <div className="w-full max-w-[1327px] flex flex-col items-center">
          {/* Footer Logo (Responsive Size) */}
          <div className="w-[180px] sm:w-[250px] md:w-[400px] lg:w-[906px] h-auto mb-6 sm:mb-8">
            <img
              src="/images/logo-footer.svg"
              alt="CU Cosmetics Logo"
              className="w-full h-auto"
            />
          </div>

          {/* Content Sections */}
          <div className="flex flex-col md:flex-row gap-[30px] sm:gap-[40px] md:gap-[80px] mt-[30px] sm:mt-[40px] w-full justify-center items-center md:items-start">
            {/* Left Section */}
            <div className="w-full max-w-[500px] flex flex-col items-center md:items-start">
              <p className="text-[#8F9FA3] text-[14px] sm:text-[16px] leading-[140%] text-center md:text-left">
                Simple, effective, and transformative personal care for
                everyone.
              </p>

              {/* Button with Dot */}
              <div className="flex justify-center md:justify-start items-center mt-[12px] sm:mt-[16px]">
                <button className="text-white text-[12px] sm:text-[14px] font-semibold px-3 sm:px-4 py-1.5 sm:py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all">
                  More about us
                </button>
                <div className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] bg-white rounded-full ml-[8px] sm:ml-[12px]"></div>
              </div>

              {/* Copyright Text */}
              <p className="text-[#8F9FA3] text-[10px] sm:text-[12px] leading-[140%] text-center md:text-left mt-[12px] sm:mt-[16px]">
                © 2025 Diara Care Private Limited. All rights reserved. All
                trademarks are the property of their respective owners.
              </p>
            </div>

            {/* Right Section (Links + Contact) */}
            <div className="w-full max-w-[500px] flex flex-col items-center md:items-start">
              {/* Links (Responsive Grid) */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-center md:text-left">
                {[
                  { href: '/about', label: 'About' },
                  { href: '/dermats', label: 'Dermats' },
                  { href: '/magic-code', label: 'Magic Code' },
                  { href: '/testimonials', label: 'Testimonials' },
                  { href: '/terms', label: 'Terms & Conditions' },
                  { href: '/privacy-policy', label: 'Privacy Policy' },
                  { href: '/shipping-policy', label: 'Shipping Policy' },
                  {
                    href: '/returns-refunds-cancellation-policy',
                    label: 'Refund & Return Policy',
                  },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[#8F9FA3] text-[14px] sm:text-[16px] hover:text-white hover:font-bold transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Contact Section */}
              <div className="mt-[16px] sm:mt-[24px] max-w-[400px] text-center md:text-left">
                <p className="text-white text-[16px] sm:text-[20px] font-medium mb-2">
                  Contact Us
                </p>
                <p className="text-[#8F9FA3] text-[12px] sm:text-[14px] leading-[160%]">
                  Email:{' '}
                  <a
                    href="mailto:support@diara.care"
                    className="hover:text-white"
                  >
                    support@diara.care
                  </a>
                  <br />
                  Address: RZ-1/15, St No. 4, Tughlakabad Ext., Alaknanda
                  Market,
                  <br />
                  New Delhi - 110019
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[1327px] border-t border-gray-700 mt-4 sm:mt-6 pt-3 sm:pt-4"></div>

        {/* Social Media Icons */}
        <div className="flex gap-4 sm:gap-6 mt-3 sm:mt-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[#8F9FA3] hover:text-white text-xl sm:text-2xl transition-all" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-[#8F9FA3] hover:text-white text-xl sm:text-2xl transition-all" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-[#8F9FA3] hover:text-white text-xl sm:text-2xl transition-all" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
