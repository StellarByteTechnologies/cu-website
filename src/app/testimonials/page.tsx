import React from 'react';
import Heading from '@/components/Heading';
import DoctorTestimonialSection from '@/components/DoctorTestimonialSection';

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
      <div className="mt-[200px] flex flex-col items-center">
        <div className="flex gap-[10px]">
          {/* First Section */}
          <div className="w-[640px] h-[385px] p-4">
            <h1 className="text-[64px] font-bold leading-[120%] text-left">
              Trusted by Experts:
              <br />
              Doctors Recommend diara products.
            </h1>
          </div>

          {/* Second Section with Grey Border */}
          <div className="w-[640px] h-[385px] border border-gray-300 rounded-[10px]">
            {/* Content for Second Section */}
          </div>
        </div>

        {/* Additional Section */}
        <div className="mt-[100px] w-full flex flex-col items-center">
          <Heading text="Our Esteemed Doctors" />

          <div className="flex flex-col gap-[8px] items-cente my-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DermatTestimonial;
