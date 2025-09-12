import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

interface PayPalDonationProps {
  amount: string;
  currency?: string;
  onSuccess?: (details: unknown) => void;
  onError?: (error: unknown) => void;
}

const PayPalDonation: React.FC<PayPalDonationProps> = ({
  amount,
  currency = 'USD',
  onSuccess,
  onError: onPayPalError
}) => {
  const paypalClientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  if (!paypalClientId) {
    return (
      <div className="rounded-md bg-yellow-50 p-4 text-yellow-700">
        <p className="text-sm">
          PayPal configuration missing. Please add VITE_PAYPAL_CLIENT_ID to your environment variables.
        </p>
      </div>
    );
  }

  const createOrder = (_data: unknown, actions: unknown) => {
    return (actions as { order: { create: (order: unknown) => Promise<string> } }).order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
            currency_code: currency,
          },
          description: 'Donation to David Owusu Ministries',
        },
      ],
    });
  };

  const onApprove = (_data: unknown, actions: unknown) => {
    return (actions as { order: { capture: () => Promise<unknown> } }).order.capture().then((details: unknown) => {
      console.log('Payment completed:', details);
      if (onSuccess) {
        onSuccess(details);
      }
    });
  };

  const onError = (error: unknown) => {
    console.error('PayPal error:', error);
    if (onPayPalError) {
      onPayPalError(error);
    }
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3 text-lg font-medium text-gray-900">Make a Donation</h4>
      <div className="rounded-lg border border-gray-200 p-4">
        <PayPalScriptProvider
          options={{
            clientId: paypalClientId,
            currency: currency,
            intent: 'capture',
          }}
        >
          <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
            onError={onError}
            style={{
              layout: 'vertical',
              color: 'blue',
              shape: 'rect',
              label: 'donate',
            }}
          />
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default PayPalDonation;
