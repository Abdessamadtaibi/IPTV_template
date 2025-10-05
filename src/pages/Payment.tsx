
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileCheckoutBar from "../components/MobileCheckoutBar";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import PayPalPaymentButton from "../components/payment/PayPalPaymentButton";
import EmailDisplay from "../components/payment/EmailDisplay";
import TermsAndConditionsCheckbox from "../components/payment/TermsAndConditionsCheckbox";
import OrderSummary from "../components/payment/OrderSummary";
import { supabase } from "@/lib/supabase";

const Payment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [checkoutData, setCheckoutData] = useState<any>(null);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showTermsWarning, setShowTermsWarning] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Retrieve checkout data from session storage
    const storedData = sessionStorage.getItem("checkoutData");
    const storedOrderId = sessionStorage.getItem("orderId");
    
    if (storedData && storedOrderId) {
      setCheckoutData(JSON.parse(storedData));
      setOrderId(storedOrderId);
    } else {
      // If no data, redirect back to checkout
      toast({
        title: "Missing checkout information",
        description: "Please complete the checkout form first.",
        variant: "destructive",
      });
      navigate("/checkout");
    }
  }, [navigate, toast]);

  const handlePaymentSuccess = async () => {
    if (!termsAccepted) {
      setShowTermsWarning(true);
      return;
    }
    
    setIsLoading(true);

    const { error } = await supabase
      .from('orders')
      .update({ status: 'confirmed' })
      .eq('id', orderId);

    if (error) {
        console.error('Error updating order:', error);
        toast({
            title: "Payment failed",
            description: "There was an error processing your payment. Please try again.",
            variant: "destructive",
        });
        setIsLoading(false);
    } else {
        // Clear checkout data
        sessionStorage.removeItem("checkoutData");
        sessionStorage.removeItem("orderId");
        
        // Redirect to success page
        navigate("/payment-success");
    }
  };

  if (!checkoutData) {
    return <div className="min-h-screen bg-black flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/checkout" className="text-iptv-gray hover:text-white flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Checkout
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Secure <span className="text-iptv-red">Payment</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-iptv-darkgray/40 rounded-xl border border-gray-800 p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
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
                  <h2 className="text-xl font-bold mb-6">Payment Details</h2>
                  
                  <div className="space-y-6">
                    {/* Email from checkout */}
                    <EmailDisplay email={checkoutData.email}/>
                    
                    {/* PayPal Form */}
                    <PayPalPaymentButton 
                        amount={checkoutData.plan.price} 
                        onRedirectToPayPal={handlePaymentSuccess}
                        isLoading={isLoading}
                        onPaymentSuccess={handlePaymentSuccess}
                    />
                    
                    {/* Terms and Conditions */}
                    <TermsAndConditionsCheckbox 
                        accepted={termsAccepted}
                        onChange={setTermsAccepted}
                    />
                    
                    <p className="text-xs text-iptv-gray text-center mt-4">
                      By proceeding, you agree to our Terms of Service and Privacy Policy.
                      Your payment information is securely processed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary selectedPlan={checkoutData.plan} />
              
              {/* Trust Badges */}
              <div className="mt-6 bg-iptv-darkgray/40 rounded-xl border border-gray-800 p-6 backdrop-blur-sm relative overflow-hidden">
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
                  <h3 className="font-medium mb-4">Secure Payment</h3>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    <img src="/images/payment/paypal.svg" alt="PayPal" className="h-8" />
                  </div>
                  
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex items-center text-iptv-gray">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>SSL Encrypted</span>
                    </div>
                    
                    <div className="flex items-center text-iptv-gray">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                      </svg>
                      <span>24-Hour Money-Back</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <MobileCheckoutBar />
      
      {/* Terms Warning Dialog */}
      <Dialog open={showTermsWarning} onOpenChange={setShowTermsWarning}>
        <DialogContent>
          <DialogTitle className="text-lg font-bold">Terms & Conditions Required</DialogTitle>
          <p className="mt-2">
            Please accept our Terms of Service and Privacy Policy before proceeding with the payment.
          </p>
          <div className="mt-4 flex justify-end">
            <Button 
              onClick={() => setShowTermsWarning(false)}
              className="bg-iptv-red hover:bg-iptv-red/90"
            >
              Okay
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Payment;
