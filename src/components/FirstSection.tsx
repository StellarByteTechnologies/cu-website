'use client';
import React, { useState } from 'react';

// ✅ Define Types for Props
export type FirstSectionProps = {
  icon?: React.ReactNode;
  centerImage?: React.ReactNode;
  bottomRightImage?: React.ReactNode;
  pillContent?: string[];
};

export type SecondSectionProps = {
  sliderImages: React.ReactNode[];
};

// ✅ First Section Component
export const FirstSection: React.FC<FirstSectionProps> = ({
  icon,
  centerImage,
  bottomRightImage,
  pillContent = [],
}) => {
  return (
    <div className="w-full h-full bg-[#F8F8F8] rounded-[12px] flex flex-col justify-between p-6 relative shadow-md">
      {/* ✅ Top Left Icon */}
      <div className="w-[48px] h-[48px] absolute top-4 left-4 flex items-center justify-center">
        {icon || <div className="w-full h-full bg-gray-300 rounded-md"></div>}
      </div>

      {/* ✅ Center Image */}
      <div className="w-[150px] h-[150px] mx-auto flex items-center justify-center">
        {centerImage || (
          <div className="w-full h-full bg-gray-200 rounded-md"></div>
        )}
      </div>

      {/* ✅ Bottom Section */}
      <div className="relative mt-6">
        {/* ✅ Bottom Right Image Positioned Above Pill Container */}
        <div className="w-[120px] h-[115px] absolute -top-[100px] right-4">
          {bottomRightImage || (
            <div className="w-full h-full bg-gray-400 rounded-md"></div>
          )}
        </div>

        {/* ✅ Pill Container */}
        <div className="w-full bg-white rounded-md p-4 flex flex-wrap gap-2 mt-[40px] shadow-sm">
          {pillContent.length > 0 ? (
            pillContent.map((text, idx) => (
              <div
                key={idx}
                className="px-4 py-2 border border-gray-300 rounded-full text-[14px] md:text-[18px] font-medium text-center"
              >
                {text}
              </div>
            ))
          ) : (
            <div className="text-gray-400 text-center w-full">
              No Pills Available
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ✅ Second Section Component (Fixing Export Issue)
export const SecondSection: React.FC<SecondSectionProps> = ({
  sliderImages,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = sliderImages.length;

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);

  return (
    <div className="w-full h-full bg-[#F8F8F8] rounded-[12px] relative overflow-hidden shadow-md flex flex-col">
      {/* ✅ Slider Container */}
      <div
        className="w-full h-full flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className="w-full h-[300px] md:h-full flex-shrink-0 flex items-center justify-center"
          >
            {image}
          </div>
        ))}
      </div>

      {/* ✅ Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 flex gap-2">
        <button
          onClick={prevSlide}
          className="w-[40px] h-[40px] bg-gray-500/70 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition"
        >
          ←
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex gap-2">
        <button
          onClick={nextSlide}
          className="w-[40px] h-[40px] bg-gray-500/70 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition"
        >
          →
        </button>
      </div>

      {/* ✅ Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            className={`w-[12px] h-[12px] rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-black scale-110' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
