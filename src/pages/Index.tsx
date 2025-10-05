
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ScrollingContent from "../components/ScrollingContent";
import FeaturesSection from "../components/FeaturesSection";
import PlansSection from "../components/PlansSection";
import OurContent from "../components/OurContent";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";
import MobileCheckoutBar from "../components/MobileCheckoutBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <HeroSection />
      <OurContent />
      <ScrollingContent />
      <PlansSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
      <MobileCheckoutBar />
    </div>
  );
};

export default Index;
