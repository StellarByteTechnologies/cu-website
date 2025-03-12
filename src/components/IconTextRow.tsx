'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface IconTextItemProps {
  svgPath: string; // Path to the SVG
  text: string;
  textColor: string;
}

interface IconTextRowProps {
  items: IconTextItemProps[];
}

// ✅ Staggered animation for smooth appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

// ✅ Individual item animation (fade-in + slide effect)
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const IconTextRow: React.FC<IconTextRowProps> = ({ items }) => {
  return (
    <motion.div
      className="w-full max-w-[1327px] flex flex-col sm:flex-row sm:justify-start items-start gap-6 sm:gap-[56px] mx-auto pt-4 px-6 md:px-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center justify-start w-full sm:w-auto"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* ✅ Left-Aligned Icon Parallel to Navbar */}
          <motion.div
            className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] flex items-center justify-center 
                      shadow-md sm:shadow-lg shadow-gray-600/30 rounded-full bg-white"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={item.svgPath}
              alt={item.text}
              width={56}
              height={56}
              className="object-contain"
            />
          </motion.div>

          {/* ✅ Animated Text */}
          <motion.span
            className="ml-3 text-[18px] sm:text-[24px] md:text-[28px] font-semibold leading-[110%] text-left"
            style={{ color: item.textColor }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            {item.text}
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default IconTextRow;
