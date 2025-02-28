import React from 'react';

const ShippingPolicy = () => {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1313px',
        margin: '200px auto',
        fontFamily: 'Poppins',
        padding: '0 20px',
      }}
    >
      <h1
        style={{
          fontWeight: 'bold',
          fontSize: '64px',
          lineHeight: '120%',
          textAlign: 'left',
          marginBottom: '20px',
        }}
      >
        Shipping Policy
      </h1>

      <div style={{ marginTop: '82px' }}>
        <h2
          style={{
            fontWeight: 'bold',
            fontSize: '32px',
            lineHeight: '120%',
            marginBottom: '20px',
          }}
        >
          Shipping
        </h2>
        <p
          style={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '150%',
            marginBottom: '20px',
          }}
        >
          At Diara Care Private Limited, we offer free shipping for all orders
          with an order value of Rs. 1000 and above. We partner with reliable
          courier companies and Speed Post to ensure safe and timely delivery.
          However, Diara Care is not liable for any delays caused by the courier
          company, Speed Post, or unforeseen factors beyond our control. While
          we strive to deliver your order within the estimated timeline
          mentioned in your order confirmation, delays may occasionally occur.
          In the rare event that delivery is not possible due to reasons beyond
          our control, such as inaccessible delivery locations, poor courier
          service in the area, or force majeure events, we will keep you
          informed. If your order is canceled under such circumstances, a full
          refund will be processed.
        </p>

        <h2
          style={{
            fontWeight: 'bold',
            fontSize: '32px',
            lineHeight: '120%',
            marginBottom: '20px',
          }}
        >
          Cancellations
        </h2>
        <p
          style={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '150%',
            marginBottom: '20px',
          }}
        >
          <strong>Pre-Dispatch Cancellations:</strong> Orders can be canceled
          before dispatch, subject to a 10% deduction as a transaction fee.
        </p>
        <p
          style={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '150%',
            marginBottom: '20px',
          }}
        >
          <strong>Post-Dispatch Cancellations:</strong> If you wish to cancel
          your order after it has been dispatched, kindly refuse the order upon
          delivery. Once our delivery partner updates the shipment status as
          “RTO (Return to Origin) initiated,” your order will be canceled, and a
          refund will be processed.
        </p>
        <p
          style={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '150%',
            marginBottom: '20px',
          }}
        >
          Refunds will be credited to the original payment method within 5 to 7
          business days.
        </p>

        <h2
          style={{
            fontWeight: 'bold',
            fontSize: '32px',
            lineHeight: '120%',
            marginBottom: '20px',
          }}
        >
          Returns Policy
        </h2>
        <p
          style={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '150%',
            marginBottom: '20px',
          }}
        >
          At Diara Care, we ensure that every shipment undergoes two levels of
          inspection and packaging before dispatch, minimizing the likelihood of
          damage. However, in the unlikely event of damage, here’s how we handle
          replacements:
        </p>
        <ul
          style={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '150%',
            marginBottom: '20px',
          }}
        >
          <li>
            <strong>Replacement Guarantee:</strong> Products are eligible for
            replacement only in cases of manufacturing defects or damage during
            transportation.
          </li>
          <li>
            <strong>Notification Period:</strong> You must notify us within 24
            hours of delivery if the product is damaged or defective.
          </li>
          <li>
            <strong>Proof Submission:</strong> To process your replacement
            request, we require clear photos and videos of:
            <ul>
              <li>The damaged product</li>
              <li>The package (including the shipping label on the box)</li>
              <li>The invoice slip inside the box</li>
            </ul>
          </li>
        </ul>
        <p
          style={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '150%',
            marginBottom: '20px',
          }}
        >
          If the returned product is out of stock, we will process a refund to
          your original payment method within 5 to 7 business days.
        </p>

        <h2
          style={{
            fontWeight: 'bold',
            fontSize: '32px',
            lineHeight: '120%',
            marginBottom: '20px',
          }}
        >
          Currency Transactions
        </h2>
        <p
          style={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '150%',
            marginBottom: '20px',
          }}
        >
          All transactions on our platform are processed in Indian Rupees (INR).
        </p>

        <h2
          style={{
            fontWeight: 'bold',
            fontSize: '32px',
            lineHeight: '120%',
            marginBottom: '20px',
          }}
        >
          Processing Orders
        </h2>
        <p
          style={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '150%',
            marginBottom: '20px',
          }}
        >
          Our business hours are 10:00 AM to 6:00 PM IST, Monday to Friday. For
          queries outside business hours, you can email us at{' '}
          <a href="mailto:support@diara.care">support@diara.care</a>, and we
          will respond promptly.
        </p>
        <p style={{ fontWeight: '500', fontSize: '16px', lineHeight: '150%' }}>
          We aim to make your shopping experience seamless and satisfactory. For
          more information on tracking your order, editing the address, or other
          queries, feel free to reach out to us.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
