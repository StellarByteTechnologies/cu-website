import React from 'react';
import Image from 'next/image';

interface IconTextItemProps {
  svgPath: string; // Path to the SVG
  text: string;
  textColor: string;
}

interface IconTextRowProps {
  items: IconTextItemProps[];
}

const IconTextRow: React.FC<IconTextRowProps> = ({ items }) => {
  return (
    <div className="w-full max-w-[839px] flex flex-col sm:flex-row sm:justify-start items-center sm:items-start gap-4 sm:gap-[56px] sm:ml-0 ml-auto mr-auto pt-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-center sm:justify-start w-full sm:w-[254px] h-[56px]"
        >
          {/* SVG Image */}
          <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[56px] md:h-[56px] flex items-center justify-center">
            <Image
              src={item.svgPath}
              alt={item.text}
              width={56}
              height={56}
              className="object-contain"
            />
          </div>

          {/* Text */}
          <span
            className="ml-3 text-[20px] sm:text-[28px] md:text-[36px] font-semibold leading-[110%] text-center sm:text-left"
            style={{ color: item.textColor }}
          >
            {item.text}
          </span>
        </div>
      ))}
    </div>
  );
};

export default IconTextRow;
