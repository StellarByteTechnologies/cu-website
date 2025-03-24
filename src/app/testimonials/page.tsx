'use client';
import React from 'react';
import Heading from '@/components/Heading';
import DoctorTestimonialSection from '@/components/features/testimonials/DoctorTestimonialSection';
import { motion } from 'framer-motion';

const DermatTestimonial = () => {
  const testimonials = [
    {
      doctorImage: '/images/doctorOne.png',
      videoSrc: '/videos/video1.mp4',
      testimonialText:
        'This sunscreen is perfect for all skin types. It provides great protection and keeps my skin hydrated throughout the day.',
      svgPath: '/images/quote.svg',
      name: 'Dr. Rohan Mehra',
      occupation: 'Dermatologist, Skin Care Clinic',
    },
    {
      doctorImage: '/images/doctorOne.png',
      videoSrc: '/videos/video1.mp4',
      testimonialText:
        'This sunscreen is perfect for all skin types. It provides great protection and keeps my skin hydrated throughout the day.',
      svgPath: '/images/quote.svg',
      name: 'Dr. Anita Kapoor',
      occupation: 'Dermatologist, Skin Care Clinic',
    },
    {
      doctorImage: '/images/doctorOne.png',
      videoSrc: '/videos/video1.mp4',
      testimonialText:
        'This sunscreen is perfect for all skin types. It provides great protection and keeps my skin hydrated throughout the day.',
      svgPath: '/images/quote.svg',
      name: 'Dr. Rahul Sharma',
      occupation: 'Dermatologist, Skin Care Clinic',
    },
  ];

  return (
    <div className="max-w-[1327px] mx-auto px-4">
      {/* ✅ Header Section */}
      <motion.div
        className="mt-[150px] flex flex-col md:flex-row justify-between items-center md:items-start gap-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ✅ Text Section */}
        <div className="w-full md:w-[640px]">
          <h1 className="text-[40px] md:text-[64px] font-bold leading-[120%] text-left">
            Trusted by Experts:
            <br />
            Doctors Recommend Diara Products.
          </h1>
        </div>

        {/* ✅ Highlighted Section */}
        <div className="w-full md:w-[640px] h-auto md:h-[385px] border border-gray-300 rounded-[10px] p-6 flex items-center justify-center bg-[#F8F8F8]">
          <p className="text-[18px] md:text-[22px] text-gray-600 text-center">
            Backed by science, trusted by experts, and formulated for you.
          </p>
        </div>
      </motion.div>

      {/* ✅ Testimonials Section */}
      <div className="mt-[100px] w-full flex flex-col items-center">
        <Heading text="Our Esteemed Doctors" />

        {/* ✅ Doctor Testimonials - Aligned Center */}
        <motion.div
          className="flex flex-col gap-[40px] items-center my-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <DoctorTestimonialSection
            testimonials={testimonials}
            slideInterval={15000}
            layout="left"
          />
          <DoctorTestimonialSection
            testimonials={testimonials}
            slideInterval={15000}
            layout="right"
          />
          <DoctorTestimonialSection
            testimonials={testimonials}
            slideInterval={15000}
            layout="left"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DermatTestimonial;
