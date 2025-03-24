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
    <div className="mb-4">
      <div
        className={`flex items-center w-full max-w-[1327px] mx-auto ${
          position === 'right' ? 'flex-row-reverse' : 'flex-row'
        }`}
      >
        <h2 className="text-xl md:text-4xl font-semibold leading-none">
          {text}
        </h2>
        <div
          className={`h-4 md:h-6 rounded-full flex-grow ${
            position === 'right' ? 'mr-4 md:mr-24' : 'ml-4 md:ml-24'
          }`}
          style={{ backgroundColor: lineColor }}
        ></div>
      </div>
    </div>
  );
};

export default Title;
