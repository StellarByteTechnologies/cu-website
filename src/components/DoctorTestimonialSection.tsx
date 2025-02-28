'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface DoctorTestimonial {
  doctorImage: string;
  videoSrc: string;
  testimonialText: string;
  svgPath: string;
  name: string;
  occupation: string;
}

interface DoctorTestimonialSectionProps {
  testimonials: DoctorTestimonial[];
  slideInterval?: number; // in milliseconds, default is 5000ms
  layout?: 'left' | 'right'; // Control the layout position
}

const DoctorTestimonialSection: React.FC<DoctorTestimonialSectionProps> = ({
  testimonials,
  slideInterval = 5000,
  layout = 'left',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, slideInterval);

    return () => clearInterval(interval);
  }, [testimonials.length, slideInterval]);

  const { doctorImage, videoSrc, testimonialText, svgPath, name, occupation } =
    testimonials[currentSlide];

  // Left Section (Doctor Image + Name & Occupation)
  const leftSection = (
    <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[539px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[632px] rounded-[12px] overflow-hidden relative">
      <Image
        src={doctorImage}
        alt="Doctor"
        layout="fill"
        objectFit="cover"
        className="rounded-[12px]"
      />

      {/* Name & Occupation Container */}
      <div className="absolute bottom-0 left-0 w-full h-[100px] sm:h-[120px] md:h-[140px] lg:h-[160px] bg-white rounded-t-[12px] p-[12px] md:p-[16px] flex flex-col">
        {/* Name */}
        <p className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-medium text-black leading-[1.5] truncate">
          {name}
        </p>

        {/* Separator Line */}
        <div className="w-full h-[1px] bg-black my-[4px] md:my-[6px]"></div>

        {/* Occupation */}
        <p className="text-[14px] sm:text-[16px] font-medium text-black truncate">
          {occupation}
        </p>
      </div>
    </div>
  );

  // Right Section (Video + Testimonial)
  const rightSection = (
    <div className="flex flex-col gap-[12px] md:gap-[16px] w-full sm:w-[400px] md:w-[500px] lg:w-[764px]">
      {/* Video Section */}
      <div className="w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[401px] rounded-[12px] overflow-hidden relative">
        <video
          className="w-full h-full object-cover rounded-[12px]"
          src={videoSrc}
          autoPlay
          muted
          loop
          controls
        />
      </div>

      {/* Testimonial Text Section */}
      <div className="w-full bg-[#F8F8F8] rounded-[12px] p-4 relative flex items-center justify-center h-[150px] sm:h-[180px] md:h-[200px] lg:h-[215px]">
        {/* SVG on Top Left */}
        <div className="absolute top-4 left-4 w-[40px] sm:w-[48px] md:w-[60px] lg:w-[68px] h-[28px] sm:h-[32px] md:h-[40px] lg:h-[47px]">
          <Image
            src={svgPath}
            alt="Quote Icon"
            width={68}
            height={47}
            className="object-contain"
          />
        </div>

        {/* Testimonial Text */}
        <p className="w-full md:w-[536px] text-[16px] sm:text-[18px] md:text-[20px] font-normal leading-[1.5] text-black text-center">
          {testimonialText}
        </p>
      </div>
    </div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row gap-[16px] md:gap-[24px] transition-all duration-500 ${
        layout === 'right' ? 'md:flex-row-reverse' : ''
      }`}
    >
      {leftSection}
      {rightSection}
    </div>
  );
};

export default DoctorTestimonialSection;
