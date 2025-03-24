'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  productIcon: string;
  productImage: string;
  productTitle: string;
  className?: string;
}

const ProductComparisonSlider: React.FC<ProductComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  productIcon,
  productImage,
  productTitle,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newPosition = ((clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleSliderMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleSliderMove(e.touches[0].clientX);
  };

  return (
    <motion.div
      className={`flex flex-col md:flex-row gap-6 w-full max-w-[1327px] mx-auto ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* ✅ Before and After Slider Section with Motion */}
      <motion.div
        className="w-full md:w-[764px] h-[400px] md:h-[632px] rounded-[12px] overflow-hidden relative cursor-pointer"
        ref={sliderRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        {/* ✅ After Image (Full Background) */}
        <Image
          src={afterImage}
          alt="After Image"
          fill
          className="object-cover"
        />

        {/* ✅ Before Image with Slider */}
        <motion.div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={beforeImage}
            alt="Before Image"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* ✅ Vertical Slider Line */}
        <motion.div
          className="absolute top-0 h-full w-[3px] bg-white rounded-full shadow-md"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          animate={{ opacity: 1, scaleY: [0.8, 1] }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        ></motion.div>

        {/* ✅ Draggable Handle (Mobile & Desktop Support) */}
        <motion.div
          className="absolute top-1/2 w-[30px] h-[30px] bg-white rounded-full shadow-lg flex items-center justify-center cursor-grab"
          style={{
            left: `${sliderPosition}%`,
            transform: 'translate(-50%, -50%)',
          }}
          whileHover={{ scale: 1.1 }}
        ></motion.div>

        {/* ✅ Before and After Labels */}
        <motion.div
          className="absolute top-4 left-4 text-white text-[14px] md:text-[18px] font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Before
        </motion.div>
        <motion.div
          className="absolute top-4 right-4 text-white text-[14px] md:text-[18px] font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-lg"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          After
        </motion.div>
      </motion.div>

      {/* ✅ Product Info Section */}
      <motion.div
        className="w-full md:w-[539px] h-[400px] md:h-[632px] rounded-[12px] bg-[#F8F8F8] p-6 flex flex-col justify-between items-center shadow-md"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      >
        {/* ✅ Product Icon */}
        <motion.div
          className="w-[48px] h-[48px]"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Image
            src={productIcon}
            alt="Product Icon"
            width={48}
            height={48}
            className="object-contain"
          />
        </motion.div>

        {/* ✅ Product Image (Centered) */}
        <motion.div
          className="flex justify-center items-center flex-grow"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src={productImage}
            alt="Product"
            width={200}
            height={200}
            className="object-contain"
          />
        </motion.div>

        {/* ✅ Product Title Section */}
        <motion.div
          className="w-full h-[90px] md:h-[120px] bg-white rounded-[12px] p-4 flex items-center justify-center shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-[22px] md:text-[32px] font-medium text-center">
            {productTitle}
          </h2>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductComparisonSlider;
