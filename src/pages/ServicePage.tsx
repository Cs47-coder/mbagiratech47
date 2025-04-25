import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Code, Server, BarChart3, Database, Layout, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from '../components/ui/Link';

const ServicePage = () => {
  const services = [
    {
      id: 'frontend',
      icon: <Code size={32} />,
      title: 'Frontend Development',
      description: 'Creating beautiful, interactive, and responsive user interfaces that provide an exceptional user experience across all devices.',
      benefits: [
        'Responsive designs that work on all devices',
        'Interactive and engaging user interfaces',
        'Fast loading and optimized performance',
        'Accessibility compliance',
        'Cross-browser compatibility'
      ],
      technologies: ['React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS', 'TypeScript']
    },
    {
      id: 'backend',
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: 'Building robust, scalable, and secure server-side applications that power your digital solutions and handle complex business logic.',
      benefits: [
        'Scalable architecture for growing applications',
        'Secure API development and implementation',
        'Database design and optimization',
        'Authentication and authorization systems',
        'Performance optimization'
      ],
      technologies: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL', 'MongoDB', 'RESTful APIs', 'GraphQL']
    },
    {
      id: 'ml',
      icon: <BarChart3 size={32} />,
      title: 'Machine Learning',
      description: 'Leveraging advanced ML techniques to extract insights from your data and build predictive models that drive business intelligence.',
      benefits: [
        'Data-driven decision making',
        'Predictive analysis and forecasting',
        'Pattern recognition in complex datasets',
        'Automation of repetitive tasks',
        'Continuous learning and improvement'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Jupyter']
    },
    {
      id: 'data',
      icon: <Database size={32} />,
      title: 'Data Engineering',
      description: 'Designing and implementing robust data pipelines and storage solutions to efficiently manage and process your organization\'s data.',
      benefits: [
        'Efficient data collection and processing',
        'Robust ETL pipeline development',
        'Data warehousing solutions',
        'Big data processing frameworks',
        'Real-time data analytics'
      ],
      technologies: ['SQL', 'NoSQL', 'ETL Processes', 'Hadoop', 'Spark', 'Kafka', 'Data Warehousing']
    },
    {
      id: 'ui',
      icon: <Layout size={32} />,
      title: 'UI/UX Design',
      description: 'Creating intuitive, user-centered designs that enhance user satisfaction by improving the usability and accessibility of digital products.',
      benefits: [
        'User-centered design approach',
        'Intuitive navigation and information architecture',
        'Consistent visual language and design systems',
        'Increased user satisfaction and engagement',
        'Reduced learning curve for new users'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'User Research', 'Wireframing', 'Prototyping', 'User Testing']
    },
    {
      id: 'consulting',
      icon: <Lightbulb size={32} />,
      title: 'Technology Consulting',
      description: 'Strategic technology planning and advice to help you navigate the complex tech landscape and make informed decisions for your business.',
      benefits: [
        'Expert guidance on technology decisions',
        'Strategic roadmap development',
        'Technology stack evaluation and selection',
        'Legacy system modernization planning',
        'Security and compliance assessments'
      ],
      technologies: ['Digital Transformation', 'Tech Stack Assessment', 'Roadmap Planning', 'Security Audits', 'Performance Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Specialized Technical Services</h1>
            <p className="text-xl text-slate-300">
              Comprehensive development and data analysis solutions to bring your ideas to life and drive your business forward
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`order-2 ${service.id === 'backend' || service.id === 'data' || service.id === 'consulting' ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">Technologies & Tools</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                        {service.technologies.map((tech, index) => (
                          <div key={index} className="px-3 py-2 bg-white rounded-lg border border-slate-200 text-slate-700 text-sm font-medium shadow-sm">
                            {tech}
                          </div>
                        ))}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4 text-slate-800">Key Benefits</h3>
                      <ul className="space-y-3">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8 pt-6 border-t border-slate-200">
                        <Link 
                          to="/contact" 
                          className="flex items-center text-blue-600 font-medium hover:text-blue-700"
                        >
                          Discuss your {service.title} project
                          <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`order-1 ${service.id === 'backend' || service.id === 'data' || service.id === 'consulting' ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="p-3 bg-blue-100 rounded-lg w-fit mb-4 text-blue-600">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-slate-800">{service.title}</h2>
                    <p className="text-lg text-slate-600 mb-6">{service.description}</p>
                    
                    <div className="prose prose-lg text-slate-600 mb-6">
                      <p>
                        My approach to {service.title.toLowerCase()} focuses on delivering high-quality, maintainable solutions 
                        that align with your business objectives. With extensive experience in this domain, I ensure that every 
                        project is approached with careful planning, attention to detail, and a commitment to excellence.
                      </p>
                      <p>
                        Whether you need a complete solution or support for a specific component of your project, 
                        I provide the expertise and guidance necessary to achieve optimal results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Let's discuss how my services can help you achieve your goals and transform your ideas into reality.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicePage;