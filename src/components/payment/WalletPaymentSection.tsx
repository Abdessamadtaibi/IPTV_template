import React from "react";
import { PaymentMethod } from "./PaymentMethodSelector";

interface WalletPaymentSectionProps {
  paymentMethod: PaymentMethod;
}

const WalletPaymentSection = ({ paymentMethod }: WalletPaymentSectionProps) => {
  if (paymentMethod === "credit-card") {
    return null;
  }
  
  return (
    <div className="bg-iptv-darkgray/80 p-6 rounded-lg text-center border border-gray-800 backdrop-blur-sm relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0" style={{
        background: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 10px,
          rgba(255,255,255,0.1) 10px,
          rgba(255,255,255,0.1) 20px
        )`,
        opacity: 0.3
      }} />
      
      <div className="relative z-10">
        <p className="mb-2 text-white">Click the button below to pay with {paymentMethod === "paypal" ? "PayPal" : "Wise Transfer"}.</p>
        <p className="text-sm text-iptv-gray">
          (In a real implementation, the {paymentMethod === "paypal" ? "PayPal" : "Wise"} payment interface would appear here)
        </p>
      </div>
    </div>
  );
};

export default WalletPaymentSection;