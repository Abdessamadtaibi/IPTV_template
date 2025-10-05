
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: "images/image_fx1.jpg",
    title: "Premium Entertainment Experience",
    subtitle: "Access to 20,000+ Live TV Channels and 10,000+ Movies & Shows"
  },
  {
    id: 2,
    image: "images/F1.jpg",
    title: "Watch Live Sports Events",
    subtitle: "Never miss your favorite teams with our comprehensive sports coverage"
  },
    {
    id: 3,
    image: "images/ChampionsLeage.jpg",
    title: "Watch Live Sports Events",
    subtitle: "Never miss your favorite teams with our comprehensive sports coverage"
  },
    {
    id: 4,
    image: "images/basketball.jpg",
    title:  "Watch Live Sports Events",
    subtitle: "Never miss your favorite teams with our comprehensive sports coverage"
  },
  {
    id: 5,
    image: "images/background2.jpg",
    title:  "Movies & TV Shows On Demand",
    subtitle:"Extensive library of content available whenever you want to watch"
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-hero-gradient z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
      
      {/* Content */}
      <div className="container mx-auto relative z-20 h-full flex flex-col justify-center px-4 md:px-0">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-shadow">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-iptv-gray text-shadow">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/plans">
              <button className="btn-primary">
                Subscribe Now
              </button>
            </Link>
            <Link to="/plans">
              <button className="btn-secondary">
                View Plans
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? 'bg-iptv-red' : 'bg-white/50'
              } transition-all duration-300`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
