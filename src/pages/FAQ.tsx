
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <NavBar />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 container mx-auto px-4 py-24 md:py-32"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="h-8 w-8 text-iptv-red" />
            <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
          </div>
          
          <p className="text-iptv-gray text-lg mb-12">
            Find answers to the most common questions about our IPTV service.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-iptv-red mb-6">Account & Login</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">How do I create an account?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      To create an account, click on the "Register" button in the top right corner of the website. 
                      Fill in your details including email address and create a password. After registration, you'll 
                      need to subscribe to a plan to access our IPTV services.
                    </p>
                    <FeedbackButtons questionId="account-1" />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">I forgot my password. How do I reset it?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      If you forgot your password, go to the login page and click on "Forgot Password". Enter the email 
                      address associated with your account, and we'll send you instructions to reset your password.
                    </p>
                    <FeedbackButtons questionId="account-2" />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">How many devices can I use with one account?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      The number of simultaneous devices depends on your subscription plan. Basic plans allow 1 device 
                      at a time, while Premium and Family plans allow 3-5 devices simultaneously. You can manage your 
                      devices in your account dashboard.
                    </p>
                    <FeedbackButtons questionId="account-3" />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-iptv-red mb-6">Subscription Plans</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="plan-1" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">What subscription plans do you offer?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      We offer various subscription plans to meet different needs. These include monthly, quarterly, and 
                      annual options. Each plan offers access to our full channel lineup, with differences in the number 
                      of simultaneous connections and device support.
                    </p>
                    <FeedbackButtons questionId="plan-1" />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="plan-2" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">Can I change my subscription plan?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      Yes, you can upgrade or downgrade your subscription plan at any time from your account dashboard. 
                      When upgrading, you'll only pay the difference. When downgrading, the new rate will apply at your 
                      next billing cycle.
                    </p>
                    <FeedbackButtons questionId="plan-2" />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="plan-3" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">Do you offer free trials?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      We occasionally offer limited-time free trials for new users. Check our homepage or subscribe 
                      to our newsletter to be notified when free trials are available. Alternatively, contact our 
                      customer support to inquire about trial options.
                    </p>
                    <FeedbackButtons questionId="plan-3" />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-iptv-red mb-6">Streaming Devices</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="device-1" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">Which devices are compatible with your service?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      Our IPTV service works on a wide range of devices including Smart TVs (Samsung, LG), 
                      Android TV boxes, Amazon Firestick, NVIDIA Shield, iOS devices (iPhone/iPad), 
                      Android smartphones/tablets, Windows and Mac computers, and more.
                    </p>
                    <FeedbackButtons questionId="device-1" />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="device-2" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">How do I set up the service on my device?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      We have detailed setup guides for all supported devices. Visit our Setup Guide page for 
                      step-by-step instructions. If you need further assistance, our customer support team is 
                      available 24/7 to help you with the setup process.
                    </p>
                    <FeedbackButtons questionId="device-2" />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="device-3" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">What internet speed do I need?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      For SD content, we recommend at least 5 Mbps internet speed. For HD content, 10 Mbps is 
                      recommended. For 4K content, we recommend at least 25 Mbps. A stable connection is more 
                      important than raw speed for buffer-free streaming.
                    </p>
                    <FeedbackButtons questionId="device-3" />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-iptv-red mb-6">Troubleshooting</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="trouble-1" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">Why am I experiencing buffering issues?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      Buffering can be caused by several factors: slow internet connection, network congestion, 
                      device limitations, or server load. Try switching to a lower quality stream, check your 
                      internet connection, restart your device, or try a different server if available.
                    </p>
                    <FeedbackButtons questionId="trouble-1" />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="trouble-2" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">Some channels are not working. What should I do?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      If specific channels are not working, first try refreshing the stream or restarting the app. 
                      Channels may occasionally undergo maintenance. If the issue persists, contact our support team 
                      with the specific channel names so we can investigate.
                    </p>
                    <FeedbackButtons questionId="trouble-2" />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="trouble-3" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">Why can't I login to my account?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      Login issues could be due to incorrect credentials, expired subscription, server maintenance, 
                      or account restrictions. Double-check your username/password, verify your subscription status, 
                      or contact support if you believe there's a technical issue.
                    </p>
                    <FeedbackButtons questionId="trouble-3" />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-iptv-red mb-6">Payments & Refunds</h2>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="payment-1" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      We accept major credit cards (Visa, Mastercard, American Express, Discover), PayPal, 
                      cryptocurrency payments (Bitcoin, Ethereum), and various regional payment methods 
                      depending on your location.
                    </p>
                    <FeedbackButtons questionId="payment-1" />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="payment-2" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">Do you offer refunds?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      We offer a 24-hour money-back guarantee if you experience technical issues that our support 
                      team cannot resolve. Refund requests made after 24 hours from purchase are evaluated on a 
                      case-by-case basis. Please refer to our Terms of Service for detailed refund policies.
                    </p>
                    <FeedbackButtons questionId="payment-2" />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="payment-3" className="border-b-[0.5px] border-gray-800">
                  <AccordionTrigger className="text-lg hover:text-iptv-red">How do I cancel my subscription?</AccordionTrigger>
                  <AccordionContent className="text-iptv-gray">
                    <p>
                      You can cancel your subscription at any time from your account dashboard. Go to "Subscription" 
                      and click "Cancel Subscription". Your service will remain active until the end of your current 
                      billing period. There are no cancellation fees.
                    </p>
                    <FeedbackButtons questionId="payment-3" />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

interface FeedbackButtonsProps {
  questionId: string;
}

const FeedbackButtons = ({ questionId }: FeedbackButtonsProps) => {
  return (
    <div className="mt-4 flex items-center gap-4 ">
      <p className="text-sm text-iptv-gray">Did this help?</p>
      <div className="flex gap-2">
        <button 
          className="p-2 rounded-md hover:bg-green-900 hover:bg-opacity-30 transition-colors"
          onClick={() => console.log(`Question ${questionId} was helpful`)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
        </button>
        <button 
          className="p-2 rounded-md hover:bg-red-900 hover:bg-opacity-30 transition-colors"
          onClick={() => console.log(`Question ${questionId} was not helpful`)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FAQ;
