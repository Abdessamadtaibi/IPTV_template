import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import PaymentMethodSelector, { PaymentMethod } from "./payment/PaymentMethodSelector";
import CreditCardForm from "./payment/CreditCardForm";
import WalletPaymentSection from "./payment/WalletPaymentSection";
import EmailDisplay from "./payment/EmailDisplay";

interface PaymentFormProps {
  email: string;
  isLoading: boolean;
  onPaymentSuccess: () => void;
}

const PaymentForm = ({ email, isLoading, onPaymentSuccess }: PaymentFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("credit-card");
  const [isFormValid, setIsFormValid] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
  };
  
  const handleValidationChange = (isValid: boolean) => {
    setIsFormValid(isValid);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (paymentMethod === "credit-card" && !isFormValid) {
      toast({
        title: "Invalid card details",
        description: "Please check your card information.",
        variant: "destructive",
      });
      return;
    }
    
    // Pass success to parent
    onPaymentSuccess();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Payment Methods */}
      <PaymentMethodSelector 
        selectedPaymentMethod={paymentMethod} 
        onPaymentMethodChange={handlePaymentMethodChange} 
      />
      
      {/* Email (Pre-filled from checkout) */}
      <EmailDisplay email={email} />
      
      {/* Credit Card Form */}
      {paymentMethod === "credit-card" && (
        <CreditCardForm onValidationChange={handleValidationChange} />
      )}
      
      {/* Wallet Payment */}
      <WalletPaymentSection paymentMethod={paymentMethod} />
      
      <Button 
        type="submit" 
        className="w-full bg-iptv-red hover:bg-iptv-red/90 text-white font-semibold py-6 shadow-lg shadow-iptv-red/20"
        disabled={isLoading}
      >
        {isLoading ? "Processing Payment..." : "Pay Now"}
      </Button>
      
      <p className="text-xs text-gray-500 text-center">
        By clicking "Pay Now", you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  );
};

export default PaymentForm;