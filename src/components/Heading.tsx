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

      {/* Vertical Line joining Top and Bottom */}
      <div
        className="absolute top-0 bottom-0"
        style={{
          left: 'calc(70% + 20px)',
          width: '4px',
          backgroundColor: 'black',
        }}
      ></div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 w-full h-[4px] bg-black"></div>
    </div>
  );
};

export default Heading;
