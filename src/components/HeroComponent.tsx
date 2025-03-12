import React from 'react';

interface HeroComponentProps {
  videoSrc: string;
  title: string;
  description: string;
}

const HeroComponent: React.FC<HeroComponentProps> = ({
  videoSrc,
  title,
  description,
}) => {
  return (
    <div className="w-full h-[870px] lg:h-[700px] md:h-[550px] sm:h-[450px] xs:h-[380px] relative overflow-hidden">
      {/* ✅ Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ✅ Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent"></div>

      {/* ✅ Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-8 md:px-10 lg:px-14 max-w-[1327px] mx-auto">
        {/* ✅ Title (Responsive Font Sizes) */}
        <h1 className="w-full max-w-[989px] text-[64px] lg:text-[56px] md:text-[48px] sm:text-[36px] xs:text-[28px] font-semibold leading-tight text-left text-white">
          {title}
        </h1>

        {/* ✅ Description (Responsive Font Sizes) */}
        <p className="w-full max-w-[596.5px] text-[24px] lg:text-[20px] md:text-[18px] sm:text-[14px] xs:text-[12px] font-normal leading-snug text-left text-white mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroComponent;
