'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/testimonials', label: 'Dermats' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact-us', label: 'Contact Us' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const menuVariants = {
    closed: { x: '100%' },
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } },
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={`w-[87%] max-w-[1327px] px-6 md:px-12 h-[70px] fixed top-4 left-0 right-0 mx-auto
          flex justify-between items-center rounded-[16px] z-50 
          ${
            scrolled
              ? 'bg-[#1C1B1F]/90 backdrop-blur-lg shadow-lg transition-all duration-300'
              : 'bg-[#1C1B1F]/80 backdrop-blur-md shadow-md transition-all duration-300'
          }`}
        aria-label="Main navigation"
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="Diara Logo"
              width={80}
              height={80}
              priority
              className="transition-all duration-300 hover:brightness-110"
            />
          </Link>
        </motion.div>

        <div className="hidden lg:flex items-center gap-x-8 xl:gap-x-12">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={linkVariants}
            >
              <Link href={link.href} className="group">
                <span
                  className={`text-lg font-medium cursor-pointer flex items-center gap-2
                    ${
                      pathname === link.href
                        ? 'text-white relative after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[2px] after:bg-white after:rounded-full'
                        : 'text-gray-200 hover:text-white transition-colors duration-300'
                    }`}
                >
                  <span className="relative">
                    {link.label}
                    <span
                      className={`absolute left-0 bottom-[-6px] w-0 h-[2px] bg-white rounded-full 
                      transition-all duration-300 ${
                        pathname === link.href ? 'w-full' : 'group-hover:w-full'
                      }`}
                    ></span>
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 
                text-white px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 
                hover:shadow-lg hover:shadow-green-500/20 ml-4"
              aria-label="Contact via WhatsApp"
            >
              <FaWhatsapp className="text-white text-lg" />
              <span className="text-sm font-medium">Chat Now</span>
            </a>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white cursor-pointer z-50 fixed right-6 top-6"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        id="mobile-menu"
        ref={menuRef}
        initial="closed"
        animate={menuOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className="fixed top-0 right-0 w-[75%] sm:w-[60%] h-full bg-[#1C1B1F] 
          z-50 shadow-xl p-6 flex flex-col items-start lg:hidden overflow-y-auto"
      >
        <div className="w-full flex justify-between items-center mb-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/images/logo.svg"
              alt="Diara Logo"
              width={80}
              height={30}
              priority
              quality={100}
              className="w-auto h-auto"
            />
          </Link>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-white"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <FiX size={16} />
          </motion.button>
        </div>

        <div className="w-full mt-6 flex flex-col items-start gap-6">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="w-full"
            >
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group w-full flex items-center gap-3 p-3 rounded-xl 
                  hover:bg-white/5 transition-all duration-300"
              >
                <span
                  className={`text-xl font-medium transition-all duration-300
                  ${
                    pathname === link.href
                      ? 'text-white'
                      : 'text-gray-300 group-hover:text-white'
                  }`}
                >
                  {link.label}
                </span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="ml-auto w-2 h-2 rounded-full bg-white"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg 
              flex items-center justify-center gap-2 transition-all duration-300 
              hover:bg-green-600"
          >
            <FaWhatsapp className="text-white text-lg" />
            <span className="text-sm font-medium">Contact via WhatsApp</span>
          </a>

          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© 2025 Diara. All rights reserved.</p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Navbar;
