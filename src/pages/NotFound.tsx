
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <NavBar />
      
      <div className="flex-grow flex items-center justify-center min-h-[70vh]">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-iptv-red mb-6">404</h1>
          <p className="text-2xl md:text-3xl text-white mb-8">Oops! Page not found</p>
          <p className="text-iptv-gray max-w-md mx-auto mb-10">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link to="/">
            <button className="btn-primary">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
