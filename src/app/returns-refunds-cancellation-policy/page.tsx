import React from 'react';

const ReturnsRefundsCancellationPolicy = () => {
  return (
    <section className="mt-[120px] px-6 md:px-12 lg:px-20 max-w-[1320px] mx-auto font-poppins ">
      <h1 className="text-[40px] md:text-[56px] font-bold leading-[120%] text-left mb-12 text-black">
        Returns, Refunds, and Cancellation Policy
      </h1>

      {/* Cancellations */}
      <div className="mb-16">
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          Cancellations
        </h2>
        <p className="text-base font-semibold mb-4 text-gray-800">
          All cancellations will incur a <strong>10% deduction</strong> as
          transactional fees. To request a cancellation, please email us at{' '}
          <a
            href="mailto:support@diaracare.in"
            className="text-blue-600 underline"
          >
            support@diaracare.in
          </a>
          , and we will respond within 24 working hours.
        </p>
        <p className="text-base font-semibold mb-4 text-gray-800">
          For cancellations after dispatch, kindly inform us about the reason
          for cancellation and refuse the order when the delivery attempt is
          made. Once the delivery partner updates the shipment status as{' '}
          <strong>“RTO (Return to Origin) initiated,”</strong> we will initiate
          the refund process.
        </p>
        <p className="text-base font-semibold text-gray-800">
          Refunds will be credited to the original payment method within{' '}
          <strong>5 to 7 business days.</strong>
        </p>
      </div>

      {/* Replacements for Damages */}
      <div className="mb-16">
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          Replacements for Damages
        </h2>
        <p className="text-base font-semibold mb-4 text-gray-800">
          At <strong>Diara Care</strong>, we ensure the highest quality in
          packaging every order. However, in the rare event of damage during
          shipping, we are here to help:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-800 text-base font-semibold">
          <li>
            In cases of genuine damages or manufacturing defects, please contact
            us at{' '}
            <a
              href="mailto:support@diara.care"
              className="text-blue-600 underline"
            >
              support@diara.care
            </a>{' '}
            within <strong>48 hours</strong> of receiving the order. Attach
            photos and videos of:
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>The package and its contents</li>
              <li>The shipping label on the box</li>
              <li>The invoice slip inside the box</li>
            </ul>
          </li>
          <li>
            Based on the evidence provided, we will arrange a replacement or
            initiate a refund.
          </li>
        </ul>

        <h3 className="text-[16px] md:text-[18px] font-semibold mb-2">
          Conditions eligible for replacements include:
        </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base font-semibold">
          <li>Water damage to the packaging</li>
          <li>Tampered or opened seal of the product tubes/bottles</li>
        </ul>
      </div>

      {/* Replacements for Order Mismatch or Missing Items */}
      <div className="mb-16">
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          Replacements for Order Mismatch or Missing Items
        </h2>
        <p className="text-base font-semibold mb-4 text-gray-800">
          While we double-check all orders before dispatch, occasional errors
          can happen. If you receive the wrong items or your order is missing
          items, contact us at{' '}
          <a
            href="mailto:support@diaracare.in"
            className="text-blue-600 underline"
          >
            support@diaracare.in
          </a>{' '}
          within <strong>48 hours</strong> of receiving the order. Please
          provide:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-800 text-base font-semibold mb-4">
          <li>Photos and videos of the package and its contents</li>
          <li>The shipping label on the box</li>
          <li>The invoice slip inside the box</li>
        </ul>
        <p className="text-base font-semibold text-gray-800">
          We will promptly arrange a replacement or issue a refund.
        </p>
      </div>

      {/* Returns */}
      <div className="mb-16">
        <hr className="border-gray-300 mb-6" />
        <h2 className="text-[18px] md:text-[24px] font-semibold mb-4">
          Returns
        </h2>
        <p className="text-base font-semibold text-gray-800">
          Due to our strict sanitary and safety protocols, we do not accept
          return requests for items delivered without any damages or defects.
        </p>
      </div>

      {/* Footer */}
      <p className="text-base font-semibold text-gray-800 mb-20">
        Your satisfaction is our priority, and we are committed to ensuring a
        seamless experience for you at <strong>Diara Care</strong>.
      </p>
    </section>
  );
};

export default ReturnsRefundsCancellationPolicy;
