'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/testimonials', label: 'Dermats' },
    { href: '/magic-code', label: 'Magic Code' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact' },
  ];

  return (
    <nav className="w-full max-w-[1327px] h-[88px] md:h-[88px] fixed top-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center bg-[#1C1B1FCC] px-4 z-50 rounded-[16px] shadow-2xl backdrop-blur-lg md:w-[1327px] md:max-w-none sm:w-[326px] sm:h-[56px]">
      {/* Logo */}
      <div className="w-[114px] h-[40px] flex-shrink-0">
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="lg:hidden text-white text-3xl cursor-pointer z-50"
        onClick={toggleMenu}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Navigation Links for Desktop and Medium Screens */}
      <div className="hidden md:flex md:w-[883px] md:h-[36px] md:items-center md:justify-between">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span
              className={`text-[18px] lg:text-[20px] font-medium cursor-pointer text-white px-3 py-2 rounded-lg transition-all duration-300 flex items-center ${
                pathname === link.href
                  ? 'border-b-2 border-white'
                  : 'hover:text-white'
              }`}
            >
              {link.label === 'Magic Code' ? (
                <span className="flex items-center">
                  <img
                    src="/images/magic-code.svg"
                    alt="Magic Code Icon"
                    className="w-5 h-5 mr-[5px]"
                  />
                  <span className="relative inline-block text-white animate-glow">
                    Magic Code
                  </span>
                </span>
              ) : (
                link.label
              )}
            </span>
          </Link>
        ))}
      </div>

      {/* Modern Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full bg-black z-50 flex flex-col items-center transition-all duration-500 ease-in-out">
          <div className="w-full flex justify-between items-center px-6 py-4">
            {/* Diara Logo */}
            <div className="w-[114px] h-[40px]">
              <img
                src="/images/logo.svg"
                alt="Diara Logo"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Close Button */}
            <button className="text-white text-3xl" onClick={closeMenu}>
              <FiX />
            </button>
          </div>
          <div className="mt-10 flex flex-col items-center space-y-6 pb-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu}>
                <span
                  className={`text-3xl font-semibold cursor-pointer text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center ${
                    pathname === link.href
                      ? 'border-b-2 border-white'
                      : 'hover:text-white'
                  }`}
                >
                  {link.label === 'Magic Code' ? (
                    <span className="flex items-center">
                      <img
                        src="/images/magic-code.svg"
                        alt="Magic Code Icon"
                        className="w-5 h-5 mr-[5px]"
                      />
                      <span className="relative inline-block text-white animate-glow">
                        Magic Code
                      </span>
                    </span>
                  ) : (
                    link.label
                  )}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Glow Animation */}
      <style jsx>{`
        .animate-glow {
          background: linear-gradient(270deg, #ffffff, #1c1b1f, #ffffff);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: glow 3s ease infinite;
        }

        @keyframes glow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
