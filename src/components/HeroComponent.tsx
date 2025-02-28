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
    <div className="w-full h-[870px] md:h-[600px] sm:h-[500px] relative overflow-hidden">
      {/* Background Video */}
      <video
        className="w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-10 max-w-[1327px] mx-auto">
        {/* Title */}
        <h1 className="w-full max-w-[989px] text-[88px] md:text-[64px] sm:text-[10px] xs:text-[7px] font-semibold leading-tight text-left text-white">
          {title}
        </h1>

        {/* Description */}
        <p className="w-full max-w-[596.5px] text-[24px] md:text-[20px] sm:text-[6px] xs:text-[5px] font-normal leading-snug text-left text-white mt-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroComponent;
