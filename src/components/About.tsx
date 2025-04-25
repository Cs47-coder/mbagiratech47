import React from 'react';
import { Link } from './ui/Link';
import { Award, Code, Database, Monitor, Server, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              Transforming Ideas Into <span className="text-blue-600">Technical Solutions</span>
            </h2>
            
            <p className="text-slate-600 mb-6 text-lg">
              As dedicated tech professionals specializing in frontend and backend development and machine learning, 
              We bring a comprehensive skill set to solve complex technical challenges. With expertise in both 
              frontend and backend development, as well as advanced data analysis techniques, We help businesses 
              achieve their digital transformation goals.
            </p>
            
            <div className="mb-8 space-y-4">
              <ValueProposition 
                icon={<Code size={20} />}
                title="End-to-End Development"
                description="From concept to deployment, I handle all aspects of the development lifecycle."
              />
              <ValueProposition 
                icon={<Database size={20} />}
                title="Data-Driven Solutions"
                description="Leveraging ML and analytics to extract valuable insights from your data."
              />
              <ValueProposition 
                icon={<Users size={20} />}
                title="Client-Focused Approach"
                description="Your goals and requirements drive every step of the development process."
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/about" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Learn More
              </Link>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-md transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-20"></div>
            <div className="relative bg-white border border-slate-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-slate-800">Technical Expertise</h3>
              
              <div className="grid gap-5">
                <ExpertiseBar label="Frontend Development" percentage={95} />
                <ExpertiseBar label="Backend Development" percentage={90} />
                <ExpertiseBar label="Machine Learning" percentage={85} />
                <ExpertiseBar label="Data Analysis" percentage={92} />
                <ExpertiseBar label="Database Management" percentage={88} />
              </div>
              
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <TechBadge icon={<Monitor />} label="React.js" />
                <TechBadge icon={<Server />} label="Node.js" />
                <TechBadge icon={<Database />} label="SQL/NoSQL" />
                <TechBadge icon={<Shield />} label="Security" />
                <TechBadge icon={<Award />} label="Best Practices" />
              </div>
              
              <div className="mt-8 text-sm text-slate-500 flex items-center justify-center border-t border-slate-200 pt-6">
                <span>Always learning and improving to deliver the best solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ValueProposition = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="p-2 bg-blue-100 rounded-lg text-blue-600 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-slate-800">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </div>
    </div>
  );
};

const ExpertiseBar = ({ label, percentage }: { label: string; percentage: number }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-sm font-medium text-slate-700">{percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const TechBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  return (
    <div className="flex items-center px-3 py-2 rounded-md bg-slate-100 text-slate-700">
      <span className="mr-2 text-blue-600">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};

export default About;