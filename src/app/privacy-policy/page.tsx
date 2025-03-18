'use client';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="mt-[120px] px-6 md:px-12 lg:px-20 max-w-[1320px] mx-auto font-poppins ">
      <h1 className="text-[40px] md:text-[56px] font-bold leading-[120%] text-left mb-12 text-black">
        Privacy Policy
      </h1>

      <div>
        <p className="text-base font-semibold text-gray-800 mb-6">
          Effective Date: <strong>01-January-2025</strong>
        </p>

        <p className="text-base font-semibold text-gray-800 mb-6">
          <strong>Diara Care Private Limited</strong> (&apos we,&apos
          &aposus,&apos or &apos our&apos) respects your privacy and is
          committed to protecting the personal information you share with us.
          This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you visit our website, make purchases,
          or interact with us. By using our services, you consent to the
          practices outlined in this Privacy Policy.
        </p>

        {/* 1. Information We Collect */}
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          1. Information We Collect
        </h2>
        <p className="text-base font-semibold text-gray-800 mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 text-base font-semibold text-gray-800 mb-6">
          <li>
            Name, email address, phone number, billing and shipping address
          </li>
          <li>
            Payment details (processed securely through third-party payment
            gateways)
          </li>
          <li>Order details and purchase history</li>
          <li>IP address, browser type, operating system</li>
          <li>
            Website usage data, including pages visited, time spent, and clicks
          </li>
        </ul>
        <p className="text-base font-semibold text-gray-800 mb-6">
          <strong>Cookies and Tracking Technologies:</strong> We use cookies and
          similar technologies to enhance your browsing experience, analyze
          website performance, and personalize content.
        </p>

        {/* 2. How We Use Your Information */}
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-base font-semibold text-gray-800 mb-6">
          <li>
            To process and fulfill your orders, including shipping and returns
          </li>
          <li>To provide customer support and respond to inquiries</li>
          <li>To improve our website, products, and services</li>
          <li>
            To send promotional emails, newsletters, or offers (with your
            consent)
          </li>
          <li>To comply with legal and regulatory obligations</li>
        </ul>

        {/* 3. Sharing of Information */}
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          3. Sharing of Information
        </h2>
        <p className="text-base font-semibold text-gray-800 mb-4">
          We do not sell or rent your personal information to third parties.
          However, we may share your information in the following circumstances:
        </p>
        <ul className="list-disc pl-6 text-base font-semibold text-gray-800 mb-6">
          <li>
            <strong>Service Providers:</strong> With third-party vendors (e.g.,
            payment processors, delivery partners) to fulfill your orders.
          </li>
          <li>
            <strong>Legal Obligations:</strong> To comply with applicable laws,
            regulations, or legal processes.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger,
            acquisition, or sale of our assets, your information may be
            transferred.
          </li>
        </ul>

        {/* 4. Data Security */}
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          4. Data Security
        </h2>
        <p className="text-base font-semibold text-gray-800 mb-6">
          We implement industry-standard measures to protect your personal
          information from unauthorized access, alteration, disclosure, or
          destruction. While we strive to safeguard your information, no method
          of transmission over the Internet or electronic storage is entirely
          secure.
        </p>

        {/* 5. Your Rights */}
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          5. Your Rights
        </h2>
        <ul className="list-disc pl-6 text-base font-semibold text-gray-800 mb-4">
          <li>Access, update, or delete your personal information</li>
          <li>Opt-out of receiving marketing communications</li>
          <li>Withdraw consent where applicable</li>
          <li>Request a copy of the data we hold about you</li>
        </ul>
        <p className="text-base font-semibold text-gray-800 mb-6">
          To exercise these rights, contact us at{' '}
          <a
            href="mailto:support@diaracare.in"
            className="text-blue-600 underline"
          >
            support@diaracare.in
          </a>
        </p>

        {/* 6. Retention of Information */}
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          6. Retention of Information
        </h2>
        <p className="text-base font-semibold text-gray-800 mb-6">
          We retain your personal information for as long as necessary to
          fulfill the purposes outlined in this Privacy Policy unless a longer
          retention period is required or permitted by law.
        </p>

        {/* 7. Third-Party Links */}
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          7. Third-Party Links
        </h2>
        <p className="text-base font-semibold text-gray-800 mb-6">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices or content of these sites.
        </p>

        {/* 8. Updates to Privacy Policy */}
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          8. Updates to this Privacy Policy
        </h2>
        <p className="text-base font-semibold text-gray-800 mb-6">
          We may update this Privacy Policy from time to time. Changes will be
          effective when posted on this page, and the `&apos` Effective Date
          `&apos` will be updated accordingly.
        </p>

        {/* 9. Contact Us */}
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          9. Contact Us
        </h2>
        <p className="text-base font-semibold text-gray-800 mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us:
        </p>
        <ul className="list-disc pl-6 text-base font-semibold text-gray-800 mb-4">
          <li>
            Email:{' '}
            <a
              href="mailto:support@diaracare.in"
              className="text-blue-600 underline"
            >
              support@diaracare.in
            </a>
          </li>
          <li>Phone: +91-9220329955</li>
          <li>
            Address: RZ-1/15, St No. 4, Tughlakabad Ext., Alaknanda Market, New
            Delhi - 110019
          </li>
        </ul>

        <p className="text-base font-semibold text-gray-800 mt-10 mb-20">
          Thank you for trusting <strong>Diara Care Private Limited</strong>{' '}
          with your personal information. Your privacy is our priority.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
