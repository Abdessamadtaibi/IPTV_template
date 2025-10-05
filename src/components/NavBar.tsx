import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to check if the current path matches the link
  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") {
      return false;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 py-2 shadow-lg backdrop-blur-sm' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center">
          <img src="images/logo.png" alt="IPTV Plus" style={{ height:"45px"}} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link 
            to="/" 
            className={`relative py-2 transition-colors ${
              isActive("/") ? 'text-iptv-red font-semibold' : 'text-white hover:text-iptv-red'
            }`}
          >
            Home
            {isActive("/") && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-iptv-red rounded-full" />
            )}
          </Link>
          <Link 
            to="/plans" 
            className={`relative py-2 transition-colors ${
              isActive("/plans") ? 'text-iptv-red font-semibold' : 'text-white hover:text-iptv-red'
            }`}
          >
            Plans
            {isActive("/plans") && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-iptv-red rounded-full" />
            )}
          </Link>
          <Link 
            to="/faq" 
            className={`relative py-2 transition-colors ${
              isActive("/faq") ? 'text-iptv-red font-semibold' : 'text-white hover:text-iptv-red'
            }`}
          >
            FAQ
            {isActive("/faq") && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-iptv-red rounded-full" />
            )}
          </Link>
          <Link 
            to="/contact" 
            className={`relative py-2 transition-colors ${
              isActive("/contact") ? 'text-iptv-red font-semibold' : 'text-white hover:text-iptv-red'
            }`}
          >
            Contact
            {isActive("/contact") && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-iptv-red rounded-full" />
            )}
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex space-x-4">
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col justify-center items-center transition-all duration-300 backdrop-blur-sm ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col space-y-6 text-center">
          <Link 
            to="/" 
            className={`text-2xl font-medium ${
              isActive("/") ? 'text-iptv-red' : 'text-white hover:text-iptv-red'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/plans" 
            className={`text-2xl font-medium ${
              isActive("/plans") ? 'text-iptv-red' : 'text-white hover:text-iptv-red'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Plans
          </Link>
          <Link 
            to="/blog" 
            className={`text-2xl font-medium ${
              isActive("/blog") ? 'text-iptv-red' : 'text-white hover:text-iptv-red'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/faq" 
            className={`text-2xl font-medium ${
              isActive("/faq") ? 'text-iptv-red' : 'text-white hover:text-iptv-red'
            }`}
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link 
            to="/contact" 
            className={`text-2xl font-medium ${
              isActive("/contact") ? 'text-iptv-red' : 'text-white hover:text-iptv-red'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;