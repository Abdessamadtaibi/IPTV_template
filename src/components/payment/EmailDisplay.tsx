import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EmailDisplayProps {
  email: string;
}

const EmailDisplay = ({ email }: EmailDisplayProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor="email" className="text-white">Email</Label>
      <Input 
        id="email" 
        type="email" 
        value={email} 
        disabled 
        style={{color:'white'}}
      />
      <p className="text-xs text-gray-500">
        Your receipt will be sent to this email address.
      </p>
    </div>
  );
};

export default EmailDisplay;