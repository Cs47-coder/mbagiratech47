
import { Link } from './ui/Link';
import {  Mail, MapPin, Phone} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-4">TechSolve</div>
            <p className="text-slate-400 mb-6">
              Expert solutions in frontend & backend development, with specialized machine learning capabilities for data analysis.
            </p>
            {/*<div className="flex space-x-4">
              <SocialLink icon={<Twitter size={18} />} href="https://twitter.com" />
              <SocialLink icon={<Linkedin size={18} />} href="https://linkedin.com" />
              <SocialLink icon={<Github size={18} />} href="https://github.com" />
              <SocialLink icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialLink icon={<Facebook size={18} />} href="https://facebook.com" />
            </div>*/}
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" label="Home" />
              <FooterLink href="/services" label="Services" />
              <FooterLink href="/about" label="About" />
              <FooterLink href="/portfolio" label="Portfolio" />
              <FooterLink href="/contact" label="Contact" />
              <FooterLink href="/location" label="Location" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <FooterLink href="/services" label="Frontend Development" />
              <FooterLink href="/services" label="Backend Development" />
              <FooterLink href="/services" label="Machine Learning" />
              <FooterLink href="/services" label="Data Analysis" />
              <FooterLink href="/services" label="UI/UX Design" />
              <FooterLink href="/services" label="Technology Consulting" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-slate-300">+255(0) 762 145 307</p>
                  <p className="text-slate-300">+255(0) 699 145 307</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <Link to="mailto:mbagiratech47@gmail.com" className="text-slate-300 hover:text-white">
                mbagiratech47@gmail.com
                </Link>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-blue-400 flex-shrink-0 mt-1" />
                <p className="text-slate-300">Mbeya-Tanzania, East Africa</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 sm:mb-0">
            &copy; {currentYear} TechSolve. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-slate-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-slate-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-slate-400 hover:text-white text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/*const SocialLink = ({ icon, href }: { icon: React.ReactNode; href: string }) => {
  return (
    <Link
      to={href}
      className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-colors duration-200"
    >
      {icon}
    </Link>
  );
};*/

const FooterLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <li>
      <Link
        to={href}
        className="text-slate-400 hover:text-white transition-colors duration-200"
      >
        {label}
      </Link>
    </li>
  );
};

export default Footer;