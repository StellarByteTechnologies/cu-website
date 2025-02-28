import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-gray-900 text-white px-6 md:px-24 py-2">
      <div className="flex flex-col items-start mt-[120px] mb-[120px]">
        {/* Inner Container with Centered Logo */}
        <div className="w-full md:w-[1327px] h-auto flex flex-col items-center justify-start">
          {/* SVG from Public Folder */}
          <div className="w-[300px] md:w-[906px] h-auto md:h-[293px] mb-8">
            <img
              src="/images/logo-footer.svg"
              alt="CU Cosmetics Logo"
              width={906}
              height={293}
              className="w-full h-auto"
            />
          </div>

          {/* Two Sections Below Logo */}
          <div className="flex flex-col md:flex-row gap-[60px] md:gap-[120px] mt-[60px] w-full justify-center">
            {/* Left Section */}
            <div className="w-full md:w-[560px] h-auto p-4 flex flex-col justify-between">
              <div>
                <p className="w-full md:w-[420px] h-auto text-[#8F9FA3] text-[16px] leading-[140%] font-normal text-left">
                  Simple, effective, and transformative personal care for
                  everyone.
                </p>

                {/* Button with Dot */}
                <div className="flex items-center mt-[16px]">
                  <button className="text-white text-[12px] leading-[150%] font-semibold w-[88px] h-[18px]">
                    More about us
                  </button>
                  <div className="w-[10px] h-[10px] bg-white rounded-full ml-[12px]"></div>
                </div>
              </div>

              {/* Bottom Text */}
              <p className="w-full md:w-[267px] h-auto text-[#8F9FA3] text-[12px] leading-[140%] font-normal text-left mt-[16px]">
                © 2025 Diara Care Private Limited. All rights reserved. All
                trademarks are the property of their respective owners.
              </p>
            </div>

            {/* Right Section */}
            <div className="w-full md:w-[560px] h-auto p-4">
              {/* Links Container with Reduced Vertical Gap */}
              <div className="w-full md:w-[539px] flex flex-wrap gap-x-[20px] md:gap-x-[41px] gap-y-[8px]">
                <a
                  href="/about"
                  className="text-[#8F9FA3] text-[16px] leading-[140%] font-normal text-left hover:text-white hover:font-bold whitespace-nowrap"
                >
                  About
                </a>
                <a
                  href="/dermats"
                  className="text-[#8F9FA3] text-[16px] leading-[140%] font-normal text-left hover:text-white hover:font-bold whitespace-nowrap"
                >
                  Dermats
                </a>
                <a
                  href="/magic-code"
                  className="text-[#8F9FA3] text-[16px] leading-[140%] font-normal text-left hover:text-white hover:font-bold whitespace-nowrap"
                >
                  Magic Code
                </a>
                <a
                  href="/testimonials"
                  className="text-[#8F9FA3] text-[16px] leading-[140%] font-normal text-left hover:text-white hover:font-bold whitespace-nowrap"
                >
                  Testimonials
                </a>
                <a
                  href="/terms"
                  className="text-[#8F9FA3] text-[16px] leading-[140%] font-normal text-left hover:text-white hover:font-bold whitespace-nowrap"
                >
                  Terms and Condition
                </a>
                <a
                  href="/privacy-policy"
                  className="text-[#8F9FA3] text-[16px] leading-[140%] font-normal text-left hover:text-white hover:font-bold whitespace-nowrap"
                >
                  Privacy Policy
                </a>
                <a
                  href="/shipping-policy"
                  className="text-[#8F9FA3] text-[16px] leading-[140%] font-normal text-left hover:text-white hover:font-bold whitespace-nowrap"
                >
                  Shipping Policy
                </a>
                <a
                  href="/returns-refunds-cancellation-policy"
                  className="text-[#8F9FA3] text-[16px] leading-[140%] font-normal text-left hover:text-white hover:font-bold whitespace-nowrap"
                >
                  Refund and Return Policy
                </a>
              </div>

              {/* Contact Us Section */}
              <div className="w-[206px] h-[212px] mt-[24px]">
                <p className="text-white text-[20px] leading-[110%] font-medium text-left w-[170px] h-[22px] mb-4">
                  Contact Us
                </p>
                <p className="text-[#8F9FA3] text-[14px] leading-[160%] font-normal text-left">
                  Email:{' '}
                  <a
                    href="mailto:support@diaracare.in"
                    className="hover:text-white"
                  >
                    support@diaracare.in
                  </a>
                  <br />
                  Address: RZ-1/15, St No. 4, Tughlakabad Ext., Alaknanda
                  Market,
                  <br />
                  New Delhi - 110019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
