import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";

interface PayPalPaymentButtonProps {
  amount: number;
  onRedirectToPayPal: () => void;
  isLoading: boolean;
  onPaymentSuccess?: (details: any) => void;
  onPaymentError?: (error: any) => void;
  clientId?: string;
}

// Extend window object to include paypal
declare global {
  interface Window {
    paypal?: any;
  }
}

const PayPalPaymentButton = ({
  amount,
  onRedirectToPayPal,
  isLoading,
  onPaymentSuccess,
  onPaymentError,
  clientId = "AbFw1BNLsHWm4fTK7eXXcPlp3-W2SeEe3u6LSd2s5clFPGfD59eyJO1TbeG8QO-pdELlW4kruquzF1uM"
}: PayPalPaymentButtonProps) => {
  const [sdkLoaded, setSdkLoaded] = useState(false);
  const [paypalError, setPaypalError] = useState<string | null>(null);
  const paypalRef = useRef<HTMLDivElement>(null);
  const [useDirectButton, setUseDirectButton] = useState(false);

  useEffect(() => {
    // Check if PayPal SDK is already loaded
    if (window.paypal) {
      setSdkLoaded(true);
      return;
    }

    // Load PayPal SDK
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`;
    script.async = true;
    
    script.onload = () => {
      setSdkLoaded(true);
    };
    
    script.onerror = () => {
      setPaypalError('Failed to load PayPal SDK');
      setUseDirectButton(true);
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [clientId]);

  useEffect(() => {
    if (sdkLoaded && window.paypal && paypalRef.current) {
      // Clear any existing PayPal buttons
      paypalRef.current.innerHTML = '';

      try {
        window.paypal.Buttons({
          createOrder: function(data: any, actions: any) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: amount.toFixed(2)
                  }
                }
              ]
            });
          },
          onApprove: function(data: any, actions: any) {
            return actions.order.capture().then(function(details: any) {
              console.log('PayPal payment completed:', details);
              
              if (details.status === "COMPLETED") {
                if (onPaymentSuccess) {
                  onPaymentSuccess(details);
                } else {
                  // Default behavior - redirect to success page
                  window.location.href = "/payment-success/";
                }
              }
            });
          },
          onError: function(err: any) {
            console.error('PayPal payment error:', err);
            if (onPaymentError) {
              onPaymentError(err);
            } else {
              alert('Payment failed. Please try again.');
            }
          },
          onCancel: function(data: any) {
            console.log('PayPal payment cancelled:', data);
            // Handle cancellation if needed
          },
          style: {
            layout: 'vertical',
            color: 'blue',
            shape: 'rect',
            label: 'paypal',
            height: 45
          }
        }).render(paypalRef.current);
      } catch (error) {
        console.error('Error rendering PayPal buttons:', error);
        setPaypalError('Failed to render PayPal buttons');
        setUseDirectButton(true);
      }
    }
  }, [sdkLoaded, amount, onPaymentSuccess, onPaymentError]);

  // Fallback to original button if PayPal SDK fails
  if (useDirectButton || paypalError) {
    return (
      <div className="space-y-6">
        <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-lg text-white">
          <h3 className="text-lg font-semibold mb-4">Pay with PayPal</h3>
          <p className="mb-2">
            You'll be redirected to PayPal to complete your payment of{" "}
            <span className="font-bold">${amount.toFixed(2)}</span>.
          </p>
          <p className="text-sm text-gray-400">
            After completing the payment, you'll be automatically redirected back to our site.
          </p>
          {paypalError && (
            <p className="text-sm text-red-400 mt-2">
              Note: Using fallback payment method. {paypalError}
            </p>
          )}
        </div>

        <Button
          type="button"
          onClick={onRedirectToPayPal}
          className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold py-6"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Proceed to PayPal"}
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gray-800/60 border border-gray-700 p-6 rounded-lg text-white">
        <h3 className="text-lg font-semibold mb-4">Pay with PayPal</h3>
        <p className="mb-2">
          Complete your payment of{" "}
          <span className="font-bold">${amount.toFixed(2)}</span> using PayPal.
        </p>
        <p className="text-sm text-gray-400">
          Secure payment processing powered by PayPal.
        </p>
      </div>

      {/* PayPal SDK Loading State */}
      {!sdkLoaded && (
        <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#0070ba]"></div>
            <span className="text-gray-600">Loading PayPal...</span>
          </div>
        </div>
      )}

      {/* PayPal Buttons Container */}
      <div 
        ref={paypalRef} 
        id="paypal-button"
        className={`${!sdkLoaded ? 'hidden' : ''}`}
      />

      {/* Fallback Button (hidden when PayPal loads successfully) */}
      {!sdkLoaded && (
        <Button
          type="button"
          onClick={onRedirectToPayPal}
          className="w-full bg-[#0070ba] hover:bg-[#005ea6] text-white font-semibold py-6"
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Proceed to PayPal"}
        </Button>
      )}
    </div>
  );
};

export default PayPalPaymentButton;