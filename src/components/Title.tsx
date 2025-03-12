import React from 'react';

interface TitleProps {
  text: string;
  lineColor: string;
  position?: 'left' | 'right';
}

const Title: React.FC<TitleProps> = ({
  text,
  lineColor,
  position = 'left',
}) => {
  return (
    <div
      className={`flex items-center w-full max-w-[1327px] mx-auto px-6 md:px-12 ${
        position === 'right'
          ? 'flex-row-reverse justify-start'
          : 'justify-start'
      }`}
    >
      {/* ✅ Title Text */}
      <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold leading-[110%] text-black">
        {text}
      </h2>

      {/* ✅ Increased Spacing & Aligned Line to Navbar Right */}
      <div
        className={`h-[16px] sm:h-[25px] md:h-[39.99px] rounded-[20px] flex-grow ${
          position === 'right'
            ? 'mr-[20px] sm:mr-[40px] md:mr-[100px]'
            : 'ml-[20px] sm:ml-[40px] md:ml-[100px]'
        }`}
        style={{ backgroundColor: lineColor, maxWidth: '900px' }} // ✅ Adjusted max width to align with Navbar
      ></div>
    </div>
  );
};

export default Title;
