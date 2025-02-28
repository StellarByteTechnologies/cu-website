import React from 'react';
import {
  FirstSection,
  SecondSection,
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
    <div className="w-full md:w-[1327px] h-auto md:h-[632px] flex flex-col md:flex-row justify-between bg-white gap-5 p-4">
      {/* First Section */}
      <FirstSection {...firstSectionData} />

      {/* Second Section */}
      <SecondSection {...secondSectionData} />
    </div>
  );
};

export default TwoSectionLayout;
