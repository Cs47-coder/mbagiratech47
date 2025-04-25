import React, { useState } from 'react';
import { Link } from './ui/Link';
import { ExternalLink, Github, Monitor } from 'lucide-react';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  demoUrl: string;
  description: string;
  tags: string[];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  category,
  image,
  demoUrl,
  description,
  tags,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-xl">
      <div className="aspect-video bg-slate-200 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-600 text-white mb-2 inline-block">
            {category}
          </span>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-white/10 rounded-full text-gray-200">
                {tag}
              </span>
            ))}
          </div>
          
          <Link
            to={demoUrl}
            className="inline-flex items-center py-2 px-4 bg-white text-slate-900 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors duration-200"
          >
            <Monitor size={16} className="mr-2" />
            View Demo
          </Link>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ml', label: 'ML & Data' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  const portfolioItems: PortfolioItemProps[] = [
    {
      title: 'E-Commerce Platform',
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: 'https://example.com',
      description: 'A complete e-commerce solution with product management and payment processing',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      title: 'Data Dashboard',
      category: 'frontend',
      image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: 'https://example.com',
      description: 'Interactive data visualization dashboard with real-time updates',
      tags: ['React', 'D3.js', 'Tailwind CSS'],
    },
    {
      title: 'Predictive Analysis Tool',
      category: 'ml',
      image: 'https://images.pexels.com/photos/6612388/pexels-photo-6612388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: 'https://example.com',
      description: 'Machine learning model for predictive analysis of financial data',
      tags: ['Python', 'TensorFlow', 'Pandas', 'Visualization'],
    },
    {
      title: 'API Management System',
      category: 'backend',
      image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: 'https://example.com',
      description: 'Robust API management system with authentication and rate limiting',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    },
    {
      title: 'Social Media Platform',
      category: 'fullstack',
      image: 'https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: 'https://example.com',
      description: 'Feature-rich social media platform with real-time messaging',
      tags: ['React', 'Firebase', 'WebSockets', 'Redux'],
    },
    {
      title: 'Customer Segmentation',
      category: 'ml',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      demoUrl: 'https://example.com',
      description: 'ML-based customer segmentation and behavior analysis tool',
      tags: ['Python', 'scikit-learn', 'Matplotlib', 'Clustering'],
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600">
            Explore a selection of successful projects that showcase my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center">
            <p className="text-slate-600 mb-4">
              Looking for more examples of my work?
            </p>
            <div className="flex gap-4">
              <Link
                to="https://github.com/Cs47-coder"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-md transition-colors flex items-center"
              >
                <Github size={18} className="mr-2" />
                GitHub Repositories
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-md transition-colors flex items-center"
              >
                <ExternalLink size={18} className="mr-2" />
                Request More Examples
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;