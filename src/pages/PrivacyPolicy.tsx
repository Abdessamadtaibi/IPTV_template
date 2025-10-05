
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
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
            <Shield className="h-8 w-8 text-iptv-red" />
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>

          <div className="mb-10 p-6 bg-gray-900 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li><a href="#info-collection" className="text-iptv-red hover:underline">Information We Collect</a></li>
              <li><a href="#info-usage" className="text-iptv-red hover:underline">How We Use Your Data</a></li>
              <li><a href="#cookies" className="text-iptv-red hover:underline">Cookies and Tracking Technologies</a></li>
              <li><a href="#data-retention" className="text-iptv-red hover:underline">Data Retention</a></li>
              <li><a href="#third-party" className="text-iptv-red hover:underline">Third-Party Services</a></li>
              <li><a href="#your-rights" className="text-iptv-red hover:underline">Your Rights & Data Access</a></li>
              <li><a href="#contact" className="text-iptv-red hover:underline">Contact Information</a></li>
            </ol>
          </div>

          <div className="space-y-10 text-left">
            <section id="info-collection">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">1. Information We Collect</h2>
              <p className="text-iptv-gray mb-4">
                We collect several types of information from and about users of our service, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-iptv-gray">
                <li>
                  <span className="text-white font-medium">Personal Information:</span> Name, email address, billing address, 
                  payment information, and contact details when you register for our service.
                </li>
                <li>
                  <span className="text-white font-medium">Account Information:</span> Username, password, account preferences,
                  subscription plan details, and purchase history.
                </li>
                <li>
                  <span className="text-white font-medium">Usage Data:</span> Information about your interaction with our service,
                  including channels watched, viewing duration, login times, device information, IP address,
                  and operating system.
                </li>
                <li>
                  <span className="text-white font-medium">Technical Data:</span> Connection information, browser type,
                  internet service provider, referring/exit pages, and date/time stamps.
                </li>
              </ul>
            </section>

            <section id="info-usage">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">2. How We Use Your Data</h2>
              <p className="text-iptv-gray mb-4">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-iptv-gray">
                <li>Providing and maintaining our IPTV service</li>
                <li>Processing payments and handling billing</li>
                <li>Improving and personalizing your viewing experience</li>
                <li>Sending service notifications and updates</li>
                <li>Responding to customer service requests</li>
                <li>Marketing and promotional communications (with your consent)</li>
                <li>Analyzing usage patterns to improve our service</li>
                <li>Preventing fraud and enforcing our terms of service</li>
              </ul>
            </section>

            <section id="cookies">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">3. Cookies and Tracking Technologies</h2>
              <p className="text-iptv-gray mb-4">
                We use cookies and similar tracking technologies to collect and track information about your interaction
                with our service. These technologies help us:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-iptv-gray">
                <li>Remember your login information</li>
                <li>Understand your preferences and settings</li>
                <li>Track your usage of our service</li>
                <li>Improve the functionality of our website and apps</li>
                <li>Prevent fraud and unauthorized access</li>
              </ul>
              <p className="text-iptv-gray mt-4">
                You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent.
                However, if you disable or refuse cookies, please note that some parts of our service may be inaccessible
                or not function properly.
              </p>
            </section>

            <section id="data-retention">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">4. Data Retention</h2>
              <p className="text-iptv-gray mb-4">
                We retain your personal information for as long as necessary to provide you with our service
                and as needed to comply with our legal obligations, resolve disputes, and enforce our policies.
              </p>
              <p className="text-iptv-gray">
                Usage data is generally retained for a shorter period, except when used to strengthen security,
                improve functionality, or when we are legally obligated to retain this data for longer periods.
              </p>
            </section>

            <section id="third-party">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">5. Third-Party Services</h2>
              <p className="text-iptv-gray mb-4">
                We may employ third-party companies and individuals to facilitate our service, provide the
                service on our behalf, or assist us in analyzing how our service is used. These third parties
                have access to your personal information only to perform these tasks on our behalf and are
                obligated not to disclose or use it for any other purpose.
              </p>
              <p className="text-iptv-gray">
                Third-party services we use may include payment processors, analytics providers, customer support
                tools, and content delivery networks.
              </p>
            </section>

            <section id="your-rights">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">6. Your Rights & Data Access</h2>
              <p className="text-iptv-gray mb-4">
                Depending on your location, you may have certain rights regarding your personal information,
                including:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-iptv-gray">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to request restriction of processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-iptv-gray mt-4">
                To exercise any of these rights, please contact us using the information provided in the
                Contact Information section. We will respond to your request within a reasonable timeframe
                and in accordance with applicable data protection laws.
              </p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-semibold text-iptv-red mb-4">7. Contact Information</h2>
              <p className="text-iptv-gray mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="bg-gray-900 p-4 rounded-lg">
                <p className="text-white">IPTVPlus</p>
                <p className="text-iptv-gray">Email: privacy@iptvplus.com</p>
                <p className="text-iptv-gray">Address: 123 Streaming Street, Server City, 10001</p>
                <p className="text-iptv-gray">Phone: +1 (234) 567-890</p>
              </div>
            </section>
          </div>

          <div className="mt-10 p-6 border border-gray-800 rounded-lg">
            <p className="text-sm text-iptv-gray">
              Last updated: May 1, 2025
            </p>
            <p className="text-sm text-iptv-gray mt-2">
              We may update this Privacy Policy from time to time. We will notify you of any changes by
              posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </div>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
