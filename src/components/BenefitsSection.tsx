import React from 'react';
import { Wifi, Shield, Clock, Monitor, DollarSign, Satellite } from 'lucide-react';

export default function BenefitsSection() {
  return (
    <section className="bg-black text-white w-full py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left side - Image with experience badge */}
          <div className="w-full lg:w-2/3 relative">
            <div className="rounded-3xl overflow-hidden" style={{
              left: "0px",
              position: "relative"
            }}>
              <img
                src="images/image_fx.webp" 
                alt="TV streaming experience"
                className="w-full h-auto object-cover"
                style={{ 
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-0 left-[50px]" style={{
              backgroundColor: "rgba(214, 23, 23, 0.93)",
              width: "170px",
              height: "170px",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0px 4px 10px rgba(218, 21, 21, 0.3)"
            }}>
              <div className="text-center text-white">
                <p className="text-x font-semibold tracking-wider">EXPERIENCE OF</p>
                <h2 className="text-2xl font-bold">3 Yrs</h2>
              </div>
            </div>
          </div>
          
          {/* Right side - Benefits content */}
          <div className="w-full lg:w-1/2 pt-8 lg:pt-0">
            <span className="text-red-600 font-medium tracking-wide">BENEFITS</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-10">
              Only benefits
            </h2>
            
            {/* Benefits grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              {/* Benefit 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-red-900/30" style={{ color: "rgb(178, 0, 0)" }}>
                  <Satellite size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Top Rated Channels</h3>
                  <p className="text-gray-300">
                    Enjoy Top rated TV channels with the best streaming experience.
                  </p>
                </div>
              </div>
              
              {/* Benefit 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-red-900/30" style={{ color: "rgb(178, 0, 0)" }}>
                  <Wifi size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fast Connected</h3>
                  <p className="text-gray-300">
                    Once you sign up. You get access instantly with same login credentials.
                  </p>
                </div>
              </div>
              
              {/* Benefit 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-red-900/30" style={{ color: "rgb(178, 0, 0)" }}>
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Support 24/7</h3>
                  <p className="text-gray-300">
                    Get a 24 hours 7 days a week Technical Support.
                  </p>
                </div>
              </div>
              
              {/* Benefit 4 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-red-900/30" style={{ color: "rgb(178, 0, 0)" }}>
                  <Shield size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Privacy & Security</h3>
                  <p className="text-gray-300">
                    With one time payments and 256-Bit encryption module. Your minimal data is safe.
                  </p>
                </div>
              </div>
              
              {/* Benefit 5 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-red-900/30" style={{ color: "rgb(178, 0, 0)" }}>
                  <Monitor size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">DIY Installations</h3>
                  <p className="text-gray-300">
                    No need "Tech Savvy". You just download the app on your TV and you could tell what to do.
                  </p>
                </div>
              </div>
              
              {/* Benefit 6 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 rounded-full bg-red-900/30" style={{ color: "rgb(178, 0, 0)" }}>
                  <DollarSign size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Best Pricing Plans</h3>
                  <p className="text-gray-300">
                    You will not find a second place to save the money with such Quality Standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}