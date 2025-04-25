import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = {
    'Home': 'Overview of services and expertise',
    'Services': 'Full-stack development and ML solutions',
    'About': 'Professional background and experience',
    'Contact': 'Get in touch for project inquiries',
    'Location': 'Based in Tanzania, serving globally'
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-white">Mbagira47 TechSolve</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(navItems).map(([label, description]) => (
              <NavItem 
                key={label}
                to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                label={label}
                description={description}
                onHover={setHoveredItem}
                isHovered={hoveredItem === label}
              />
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen bg-slate-800' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-2 space-y-3">
          {Object.entries(navItems).map(([label, description]) => (
            <MobileNavItem 
              key={label}
              to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
              label={label}
              description={description}
              onClick={toggleMenu}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ 
  to, 
  label, 
  description,
  onHover,
  isHovered 
}: { 
  to: string; 
  label: string;
  description: string;
  onHover: (label: string | null) => void;
  isHovered: boolean;
}) => {
  return (
    <div className="relative"
      onMouseEnter={() => onHover(label)}
      onMouseLeave={() => onHover(null)}
    >
      <Link
        to={to}
        className="text-gray-200 hover:text-white transition-colors duration-200 font-medium relative group"
      >
        {label}
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
      </Link>
      
      {isHovered && (
        <div className="absolute top-full mt-2 px-4 py-2 bg-white rounded-lg shadow-lg text-sm text-slate-700 whitespace-nowrap">
          {description}
        </div>
      )}
    </div>
  );
};

const MobileNavItem = ({
  to,
  label,
  description,
  onClick,
}: {
  to: string;
  label: string;
  description: string;
  onClick: () => void;
}) => {
  return (
    <Link
      to={to}
      className="block py-2"
      onClick={onClick}
    >
      <div className="text-gray-200 hover:text-white transition-colors duration-200">
        {label}
      </div>
      <div className="text-sm text-gray-400">{description}</div>
    </Link>
  );
};

export default Navbar;