import React from 'react';

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="w-full flex items-center relative py-4">
      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-black"></div>

      {/* Heading Text */}
      <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] font-semibold leading-[110%] text-black">
        {text}
      </h1>

      {/* Dynamic Gap to Prevent Overlap (Reduced by Half) */}
      <div className="ml-[6px] sm:ml-[8px] md:ml-[10px] lg:ml-[12px]"></div>

      {/* Vertical Line joining Top and Bottom - Ensuring Visibility */}
      <div
        className="absolute top-0 bottom-0 w-[4px] bg-black"
        style={{ left: 'calc(92% + 2px)' }}
      ></div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-black"></div>
    </div>
  );
};

export default Heading;
