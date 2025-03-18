'use client';
import React from 'react';

const ShippingPolicy = () => {
  return (
    <section className="pt-[120px] px-6 md:px-12 lg:px-20 max-w-[1320px] mx-auto font-poppins ">
      <h1 className="text-[40px] md:text-[56px] font-bold leading-[120%] text-left mb-12 text-black">
        Shipping Policy
      </h1>

      <div className="space-y-12 text-base font-semibold text-gray-800 leading-[150%] ml-[6px] md:ml-[36px]">
        {/* Shipping Section */}
        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold border-t border-gray-300 pt-6 mb-4">
            Shipping
          </h2>
          <p>
            At <strong>Diara Care Private Limited</strong>, we offer{' '}
            <strong>free shipping</strong> for all orders with an order value of{' '}
            <strong>Rs. 1000 and above</strong>. We partner with reliable
            courier companies and Speed Post to ensure safe and timely delivery.
            However, <strong>Diara Care</strong> is not liable for any delays
            caused by the courier company, Speed Post, or unforeseen factors
            beyond our control. While we strive to deliver your order within the
            estimated timeline mentioned in your order confirmation, delays may
            occasionally occur. In the rare event that delivery is not possible
            due to reasons beyond our control, such as inaccessible delivery
            locations, poor courier service in the area, or force majeure
            events, we will keep you informed. If your order is canceled under
            such circumstances, a full refund will be processed.
          </p>
        </div>

        {/* Cancellations Section */}
        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold border-t border-gray-300 pt-6 mb-4">
            Cancellations
          </h2>
          <ul className="list-disc ml-6 space-y-3">
            <li>
              <strong>Pre-Dispatch Cancellations:</strong> Orders can be
              canceled before dispatch, subject to a{' '}
              <strong>10% deduction</strong> as a transaction fee.
            </li>
            <li>
              <strong>Post-Dispatch Cancellations:</strong> If you wish to
              cancel your order after it has been dispatched, kindly refuse the
              order upon delivery. Once our delivery partner updates the
              shipment status as{' '}
              <strong>“RTO (Return to Origin) initiated,”</strong> your order
              will be canceled, and a refund will be processed.
            </li>
          </ul>
          <p className="mt-4">
            Refunds will be credited to the original payment method within{' '}
            <strong>5 to 7 business days</strong>.
          </p>
        </div>

        {/* Returns Policy Section */}
        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold border-t border-gray-300 pt-6 mb-4">
            Returns Policy
          </h2>
          <p>
            At <strong>Diara Care</strong>, we ensure that every shipment
            undergoes <strong>two levels of inspection and packaging</strong>{' '}
            before dispatch, minimizing the likelihood of damage. However, in
            the unlikely event of damage, here’s how we handle replacements:
          </p>
          <ul className="list-disc ml-6 space-y-3 mt-4">
            <li>
              <strong>Replacement Guarantee:</strong> Products are eligible for
              replacement only in cases of manufacturing defects or damage
              during transportation.
            </li>
            <li>
              <strong>Notification Period:</strong> You must notify us within{' '}
              <strong>24 hours</strong> of delivery if the product is damaged or
              defective.
            </li>
            <li>
              <strong>Proof Submission:</strong> To process your replacement
              request, we require clear photos and videos of:
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>The damaged product</li>
                <li>The package (including the shipping label on the box)</li>
                <li>The invoice slip inside the box</li>
              </ul>
            </li>
          </ul>
          <p className="mt-4">
            If the returned product is out of stock, we will process a refund to
            your original payment method within{' '}
            <strong>5 to 7 business days</strong>.
          </p>
        </div>

        {/* Currency Transactions */}
        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold border-t border-gray-300 pt-6 mb-4">
            Currency Transactions
          </h2>
          <p>
            All transactions on our platform are processed in{' '}
            <strong>Indian Rupees (INR).</strong>
          </p>
        </div>

        {/* Processing Orders */}
        <div>
          <h2 className="text-[18px] md:text-[20px] font-bold border-t border-gray-300 pt-6 mb-4">
            Processing Orders
          </h2>
          <p>
            Our business hours are <strong>10:00 AM to 6:00 PM IST</strong>,
            Monday to Friday. For queries outside business hours, you can email
            us at{' '}
            <a
              href="mailto:support@diara.care"
              className="text-blue-600 underline"
            >
              support@diara.care
            </a>{' '}
            and we will respond promptly.
          </p>
          <p className="mt-4">
            We aim to make your shopping experience seamless and satisfactory.
            For more information on tracking your order, editing the address, or
            other queries, feel free to reach out to us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShippingPolicy;
