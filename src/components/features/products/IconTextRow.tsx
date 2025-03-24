import React from 'react';
import Image from 'next/image';

interface IconTextItemProps {
  svgPath: string;
  text: string;
  textColor: string;
}

interface IconTextRowProps {
  items: IconTextItemProps[];
}

const IconTextRow: React.FC<IconTextRowProps> = ({ items }) => {
  return (
    <>
      {/* Mobile version */}
      <div className="md:hidden w-full max-w-[1327px] mx-auto">
        <div className="w-[155px] h-[120px] mx-auto flex flex-col items-start justify-center space-y-3">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2"
                style={{ borderColor: item.textColor }}
              >
                <Image
                  src={item.svgPath}
                  alt={item.text}
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
              <span
                className="ml-3 text-xl font-semibold leading-[110%]"
                style={{ color: item.textColor }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop version */}
      <div className="hidden md:flex w-full max-w-[1327px] mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex items-center mr-16 last:mr-0">
            <div
              className="w-14 h-14 flex items-center justify-center rounded-full bg-white border-2"
              style={{ borderColor: item.textColor }}
            >
              <Image
                src={item.svgPath}
                alt={item.text}
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span
              className="ml-4 text-3xl font-semibold"
              style={{ color: item.textColor }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default IconTextRow;
