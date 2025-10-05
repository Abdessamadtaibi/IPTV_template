import React from "react";

interface Plan {
  name: string;
  price: number;
  duration: string;
  features?: string[];
  popular?: boolean;
  slug?: string;
}

interface OrderSummaryProps {
  selectedPlan: Plan;
}

const OrderSummary = ({ selectedPlan }: OrderSummaryProps) => {
  return (
    <div className="bg-iptv-darkgray/40 rounded-xl shadow-xl p-6 backdrop-blur-sm border border-gray-800 relative overflow-hidden">
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
        <h2 className="text-xl font-bold mb-4 text-white">Order Summary</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between text-iptv-gray">
            <span>Selected Plan:</span>
            <span className="font-medium text-white">{selectedPlan.name}</span>
          </div>
          
          <div className="flex justify-between text-iptv-gray">
            <span>Duration:</span>
            <span className="font-medium text-white">{selectedPlan.duration}</span>
          </div>
          
          <div className="border-t border-gray-700 my-4 pt-4">
            <div className="flex justify-between items-center">
              <span className="text-lg text-iptv-gray">Total:</span>
              <span className="text-2xl font-bold text-iptv-red">
                ${selectedPlan.price.toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-right">
              One-time payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;