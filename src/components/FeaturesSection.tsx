
import { Play, Tv, Server, Smartphone } from 'lucide-react';

const features = [
  {
    title: "20,000+ Live Channels",
    description: "Access a vast collection of international channels covering sports, news, entertainment, and more.",
    icon: <Tv className="w-10 h-10 text-iptv-red" />,
  },
  {
    title: "10,000+ Movies & Shows",
    description: "Enjoy an extensive library of on-demand content including the latest movies and popular TV series.",
    icon: <Play className="w-10 h-10 text-iptv-red" />,
  },
  {
    title: "99.9% Uptime Servers",
    description: "Experience uninterrupted streaming with our highly reliable and stable server infrastructure.",
    icon: <Server className="w-10 h-10 text-iptv-red" />,
  },
  {
    title: "Multi-Device Support",
    description: "Watch on Smart TVs, Android, iPhone, Firestick, and more with our versatile platform compatibility.",
    icon: <Smartphone className="w-10 h-10 text-iptv-red" />,
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-black bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Why Choose <span className="text-iptv-red">IPTV</span>Plus
        </h2>
        <p className="text-iptv-gray text-center max-w-2xl mx-auto mb-16">
          Premium entertainment with unmatched quality and reliability. 
          Experience the best in streaming technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative bg-iptv-darkgray bg-opacity-50 rounded-xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 overflow-hidden"
            >
              {/* Striped background gradient */}
              <div 
                className="absolute inset-0 pointer-events-none" 
                style={{
                  background: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 10px,
                    rgba(255, 255, 255, 0.1) 10px,
                    rgba(255, 255, 255, 0.1) 20px
                  )`,
                  opacity: 0.4
                }}
              />
              
              {/* Content with proper z-index */}
              <div className="relative z-10">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-iptv-gray">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
