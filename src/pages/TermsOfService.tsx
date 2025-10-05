
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfService = () => {
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
            <FileText className="h-8 w-8 text-iptv-red" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          </div>

          <div className="mb-10 p-6 bg-gray-900 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><a href="#introduction" className="text-iptv-red hover:underline">Introduction and Acceptance</a></li>
              <li><a href="#user-responsibilities" className="text-iptv-red hover:underline">User Responsibilities</a></li>
              <li><a href="#service-limitations" className="text-iptv-red hover:underline">Service Limitations</a></li>
              <li><a href="#subscription-rules" className="text-iptv-red hover:underline">Subscription Rules</a></li>
              <li><a href="#refund-policy" className="text-iptv-red hover:underline">Refund and Cancellation Policy</a></li>
              <li><a href="#account-termination" className="text-iptv-red hover:underline">Account Termination</a></li>
              <li><a href="#dispute-resolution" className="text-iptv-red hover:underline">Dispute Resolution</a></li>
              <li><a href="#changes" className="text-iptv-red hover:underline">Changes to Terms</a></li>
            </ol>
          </div>

          <div className="space-y-10 text-left">
            <section id="introduction">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">1. Introduction and Acceptance</h2>
              <p className="text-iptv-gray mb-4">
                Welcome to IPTVPlus. These Terms of Service ("Terms") govern your access to and use of
                our website, applications, and IPTV streaming services (collectively, the "Service").
              </p>
              <p className="text-iptv-gray mb-4">
                By accessing or using our Service, you agree to be bound by these Terms. If you disagree
                with any part of the Terms, then you may not access or use our Service.
              </p>
              <p className="text-iptv-gray">
                These Terms constitute a legally binding agreement between you and IPTVPlus regarding
                your use of the Service. Please read them carefully.
              </p>
            </section>

            <section id="user-responsibilities">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">2. User Responsibilities</h2>
              <p className="text-iptv-gray mb-4">
                As a user of the IPTVPlus service, you are responsible for:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-iptv-gray">
                <li>
                  Maintaining the confidentiality of your account credentials, including username and password.
                </li>
                <li>
                  All activities that occur under your account, whether or not you authorized them.
                </li>
                <li>
                  Ensuring that your use of the Service complies with all applicable laws and regulations in your jurisdiction.
                </li>
                <li>
                  Using the Service only for lawful purposes and in accordance with these Terms.
                </li>
                <li>
                  Not sharing your account credentials or subscription with others outside your household.
                </li>
                <li>
                  Not attempting to circumvent any technological measures implemented to control access to the Service.
                </li>
              </ul>
              <p className="text-iptv-gray mt-4">
                You must notify us immediately upon becoming aware of any unauthorized use of your account
                or any other breach of security.
              </p>
            </section>

            <section id="service-limitations">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">3. Service Limitations</h2>
              <p className="text-iptv-gray mb-4">
                While we strive to provide uninterrupted service, IPTVPlus does not guarantee:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-iptv-gray">
                <li>
                  Continuous, uninterrupted, or secure access to our Service.
                </li>
                <li>
                  That all content will be available at all times or in all geographical locations.
                </li>
                <li>
                  That defects or errors in the Service will be corrected.
                </li>
                <li>
                  That the Service or the servers that make it available are free of viruses or other harmful components.
                </li>
              </ul>
              <p className="text-iptv-gray mt-4">
                The Service may be temporarily unavailable due to maintenance, technical issues, or factors
                beyond our control. We reserve the right to modify, suspend, or discontinue any part of the
                Service without prior notice.
              </p>
            </section>

            <section id="subscription-rules">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">4. Subscription Rules</h2>
              <p className="text-iptv-gray mb-4">
                Your subscription to IPTVPlus is subject to the following rules:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-iptv-gray">
                <li>
                  Subscriptions are valid for the period specified at the time of purchase.
                </li>
                <li>
                  Your subscription renews automatically unless canceled before the renewal date.
                </li>
                <li>
                  Subscription fees are charged at the beginning of each billing cycle.
                </li>
                <li>
                  The number of devices that can simultaneously access the Service is determined by your subscription plan.
                </li>
                <li>
                  We reserve the right to modify subscription prices with notice before your next billing cycle.
                </li>
                <li>
                  You may not transfer or assign your subscription to any other person or entity.
                </li>
              </ul>
            </section>

            <section id="refund-policy">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">5. Refund and Cancellation Policy</h2>
              <p className="text-iptv-gray mb-4">
                Our refund and cancellation policies are as follows:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-iptv-gray">
                <li>
                  We offer a 24-hour money-back guarantee if you experience technical issues that our support team cannot resolve.
                </li>
                <li>
                  Refund requests made after 24 hours from purchase are evaluated on a case-by-case basis.
                </li>
                <li>
                  To cancel your subscription, you must access your account dashboard and follow the cancellation procedure.
                </li>
                <li>
                  When you cancel, your service will continue until the end of your current billing period.
                </li>
                <li>
                  No refunds will be provided for partial subscription periods.
                </li>
                <li>
                  We reserve the right to refuse refunds in cases of suspected fraud or abuse of our service.
                </li>
              </ul>
            </section>

            <section id="account-termination">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">6. Account Termination</h2>
              <p className="text-iptv-gray mb-4">
                We reserve the right to suspend or terminate your account and access to the Service:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-iptv-gray">
                <li>
                  If you violate these Terms or other applicable policies.
                </li>
                <li>
                  If you engage in fraudulent or illegal activities.
                </li>
                <li>
                  If you share your account with multiple users beyond the allowed limits.
                </li>
                <li>
                  For non-payment of subscription fees.
                </li>
                <li>
                  At our discretion, with or without cause, with reasonable notice.
                </li>
              </ul>
              <p className="text-iptv-gray mt-4">
                Upon termination, your access to the Service will be immediately revoked. Any termination
                of your access to the Service may involve deletion of your account information and content.
              </p>
            </section>

            <section id="dispute-resolution">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">7. Dispute Resolution</h2>
              <p className="text-iptv-gray mb-4">
                In the event of any dispute or claim related to these Terms or the Service:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-iptv-gray">
                <li>
                  We encourage you to first contact our customer support team to try to resolve the issue informally.
                </li>
                <li>
                  If the dispute cannot be resolved informally, you agree to submit to binding arbitration.
                </li>
                <li>
                  The arbitration shall be conducted in accordance with the commercial arbitration rules
                  of the American Arbitration Association.
                </li>
                <li>
                  Any arbitration shall take place in [Jurisdiction], and be conducted in the English language.
                </li>
                <li>
                  The arbitrator's decision shall be final and binding on both parties.
                </li>
              </ul>
            </section>

            <section id="changes">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">8. Changes to Terms</h2>
              <p className="text-iptv-gray mb-4">
                We may modify these Terms at any time, and such modifications shall be effective immediately
                upon posting the modified Terms on our website.
              </p>
              <p className="text-iptv-gray">
                Your continued use of the Service after any changes to these Terms constitutes your acceptance
                of such changes. It is your responsibility to check these Terms periodically for changes.
              </p>
            </section>
          </div>

          <div className="mt-10 p-6 border border-gray-800 rounded-lg">
            <p className="text-sm text-iptv-gray">
              Last updated: May 1, 2025
            </p>
            <p className="text-sm text-iptv-gray mt-2">
              By using our Service, you acknowledge that you have read, understood, and agree to be bound
              by these Terms of Service.
            </p>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
