import React from "react";
import { Link } from "react-router-dom";

interface TermsAndConditionsCheckboxProps {
  accepted: boolean;
  onChange: (accepted: boolean) => void;
}

const TermsAndConditionsCheckbox = ({ 
  accepted, 
  onChange 
}: TermsAndConditionsCheckboxProps) => {
  return (
    <div className="flex items-start space-x-2 mt-6">
      <input 
        type="checkbox" 
        id="terms" 
        className="h-5 w-5 translate-y-1 rounded border-gray-300 text-iptv-red focus:ring-iptv-red"
        checked={accepted}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor="terms" className="text-sm text-iptv-gray">
        I agree to the{" "}
        <Link to="/terms" className="text-iptv-red hover:underline">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link to="/privacy-policy" className="text-iptv-red hover:underline">
          Privacy Policy
        </Link>
      </label>
    </div>
  );
};

export default TermsAndConditionsCheckbox;