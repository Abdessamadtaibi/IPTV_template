import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { supabase, Plan } from "@/lib/supabase";
import { formatDuration } from "@/lib/planHelpers";

const Plans = () => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      const { data, error } = await supabase
        .from('plans')
        .select('*')
        .order('price', { ascending: true });
      
      if (error) {
        console.error('Error fetching plans:', error);
      } else if (data) {
        setPlans(data);
      }
      setIsLoading(false);
    };
    
    fetchPlans();
  }, []);

  // Handle direct checkout navigation
  const handleCheckout = (plan: Plan) => {
    navigate(`/checkout?plan=${plan.slug}`);
  };

  // Mark the 12-month plan (365 days) as popular
  const popularPlanIndex = plans.findIndex(plan => plan.duration_days === 365);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <NavBar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex-1 py-24 md:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Plan</h1>
            <p className="text-xl text-iptv-gray mb-8">
              Select the perfect IPTV subscription plan tailored to your viewing needs and budget.
            </p>
          </div>
          
          {isLoading ? (
            <div className="text-center text-iptv-gray mb-16">Loading plans...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {plans.map((plan, index) => (
                <PlanCard 
                  key={plan.id} 
                  plan={plan} 
                  isPopular={index === popularPlanIndex}
                  onCheckout={() => handleCheckout(plan)}
                />
              ))}
            </div>
          )}
          
          <div className="bg-gradient-to-r from-gray-900 to-black p-8 rounded-xl max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-iptv-gray mb-6">
              Looking for a tailored IPTV package for hotels, businesses, or specific regional content?
              Contact our sales team for a customized offer.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="border-iptv-red text-iptv-red hover:bg-iptv-red hover:text-white">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

interface PlanCardComponentProps {
  plan: Plan;
  isPopular?: boolean;
  onCheckout: () => void;
}

// Using the same PlanCard component from PlansSection
const PlanCard = ({ plan, isPopular, onCheckout }: PlanCardComponentProps) => {
  return (
    <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
      isPopular 
        ? 'bg-gradient-to-br from-iptv-red/20 to-iptv-darkgray border border-iptv-red/50 transform hover:scale-105 card-glow' 
        : 'bg-iptv-darkgray bg-opacity-50 border border-gray-800 hover:border-gray-600 transform hover:scale-105'
    }`}>
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
      
      {isPopular && (
        <div className="absolute top-0 right-0 bg-iptv-red text-white py-1 px-4 text-sm font-medium z-10">
          Popular
        </div>
      )}
      
      <div className="p-6 relative z-10 flex flex-col h-full">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
          <div className="mb-6">
            <span className="text-3xl font-bold">${plan.price}</span>
            <span className="text-iptv-gray">/{formatDuration(plan.duration_days)}</span>
          </div>
          
          <ul className="space-y-3 mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <Check className="w-5 h-5 text-iptv-red mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-iptv-gray">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button 
          onClick={onCheckout}
          className={`w-full py-3 px-6 rounded-md font-semibold transition-all h-12 ${
            isPopular 
              ? 'bg-iptv-red hover:bg-iptv-red/80 text-white' 
              : 'bg-transparent ring-2 ring-iptv-red text-white hover:bg-iptv-red/10'
          }`}
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Plans;