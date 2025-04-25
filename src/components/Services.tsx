import React from 'react';
import { Code, Server, BarChart3, Database, Layout, Lightbulb, MoveRight, TrendingUp, Trophy } from 'lucide-react';
import { Link } from './ui/Link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, isHighlighted = false }) => {
  return (
    <div className={`group rounded-xl p-6 transition-all duration-300 h-full flex flex-col justify-between
      ${isHighlighted 
        ? 'bg-gradient-to-br from-blue-600 to-indigo-700 shadow-lg shadow-blue-500/20 text-white' 
        : 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-800'}`}>
      <div>
        <div className={`p-3 rounded-lg w-fit mb-4 
          ${isHighlighted 
            ? 'bg-white/20 text-white' 
            : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className={`mb-6 ${isHighlighted ? 'text-blue-100' : 'text-slate-600'}`}>{description}</p>
      </div>
      <Link 
        to="/services" 
        className={`flex items-center text-sm font-medium 
          ${isHighlighted 
            ? 'text-white hover:text-blue-100' 
            : 'text-blue-600 hover:text-blue-700'}`}
      >
        Learn more <MoveRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Expert Services in Technology</h2>
          <p className="text-lg text-slate-600">
            Comprehensive solutions for your development and data analysis needs with expertise in multiple domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard 
            icon={<Code size={24} />}
            title="Frontend Development"
            description="Beautiful, responsive web interfaces built with modern frameworks and best practices for optimal user experience."
            isHighlighted
          />
          
          <ServiceCard 
            icon={<Server size={24} />}
            title="Backend Development"
            description="Robust, scalable server solutions with secure API development and database management."
          />
          
          <ServiceCard 
            icon={<BarChart3 size={24} />}
            title="Machine Learning"
            description="Advanced data analysis and prediction models leveraging cutting-edge machine learning techniques."
          />
          
          <ServiceCard 
            icon={<Database size={24} />}
            title="Data Engineering"
            description="Comprehensive data pipeline development, ETL processes, and database optimization."
          />
          
          <ServiceCard 
            icon={<Layout size={24} />}
            title="UI/UX Design"
            description="User-centric design with focus on usability, accessibility, and delightful user experiences."
          />
          
          <ServiceCard 
            icon={<Lightbulb size={24} />}
            title="Technology Consulting"
            description="Strategic technology planning and advice to meet your business goals and technical challenges."
          />
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            <Link to="/services" className="text-white font-medium">
              View All Services
            </Link>
            <TrendingUp size={18} className="ml-2 text-white" />
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg inline-flex items-center">
            <Trophy size={20} className="text-blue-600 mr-2" />
            <span className="text-blue-800 font-medium">Top-rated services with proven success records</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;