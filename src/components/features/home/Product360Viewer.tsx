'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiRefreshCw } from 'react-icons/fi';

const Product360Viewer = () => {
  const [currentView, setCurrentView] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const productViews = [
    '/images/sunscreen/front.jpg',
    '/images/sunscreen/back.jpg',
    // Add more angles if available
  ];

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % productViews.length);
  };

  const startAutoRotate = () => {
    setIsRotating(true);
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      nextView();
      if (counter >= productViews.length * 2) {
        clearInterval(interval);
        setIsRotating(false);
      }
    }, 800);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
          {productViews.map((src, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentView === index ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={src}
                alt={`CU Sunscreen view ${index + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          ))}

          <button
            onClick={startAutoRotate}
            disabled={isRotating}
            className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md hover:bg-white transition-colors duration-300"
            aria-label="View 360° rotation"
          >
            <FiRefreshCw
              className={`text-gray-700 text-xl ${
                isRotating ? 'animate-spin' : ''
              }`}
            />
          </button>
        </div>

        {/* View selector dots */}
        <div className="mt-4 flex justify-center gap-2">
          {productViews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentView(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentView === index ? 'bg-brand-secondary' : 'bg-gray-300'
              }`}
              aria-label={`View ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product360Viewer;
