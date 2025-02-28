'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface ProductComparisonSliderProps {
  beforeImage: string;
  afterImage: string;
  productIcon: string;
  productImage: string;
  productTitle: string;
}

const ProductComparisonSlider: React.FC<ProductComparisonSliderProps> = ({
  beforeImage,
  afterImage,
  productIcon,
  productImage,
  productTitle,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.max(0, Math.min(100, newPosition)));
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Before and After Slider Section */}
      <div
        className="w-full md:w-[764px] h-[400px] md:h-[632px] rounded-[12px] overflow-hidden relative cursor-pointer"
        ref={sliderRef}
        onMouseMove={handleMouseMove}
      >
        {/* After Image */}
        <Image
          src={afterImage}
          alt="After Image"
          layout="fill"
          objectFit="cover"
        />

        {/* Before Image with slider control */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <Image
            src={beforeImage}
            alt="Before Image"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Vertical Slider Line */}
        <div
          className="absolute top-0 h-full w-[2px] bg-white"
          style={{ left: `${sliderPosition}%` }}
        ></div>

        {/* Before and After Labels */}
        <div className="absolute top-4 left-4 text-white text-[16px] md:text-[20px] font-semibold">
          Before
        </div>
        <div className="absolute top-4 right-4 text-white text-[16px] md:text-[20px] font-semibold">
          After
        </div>
      </div>

      {/* Product Info Section */}
      <div className="w-full md:w-[539px] h-[400px] md:h-[632px] rounded-[12px] bg-[#F8F8F8] p-4 relative flex flex-col justify-between">
        {/* Product Icon */}
        <div className="w-[48px] h-[48px]">
          <Image
            src={productIcon}
            alt="Product Icon"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* Product Image (Centered) */}
        <div className="flex justify-center items-center flex-grow">
          <Image
            src={productImage}
            alt="Product"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        {/* Product Title Section */}
        <div className="w-full h-[100px] md:h-[130px] bg-white rounded-[12px] p-4 flex items-center justify-center">
          <h2 className="text-[24px] md:text-[36px] font-medium text-center">
            {productTitle}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductComparisonSlider;
