'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <motion.div
      className="relative w-full max-w-[1327px] mx-auto flex flex-col items-start py-6 px-6 md:px-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* ✅ Top Line (Full Width on Mobile, Aligned with Navbar on Larger Screens) */}
      <div className="absolute top-0 left-0 w-full sm:w-[90%] md:w-full h-[3px] bg-black"></div>

      {/* ✅ Left-Aligned Heading Text */}
      <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold leading-[110%] text-black">
        {text}
      </h1>

      {/* ✅ Vertical Line (Positioned with Navbar Alignment) */}
      <div className="absolute top-0 bottom-0 w-[3px] bg-black right-[calc(5%)] sm:right-[calc(10%)] md:right-[calc(8%)]"></div>

      {/* ✅ Bottom Line (Full Width on Mobile, Aligned with Navbar on Larger Screens) */}
      <div className="absolute bottom-0 left-0 w-full sm:w-[90%] md:w-full h-[3px] bg-black"></div>
    </motion.div>
  );
};

export default Heading;
