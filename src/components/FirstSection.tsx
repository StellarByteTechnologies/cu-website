'use client';
import React, { useState } from 'react';

export type FirstSectionProps = {
  icon?: React.ReactNode;
  centerImage?: React.ReactNode;
  bottomRightImage?: React.ReactNode;
  pillContent?: string[];
};

export type SecondSectionProps = {
  sliderImages: React.ReactNode[];
};

export const FirstSection: React.FC<FirstSectionProps> = ({
  icon,
  centerImage,
  bottomRightImage,
  pillContent = [],
}) => {
  return (
    <div className="w-full md:w-[539px] h-full bg-[#F8F8F8] rounded-[12px] flex flex-col justify-between p-4 relative">
      {/* Top Left Icon */}
      <div className="w-[48px] h-[48px] absolute top-4 left-4">
        {icon || <div className="w-full h-full bg-gray-300 rounded-md"></div>}
      </div>

      {/* Center Image */}
      <div className="w-[150px] h-[150px] mx-auto my-auto">
        {centerImage || (
          <div className="w-full h-full bg-gray-200 rounded-md"></div>
        )}
      </div>

      {/* Bottom Section */}
      <div className="relative mt-4">
        {/* Bottom Right Image Positioned Above Pill Container with 5px gap and pushed right */}
        <div
          className="w-[120px] h-[115px] absolute -top-[120px] right-0"
          style={{ marginBottom: '5px' }}
        >
          {bottomRightImage || (
            <div className="w-full h-full bg-gray-400 rounded-md"></div>
          )}
        </div>

        {/* Pill Container */}
        <div className="w-full bg-white rounded-md p-4 flex flex-wrap gap-2 mt-[5px]">
          {pillContent.length > 0 ? (
            pillContent.map((text, idx) => (
              <div
                key={idx}
                className="px-4 py-2 border border-gray-300 rounded-full text-[16px] md:text-[20px] font-medium text-center"
              >
                {text}
              </div>
            ))
          ) : (
            <div className="text-gray-400">No Pills Available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export const SecondSection: React.FC<SecondSectionProps> = ({
  sliderImages,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = sliderImages.length;

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % totalSlides);
  const prevSlide = () =>
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);

  return (
    <div className="w-full md:w-[764px] h-full bg-[#F8F8F8] rounded-[12px] relative overflow-hidden">
      {/* Slider Images */}
      <div
        className="w-full h-full flex transition-transform duration-300"
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

      {/* Navigation Buttons */}
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          onClick={prevSlide}
          className="w-[48px] h-[48px] bg-gray-400 rounded-full flex items-center justify-center"
        >
          <span className="text-black text-xl">←</span>
        </button>
        <button
          onClick={nextSlide}
          className="w-[48px] h-[48px] bg-gray-400 rounded-full flex items-center justify-center"
        >
          <span className="text-black text-xl">→</span>
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-4 flex gap-2">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            className={`w-[12px] h-[12px] rounded-full ${
              currentSlide === index ? 'bg-black' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
