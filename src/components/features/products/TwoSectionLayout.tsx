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
  reversed?: boolean;
};

const TwoSectionLayout: React.FC<TwoSectionLayoutProps> = ({
  firstSectionData,
  secondSectionData,
  reversed = false,
}) => {
  return (
    <div className="w-full">
      {/* Mobile view - Stack sections vertically */}
      <div className="block md:hidden w-full space-y-6">
        {!reversed ? (
          <>
            <FirstSection {...firstSectionData} />
            <SecondSection {...secondSectionData} />
          </>
        ) : (
          <>
            <SecondSection {...secondSectionData} />
            <FirstSection {...firstSectionData} />
          </>
        )}
      </div>

      {/* Desktop view - Side by side */}
      <div
        className={`hidden md:flex w-full gap-6 ${
          reversed ? 'flex-row-reverse' : ''
        }`}
      >
        <div className="w-1/2">
          <FirstSection {...firstSectionData} />
        </div>
        <div className="w-1/2">
          <SecondSection {...secondSectionData} />
        </div>
      </div>
    </div>
  );
};

export default TwoSectionLayout;
