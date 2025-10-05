
import { Link } from 'react-router-dom';

const MobileCheckoutBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 py-3 px-4 md:hidden z-40">
      <Link to="/plans" className="block">
        <button className="w-full bg-iptv-red hover:bg-iptv-red/90 text-white font-semibold py-3 px-6 rounded-md transition-colors">
          Subscribe Now
        </button>
      </Link>
    </div>
  );
};

export default MobileCheckoutBar;
