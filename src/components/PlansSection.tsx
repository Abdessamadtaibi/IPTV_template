import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase, Plan } from '@/lib/supabase';
import { formatDuration } from '@/lib/planHelpers';

const PlanCard = ({ plan, isPopular }: { plan: Plan; isPopular?: boolean }) => {
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate(`/checkout?plan=${plan.slug}`);
  };
  
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
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-iptv-red mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-iptv-gray">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button 
          onClick={handleCheckout}
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

const PlansSection = () => {
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

  // Mark the 12-month plan (365 days) as popular
  const popularPlanIndex = plans.findIndex(plan => plan.duration_days === 365);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Choose Your <span className="text-iptv-red">Plan</span>
        </h2>
        <p className="text-iptv-gray text-center max-w-2xl mx-auto mb-16">
          Select the perfect subscription that suits your entertainment needs. 
          All plans include full access to our premium content.
        </p>

        {isLoading ? (
          <div className="text-center text-iptv-gray">Loading plans...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} isPopular={index === popularPlanIndex} />
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="text-iptv-gray mb-6">
            All plans include a 24-hour money-back guarantee. No questions asked.
          </p>
          <Link to="/plans">
            <button className="btn-secondary">
              View All Plan Details
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;