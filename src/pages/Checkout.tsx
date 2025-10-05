import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileCheckoutBar from "../components/MobileCheckoutBar";
import CheckoutForm from "../components/checkout/CheckoutForm";
import OrderSummary from "../components/checkout/OrderSummary";
import SecurityBadges from "../components/checkout/SecurityBadges";
import { useToast } from "@/hooks/use-toast";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { supabase, Plan } from "@/lib/supabase";
import { planToSummary } from "@/lib/planHelpers";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [invalidPlan, setInvalidPlan] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Fetch plans from Supabase
  useEffect(() => {
    const fetchPlans = async () => {
      const { data, error } = await supabase
        .from('plans')
        .select('*')
        .order('price', { ascending: true });
      
      if (error) {
        console.error('Error fetching plans:', error);
        toast({
          title: "Error",
          description: "Failed to load plans. Please try again.",
          variant: "destructive",
        });
        return;
      }
      
      if (data) {
        setPlans(data);
      }
    };
    
    fetchPlans();
  }, [toast]);

  // Handle plan selection from URL
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (plans.length === 0) return;
    
    const searchParams = new URLSearchParams(location.search);
    const planParam = searchParams.get('plan');
    
    if (planParam) {
      const planBySlug = plans.find(p => p.slug === planParam);
      
      if (planBySlug) {
        setSelectedPlan(planBySlug);
        setInvalidPlan(false);
      } else {
        setInvalidPlan(true);
        toast({
          title: "Plan Not Found",
          description: "The selected plan could not be found. Please choose a valid plan.",
          variant: "destructive",
        });
      }
    } else {
      // Select first plan as default
      if (plans.length > 0) {
        setSelectedPlan(plans[0]);
      }
    }
  }, [location, plans, toast]);

  const handleSubmit = async (values: any) => {
    if (!selectedPlan) return;
    
    setIsLoading(true);
    
    try {
      // Calculate end date based on duration_days
      const startDate = new Date();
      const endDate = new Date();
      endDate.setDate(endDate.getDate() + selectedPlan.duration_days);
      
      // Insert order into Supabase
      const { data, error } = await supabase
        .from('orders')
        .insert({
          first_name: values.firstName,
          last_name: values.lastName,
          email: values.email,
          phone: values.phone,
          country: values.country,
          plan_id: selectedPlan.id,
          plan_name: selectedPlan.name,
          amount: selectedPlan.price,
          status: 'pending',
          start_date: startDate.toISOString(),
          end_date: endDate.toISOString(),
        })
        .select()
        .single();
      
      if (error) {
        console.error('Error creating order:', error);
        toast({
          title: "Error",
          description: "Failed to create order. Please try again.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
      
      // Store order ID in session storage for payment page
      sessionStorage.setItem("orderId", data.id);
      sessionStorage.setItem("checkoutData", JSON.stringify({
        ...values,
        plan: selectedPlan,
        orderId: data.id
      }));
      
      setIsLoading(false);
      navigate("/payment");
    } catch (error) {
      console.error('Error submitting checkout:', error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  if (invalidPlan || !selectedPlan) {
    return (
      <div className="min-h-screen bg-black">
        <NavBar />
        
        <div className="container mx-auto px-4 pt-32 pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="border-gray-800 bg-iptv-darkgray/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl">Invalid Plan Selection</CardTitle>
                <CardDescription className="text-iptv-gray text-lg">
                  The plan you selected is not available.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-iptv-gray">
                  Please return to our plans page to select a valid subscription option.
                </p>
                <Link 
                  to="/plans"
                  className="inline-block mt-4 bg-iptv-red hover:bg-iptv-red/80 text-white px-8 py-3 rounded-md font-semibold"
                >
                  View Available Plans
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to="/plans" className="text-iptv-gray hover:text-white flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Plans
            </Link>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Your <span className="text-iptv-red">Order</span>
          </h1>
          
          <p className="mb-8 text-iptv-gray">
            You selected the <span className="text-white font-medium">{selectedPlan.name}</span> plan.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-iptv-darkgray/30 rounded-xl border border-gray-800 p-6 md:p-8 backdrop-blur-sm relative overflow-hidden">
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
                  <h2 className="text-xl font-bold mb-6">Customer Information</h2>
                  <CheckoutForm onSubmit={handleSubmit} isLoading={isLoading} />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <OrderSummary selectedPlan={planToSummary(selectedPlan)} />
              <SecurityBadges />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <MobileCheckoutBar />
    </div>
  );
};

export default Checkout;