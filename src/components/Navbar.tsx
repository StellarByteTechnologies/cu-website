'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle Menu
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Navigation Links
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/testimonials', label: 'Dermats' },
    { href: '/magic-code', label: 'Magic Code' },
    { href: '/about-us', label: 'About us' },
    { href: '/blogs', label: 'Blogs' },
  ];

  return (
    <>
      {/* Navbar Container */}
      <nav className="w-[87%] max-w-[1327px] px-6 md:px-12 h-[70px] fixed top-4 left-1/2 transform -translate-x-1/2 flex justify-between items-center bg-[#1C1B1F]/80 backdrop-blur-lg rounded-[16px] z-50 shadow-lg">
        {/* Logo */}
        <div className="relative">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Diara Logo"
              width={80} // Replace with desired width
              height={80} // Replace with desired height
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-x-20">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`text-lg font-medium text-white cursor-pointer transition-all duration-300 ${
                  pathname === link.href
                    ? 'border-b-2 border-white'
                    : 'hover:text-gray-300'
                }`}
              >
                {link.label === 'Magic Code' ? (
                  <span className="flex items-center before:content-['✨'] before:mr-2">
                    {link.label}
                  </span>
                ) : (
                  link.label
                )}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl cursor-pointer z-50"
          onClick={toggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Modern Mobile Navigation Panel */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-lg transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Menu Content */}
        <div className="fixed top-0 right-0 w-[75%] sm:w-[60%] h-full bg-[#1C1B1F]/90 backdrop-blur-xl shadow-lg rounded-l-xl p-8 flex flex-col items-center">
          {/* Close Button */}
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={toggleMenu}
          >
            <FiX />
          </button>

          {/* Mobile Menu Links */}
          <div className="mt-20 flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                <span className="text-xl font-medium text-white cursor-pointer transition-all duration-300 hover:text-gray-300">
                  {link.label === 'Magic Code' ? (
                    <span className="flex items-center before:content-['✨'] before:mr-2">
                      {link.label}
                    </span>
                  ) : (
                    link.label
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Call to Action Button (Optional) */}
          <button className="mt-12 px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:bg-gray-200 transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
