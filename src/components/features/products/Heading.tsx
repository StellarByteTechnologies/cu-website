'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  // Split text for mobile view
  const words = text.split(' ');
  const firstHalf = words.slice(0, Math.ceil(words.length / 2)).join(' ');
  const secondHalf = words.slice(Math.ceil(words.length / 2)).join(' ');

  return (
    <motion.div
      className="relative w-full max-w-[1327px] mx-auto py-3 md:py-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-black"></div>

      <div className="flex relative h-full">
        {/* Heading Container */}
        <div className="flex-grow pr-12">
          {/* Mobile Heading with Line Break */}
          <h2 className="md:hidden text-2xl font-semibold uppercase leading-tight py-2">
            {firstHalf}
            <br />
            {secondHalf}
          </h2>

          {/* Desktop Heading (No Line Break) */}
          <h2 className="hidden md:block text-4xl font-semibold uppercase leading-tight">
            {text}
          </h2>
        </div>

        {/* Vertical Line - Fixed width, extends full height */}
        <div className="w-[2px] bg-black absolute right-0 top-0 bottom-0"></div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></div>
    </motion.div>
  );
};

export default Heading;
