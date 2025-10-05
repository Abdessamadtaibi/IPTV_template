
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const PaymentSuccess = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      
      {/* Success Content */}
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto bg-green-500/20 w-24 h-24 rounded-full flex items-center justify-center mb-8"
          >
            <Check className="h-12 w-12 text-green-500" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Payment <span className="text-iptv-red">Successful</span>!
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-iptv-gray text-lg mb-8"
          >
            Thank you for your purchase! Your IPTV subscription has been activated successfully.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="bg-iptv-darkgray/30 border border-gray-800 rounded-xl p-6 mb-8"
          >
            <h2 className="text-xl font-semibold mb-4">Next Steps:</h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-start">
                <div className="bg-iptv-red/20 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold text-iptv-red">1</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Check Your Email</h3>
                  <p className="text-gray-400">We've sent your login credentials and setup instructions to your email address.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-iptv-red/20 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold text-iptv-red">2</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Download Our App</h3>
                  <p className="text-gray-400">Get our app for your preferred device to start streaming right away.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-iptv-red/20 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="font-bold text-iptv-red">3</span>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Need Help?</h3>
                  <p className="text-gray-400">Our support team is available 24/7 to assist with any questions or setup issues.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/">
              <Button className="w-full sm:w-auto bg-iptv-red hover:bg-iptv-red/90">
                Go to Homepage
              </Button>
            </Link>
            
            <Link to="/contact">
              <Button className="w-full sm:w-auto" variant="outline">
                Contact Support
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
