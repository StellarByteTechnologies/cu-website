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
      className={`flex items-center ${
        position === 'right' ? 'flex-row-reverse' : ''
      } w-full`}
    >
      {/* Title Text */}
      <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold leading-[110%] text-left">
        {text}
      </h2>

      {/* Dynamic Spacing Between Text and Line */}
      <div
        className={`${
          position === 'right'
            ? 'ml-0 mr-[12px] sm:mr-[16px] md:mr-[60px]'
            : 'ml-[12px] sm:ml-[16px] md:ml-[60px]'
        } flex-grow h-[16px] sm:h-[25px] md:h-[39.99px] rounded-[20px]`}
        style={{ backgroundColor: lineColor }}
      ></div>
    </div>
  );
};

export default Title;
