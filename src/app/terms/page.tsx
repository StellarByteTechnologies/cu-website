'use client';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <section className="pt-[120px] px-6 md:px-12 lg:px-20 max-w-[1320px] mx-auto font-poppins ">
      <h1 className="text-[40px] md:text-[56px] font-bold leading-[120%] text-left mb-12 text-black">
        Terms and Conditions
      </h1>

      {/* Company Info */}
      <div className="mb-10">
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-2">
          Diara Care Private Limited
        </h2>
        <p className="text-base font-semibold text-gray-800 leading-[150%]">
          <strong>CIN:</strong> U20237DL2024PTC438725 <br />
          <strong>GSTIN:</strong> 07AALCD2247G1ZP
        </p>
      </div>

      {/* Terms List */}
      <div className="space-y-10 text-gray-800 text-base font-semibold leading-[150%]">
        {[
          {
            title: 'Important Legal Information',
            content:
              'By accessing and using this website (hereinafter referred to as "Site"), you agree to comply with the terms and conditions outlined below. If you do not agree with these terms, please refrain from using this Site.',
          },
          {
            title: 'General Disclaimer',
            content:
              'The content provided on this Site is for informational purposes only and is not a substitute for professional medical advice. Diara Care Private Limited does not provide medical advice, nor does it endorse or validate any treatments, medications, or non-Diara Care products discussed on this Site. Always consult a qualified healthcare provider to determine whether the information here applies to your specific needs or conditions.',
          },
          {
            title: 'Content Standards',
            content:
              'Diara Care is committed to maintaining a respectful and safe online environment. You agree not to post or share content that is:',
            list: [
              'Threatening, abusive, offensive, or inflammatory.',
              'Fraudulent, deceptive, or violates any law or regulation.',
              'Infringing on any intellectual property rights or referencing unauthorized third-party pages.',
            ],
            note: 'Diara Care reserves the right to remove any content that violates these guidelines.',
          },
          {
            title: 'Accuracy of Information',
            content:
              'While we strive to ensure the accuracy of all content, Diara Care Private Limited, its employees, and affiliates do not guarantee the validity or reliability of the information, opinions, or advice shared on this Site.',
          },
          {
            title: 'Feedback & Customer Support',
            content: (
              <>
                If you have concerns regarding a Diara Care product, or if a
                product does not meet your expectations, please reach out to our
                Customer Support team at{' '}
                <a
                  href="mailto:support@diara.care"
                  className="text-blue-600 underline"
                >
                  support@diara.care
                </a>
                . We value your feedback and will work to resolve any issues
                promptly.
              </>
            ),
          },
          {
            title: 'Intellectual Property Rights',
            content:
              'All materials, trademarks, and content on this Site are the property of Diara Care Private Limited or its licensors. You may print or download one copy of the information for personal, non-commercial use. Reproduction, transmission, distribution, or public display of the content without prior written consent is strictly prohibited.',
          },
          {
            title: 'Website Use & Warranty Disclaimer',
            content:
              'This Site is provided "as is" without any warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement. The Site may contain technical inaccuracies or typographical errors, and content is subject to change without notice.',
          },
          {
            title: 'International Use',
            content:
              'This website is intended for users in India. Responses or support for users outside of India may be limited or unavailable.',
          },
          {
            title: 'Modifications to Terms',
            content:
              'Diara Care Private Limited reserves the right to update or modify these terms at any time. Continued use of the Site constitutes acceptance of any changes.',
          },
        ].map((section, index) => (
          <div key={index}>
            {/* Number + Title */}
            <div className="flex items-start gap-2 mb-3">
              <span className="text-black font-bold">{index + 1}.</span>
              <h3 className="text-[16px] md:text-[18px] font-bold text-black leading-[150%]">
                {section.title}
              </h3>
            </div>

            {/* Content */}
            <div className="ml-6 md:ml-10">
              <p className="mb-3">{section.content}</p>

              {/* Optional List */}
              {section.list && (
                <ul className="list-disc list-inside space-y-1 mb-3">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}

              {/* Optional Note */}
              {section.note && <p className="mt-2">{section.note}</p>}
            </div>
          </div>
        ))}

        {/* Footer */}
        <p className="text-gray-800 mt-[80px] mb-[150px]">
          © 2025 Diara Care Private Limited. All rights reserved. All trademarks
          are the property of their respective owners.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
