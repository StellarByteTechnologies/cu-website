'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  backgroundImage: string;
  videoUrl: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  backgroundImage,
  videoUrl,
  text,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-[80%] sm:w-[250px] md:w-[300px] lg:w-full h-[400px] md:h-[504px] rounded-lg overflow-hidden relative flex-shrink-0 snap-start">
      {!isPlaying ? (
        <>
          <Image
            src={backgroundImage}
            alt="Testimonial Background"
            layout="fill"
            objectFit="cover"
          />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-3xl md:text-4xl"
          >
            ▶
          </button>
        </>
      ) : (
        <video className="w-full h-full" controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Bottom Transparent Text Section */}
      <div className="absolute bottom-4 left-4 right-4 w-[90%] h-auto bg-black bg-opacity-50 text-white p-2 rounded-[8px] flex items-center justify-center">
        <p className="text-[16px] md:text-[20px] font-medium leading-[16.2px] text-center tracking-[-0.13px]">
          {text}
        </p>
      </div>
    </div>
  );
};

const TestimonialComponent: React.FC = () => {
  const testimonials = [
    {
      backgroundImage: '/images/testimonialOne.jpg',
      videoUrl: '/videos/video1.mp4',
      text: 'Customer 1 Feedback',
    },
    {
      backgroundImage: '/images/testimonialOne.jpg',
      videoUrl: '/videos/video1.mp4',
      text: 'Customer 2 Feedback',
    },
    {
      backgroundImage: '/images/testimonialOne.jpg',
      videoUrl: '/videos/video1.mp4',
      text: 'Customer 3 Feedback',
    },
    {
      backgroundImage: '/images/testimonialOne.jpg',
      videoUrl: '/videos/video1.mp4',
      text: 'Customer 4 Feedback',
    },
  ];

  return (
    <div className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto lg:overflow-visible px-4 snap-x snap-mandatory">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          backgroundImage={testimonial.backgroundImage}
          videoUrl={testimonial.videoUrl}
          text={testimonial.text}
        />
      ))}
    </div>
  );
};

export default TestimonialComponent;
