'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LazyVideo from '../../ui/LazyVideo';

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
    const slideIntervalID = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, slideInterval);

    return () => clearInterval(slideIntervalID);
  }, [testimonials.length, slideInterval]);

  const { doctorImage, videoSrc, testimonialText, svgPath, name, occupation } =
    testimonials[currentSlide];

  return (
    <motion.div
      className={`flex flex-col md:flex-row gap-[16px] md:gap-[24px] w-full max-w-full transition-all duration-500 ${
        layout === 'right' ? 'md:flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      {/* Doctor Image + Name & Occupation */}
      <motion.div
        className="w-full h-[440px] max-w-[326px] md:max-w-none md:w-[539px] md:h-[632px] md:min-w-[539px] md:flex-shrink-0 mx-auto md:mx-0 rounded-card overflow-hidden relative shadow-card"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Image
          src={doctorImage}
          alt={`Dr. ${name}, ${occupation}`}
          fill
          sizes="(max-width: 768px) 326px, 539px"
          className="rounded-card object-cover"
        />

        {/* Name & Occupation Container */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] md:h-[160px] bg-white rounded-t-card p-3 md:p-4 flex flex-col shadow-md">
          <p className="text-xl md:text-3xl font-medium text-black leading-tight truncate">
            {name}
          </p>

          {/* Separator Line */}
          <div className="w-full h-0.5 bg-black my-1 md:my-1.5"></div>

          {/* Occupation */}
          <p className="text-sm md:text-base font-medium text-gray-700 truncate">
            {occupation}
          </p>
        </div>
      </motion.div>

      {/* Video + Testimonial */}
      <motion.div
        className="flex flex-col gap-3 md:gap-4 w-full max-w-[326px] md:max-w-none md:w-[764px] lg:w-[764px] md:flex-shrink-0 mx-auto md:mx-0"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Video Section */}
        <div className="w-full h-[220px] md:h-[401px] rounded-card overflow-hidden relative shadow-card">
          <LazyVideo
            src={videoSrc}
            className="w-full h-full object-cover rounded-card"
            autoPlay={true}
            muted={true}
            loop={true}
            controls={true}
          />
        </div>

        {/* Testimonial Text Section */}
        <div className="w-full h-[192px] md:h-[215px] bg-brand-light rounded-card p-4 flex items-center justify-center shadow-card relative">
          {/* SVG Icon */}
          <div className="absolute top-4 left-4 w-10 sm:w-12 md:w-14 lg:w-16">
            <Image
              src={svgPath}
              alt="Quote Icon"
              width={80}
              height={60}
              className="object-contain"
            />
          </div>

          {/* Testimonial Text */}
          <p className="w-full md:w-[536px] text-base sm:text-lg md:text-xl font-normal leading-normal text-black text-center mt-8 md:mt-0">
            {testimonialText}
          </p>
        </div>

        {/* Progress Bar (Auto-Resetting) */}
        <div className="w-full h-1.5 bg-gray-300 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-black rounded-full"
            key={currentSlide}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: slideInterval / 1000, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DoctorTestimonialSection;
