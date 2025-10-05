import { Link } from "react-router-dom";

interface PlanSummaryProps {
  name: string;
  price: number;
  duration: string;
  features?: string[];
  popular?: boolean;
  slug?: string;
}

interface OrderSummaryProps {
  selectedPlan: PlanSummaryProps;
}

const OrderSummary = ({ selectedPlan }: OrderSummaryProps) => {
  // Calculate start and end dates
  const startDate = new Date();
  const endDate = new Date();
  
  // Parse duration to get number of months
  let months = 1;
  if (selectedPlan.duration.includes("month")) {
    const match = selectedPlan.duration.match(/(\d+)/);
    if (match) {
      months = parseInt(match[1]);
    }
  } else if (selectedPlan.duration === "year") {
    months = 12;
  }
  
  endDate.setMonth(endDate.getMonth() + months);
  
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  return (
    <div className="bg-iptv-darkgray/40 rounded-xl border border-gray-800 p-6 backdrop-blur-sm relative overflow-hidden">
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
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-iptv-gray">Plan</span>
            <span className="font-semibold">{selectedPlan.name}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-iptv-gray">Duration</span>
            <span className="font-semibold">{selectedPlan.duration}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-iptv-gray">Start Date</span>
            <span className="font-semibold">{formatDate(startDate)}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-iptv-gray">End Date</span>
            <span className="font-semibold">{formatDate(endDate)}</span>
          </div>
          
          {selectedPlan.features && selectedPlan.features.length > 0 && (
            <div className="pt-3 border-t border-gray-700">
              <h3 className="text-sm font-medium mb-2">Plan Features:</h3>
              <ul className="text-xs space-y-2">
                {selectedPlan.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-iptv-red mr-2">•</span>
                    <span className="text-iptv-gray">{feature}</span>
                  </li>
                ))}
                {selectedPlan.features.length > 3 && (
                  <li className="text-iptv-gray text-xs italic">
                    +{selectedPlan.features.length - 3} more features
                  </li>
                )}
              </ul>
            </div>
          )}
          
          <div className="border-t border-gray-700 my-4"></div>
          
          <div className="flex justify-between items-center text-lg">
            <span className="text-iptv-gray">Total</span>
            <span className="font-bold">${selectedPlan.price}</span>
          </div>
        </div>
        
        <div className="mt-6">
          <Link to="/plans" className="block text-center text-iptv-red hover:text-iptv-red/80">
            Edit Selection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;