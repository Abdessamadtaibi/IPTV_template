import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function StreamingSection() {
  // We don't need the windowWidth state since we're using Tailwind's responsive classes
  // This simplifies our component

  return (
    <section className="bg-black from-black to-gray-900 text-white w-full py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left side - Image */}
          <div className="w-full lg:w-2/3">
            <div className="rounded-2xl overflow-hidden" style={{
              boxShadow: "0px 0px 100px rgba(172, 4, 4, 0.57), 0px 0px 100px rgba(188, 31, 31, 0.58)",
              background: "linear-gradient(145deg, rgba(184, 18, 18, 0.8) 0%, rgba(208, 45, 45, 0.4) 100%)"
            }}>
              <img
                src="images/image_fx1.webp"
                alt="Friends watching sports games"
                className="w-full h-auto rounded-2xl"
                style={{ aspectRatio: "16/10", objectFit: "cover" }}
              />
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-red-600 font-medium tracking-wide">OUR CONTENT</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-6">
              More to Stream
            </h2>
            <p className="text-lg md:text-xl opacity-80 mb-8 leading-relaxed">
              With our large and comprehensive collection of TV channels,
              never miss your favorite sports games and TV shows. You can be
              the first to see your new episode.
            </p>
            <div className="bg-red-800 rounded-2xl p-5 md:p-6 mb-8" style={{
              background: "rgb(172, 4, 4)",
              boxShadow: "0px 5px 15px rgba(172, 4, 4, 0.3)"
            }}>
              <p className="text-lg md:text-xl leading-relaxed">
                Watch exclusive sports channels every week. Get top-rated
                TV customer service. Bundle your favorite services.
              </p>
            </div>
            <ul className="space-y-5">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-red-600" size={28} style={{ color: "rgb(172, 4, 4)" }} />
                <span className="text-lg md:text-xl">25,000 worldwide channels 4K</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-red-600" size={28} style={{ color: "rgb(172, 4, 4)" }} />
                <span className="text-lg md:text-xl">500K new and old movies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}