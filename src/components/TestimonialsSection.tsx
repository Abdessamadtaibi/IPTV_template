import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";


const testimonials = [
  {
    id: 1,
    name: "Michael T.",
    country: "United States",
    subscription: "12 Month Plan",
    rating: 5,
    text: "Best IPTV service I've used. Stable connection and incredible channel selection. The VOD library is impressive too.",
    avatar: ""
  },
  {
    id: 2,
    name: "Sarah L.",
    country: "Canada",
    subscription: "3 Month Plan",
    rating: 5,
    text: "IPTVPlus has everything I need in one place. I can watch my favorite shows and sports from anywhere. Customer support is excellent.",
    avatar: ""
  },
  {
    id: 3,
    name: "David R.",
    country: "United Kingdom",
    subscription: "6 Month Plan",
    rating: 5,
    text: "The service quality is outstanding. Never experienced any buffering issues even during peak times. Well worth the price.",
    avatar: ""
  },
  {
    id: 4,
    name: "Emma P.",
    country: "Australia",
    subscription: "3 Month Plan",
    rating: 4,
    text: "Great selection of international channels. I can finally watch content from my home country. Interface is easy to navigate.",
    avatar: ""
  },
  {
    id: 5,
    name: "Thomas H.",
    country: "Germany",
    subscription: "1 Month Plan",
    rating: 5,
    text: "Tried many IPTV services before, but IPTVPlus stands out with its reliability. No more freezing during important games!",
    avatar: ""
  },
  {
    id: 6,
    name: "Sophia K.",
    country: "France",
    subscription: "12 Month Plan",
    rating: 5,
    text: "The channel selection is amazing. I get to watch channels from all over the world. The picture quality is excellent too.",
    avatar: ""
  },
];

// Custom hook to check screen size
const useMediaQuery = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 640 && window.innerWidth < 1024);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { isDesktop, isTablet, isMobile };
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card className="bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg overflow-hidden transition-transform hover:scale-105 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <Avatar className="h-12 w-12 mr-4 border-2 border-iptv-red">
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-iptv-red/30 text-white">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold text-white">{testimonial.name}</div>
            <div className="text-sm text-gray-400">{testimonial.country}</div>
          </div>
        </div>
        
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i}
              className={`w-4 h-4 ${i < testimonial.rating ? 'text-iptv-red fill-iptv-red' : 'text-gray-400'}`}
            />
          ))}
        </div>
        
        {testimonial.subscription && (
          <div className="mb-2 text-xs bg-iptv-red/20 text-iptv-red py-1 px-2 rounded-full inline-block self-start">
            {testimonial.subscription}
          </div>
        )}
        
        <blockquote className="text-gray-300 italic my-4 flex-grow">
          "{testimonial.text}"
        </blockquote>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const { isDesktop, isTablet, isMobile } = useMediaQuery();
  const [api, setApi] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [api]);
  
  // Update current slide for indicators
  useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Determine how many cards to show based on screen size
  const getItemsPerView = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <section className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-['League_Spartan']">
          Customer <span className="text-iptv-red">Testimonials</span>
        </h2>
        <p className="text-iptv-gray text-center max-w-2xl mx-auto mb-12">
          Don't just take our word for it. See what our satisfied customers have to say about IPTVPlus.
        </p>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            className="mx-auto"
            opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
            }}
          >
            <CarouselContent className="px-4">
              {testimonials.map((testimonial) => (
                <CarouselItem 
                  key={testimonial.id} 
                  className={isMobile ? "basis-full" : isTablet ? "basis-1/2" : "basis-1/3"}
                >
                  <div className="p-1">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="left-0 bg-black/50 hover:bg-iptv-red border-none text-white" />
              <CarouselNext className="right-0 bg-black/50 hover:bg-iptv-red border-none text-white" />
            </div>
          </Carousel>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.slice(0, Math.ceil(testimonials.length / getItemsPerView())).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index * getItemsPerView())}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  Math.floor(currentSlide / getItemsPerView()) === index ? 'bg-iptv-red' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;