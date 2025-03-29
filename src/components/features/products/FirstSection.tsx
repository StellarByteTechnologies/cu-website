'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Define Types for Props
export type FirstSectionProps = {
  icon?: React.ReactNode;
  bottomRightImage?: React.ReactNode;
  pillContent?: string[];
  className?: string;
};

export type SecondSectionProps = {
  sliderImages: React.ReactNode[];
};

//first section
export const FirstSection: React.FC<FirstSectionProps> = ({
  icon,
  bottomRightImage,
  pillContent = [],
  className = '',
}) => {
  return (
    <div className={`w-full rounded-xl overflow-hidden ${className}`}>
      {/* Fixed size container with explicit height to avoid layout issues */}
      <div className="w-full h-[520px] bg-[#F5F5F7] relative">
        {/* Absolutely positioned sun icon */}
        <div className="absolute left-6 top-6 z-10">{icon}</div>

        {/* Absolutely positioned product image - centered and with higher z-index to appear on top */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div style={{ height: '450px' }}>
            <Image
              src="/images/sunscreen/front.png"
              alt="CU Sunscreen"
              width={320}
              height={450}
              className="h-[450px] w-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Absolutely positioned certification stamp */}
        <div className="absolute bottom-6 right-6 z-10">{bottomRightImage}</div>
      </div>

      {/* Pills section in white box */}
      <div className="w-full bg-white p-5">
        <div className="flex flex-wrap gap-3 justify-center">
          {pillContent.map((text, idx) => (
            <div
              key={idx}
              className="px-5 py-2.5 border border-gray-300 rounded-full text-lg font-medium text-gray-700"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
//second section
export const SecondSection: React.FC<SecondSectionProps> = ({
  sliderImages,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((currentSlide + 1) % sliderImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (currentSlide - 1 + sliderImages.length) % sliderImages.length
    );

  return (
    <div className="w-full h-full bg-[#F8F8F8] rounded-xl relative overflow-hidden">
      {/* Slider Container */}
      <div className="w-full h-full relative">
        {/* Current Image */}
        <div className="w-full h-full flex items-center justify-center p-4">
          {sliderImages[currentSlide]}
        </div>

        {/* Product Description */}
        <div className="absolute right-[20%] top-1/2 max-w-[250px]">
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-black mt-2 mr-2"></div>
            <p className="text-sm font-medium">
              Ultra-light, non-sticky formula that absorbs quickly
            </p>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-6 right-6 flex gap-4">
          <button
            onClick={prevSlide}
            className="p-2 text-black hover:text-gray-600"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="p-2 text-black hover:text-gray-600"
          >
            →
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          {sliderImages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentSlide === index ? 'bg-black' : 'bg-gray-300'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
