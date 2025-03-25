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
    <div
      className={`w-full bg-[#F8F8F8] rounded-xl p-6 pb-0 relative ${className}`}
    >
      {/* Top Left Icon */}
      <div className="absolute top-6 left-6">{icon}</div>

      {/* Product Image - Centered and larger */}
      <div className="w-full flex items-center justify-center pt-16 pb-8">
        <Image
          src="/images/product.png"
          alt="Product"
          width={250}
          height={350}
          className="object-contain"
        />
      </div>

      {/* Certification Stamp */}
      <div className="absolute bottom-[250px] right-6">{bottomRightImage}</div>

      <div className="w-full bg-white rounded-t-xl p-4 md:p-6">
        <div className="flex flex-col items-start gap-3">
          {pillContent.map((text, idx) => (
            <div
              key={idx}
              className="px-4 py-2 border border-gray-300 rounded-full text-base font-medium break-words whitespace-normal"
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
