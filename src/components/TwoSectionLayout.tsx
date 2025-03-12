import React from 'react';
import {
  FirstSection,
  SecondSection, // ✅ Now Correctly Imported
  FirstSectionProps,
  SecondSectionProps,
} from './FirstSection';

type TwoSectionLayoutProps = {
  firstSectionData: FirstSectionProps;
  secondSectionData: SecondSectionProps;
};

const TwoSectionLayout: React.FC<TwoSectionLayoutProps> = ({
  firstSectionData,
  secondSectionData,
}) => {
  return (
    <div className="w-full max-w-[1327px] mx-auto flex flex-col md:flex-row items-stretch justify-between bg-white gap-6 md:gap-10 p-6 md:p-12 rounded-lg shadow-md">
      {/* ✅ First Section (Left) */}
      <div className="w-full md:w-1/2 flex">
        <FirstSection {...firstSectionData} />
      </div>

      {/* ✅ Second Section (Right - Slider) */}
      <div className="w-full md:w-1/2 flex">
        <SecondSection {...secondSectionData} />
      </div>
    </div>
  );
};

export default TwoSectionLayout;
