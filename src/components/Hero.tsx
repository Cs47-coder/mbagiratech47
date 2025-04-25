import React from 'react';
import { Link } from './ui/Link';
import { Code, Database, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
        <div className="absolute h-56 w-56 top-1/4 left-1/4 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute h-56 w-56 top-1/3 right-1/4 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute h-56 w-56 bottom-1/4 right-1/3 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Transforming Ideas Into</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Digital Reality
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              Expert solutions in frontend & backend development, with specialized machine learning capabilities for data analysis.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/services" 
                className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors duration-200"
              >
                Explore Services
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 rounded-md bg-transparent border border-white hover:bg-white/10 text-white font-medium transition-colors duration-200"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl grid grid-cols-2 gap-4 backdrop-blur-sm">
                <ServiceIndicator 
                  icon={<Code size={28} />}
                  title="Frontend"
                  description="Beautiful, responsive interfaces"
                />
                <ServiceIndicator 
                  icon={<Database size={28} />}
                  title="Backend"
                  description="Robust, scalable systems"
                />
                <ServiceIndicator 
                  icon={<LineChart size={28} />}
                  title="ML & Data"
                  description="Intelligent data solutions"
                />
                <div className="col-span-2 mt-2 pt-4 border-t border-slate-700">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-500 text-sm">Available for new projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceIndicator = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="p-2 bg-blue-600/20 rounded-lg text-blue-500">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default Hero;