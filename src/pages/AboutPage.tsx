
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, BookOpen, Briefcase, Code, Cpu, Laptop, Layers, BarChart, Check, Server } from 'lucide-react';
import { Link } from '../components/ui/Link';

const AboutPage = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TailwindCSS', 'HTML/CSS', 'JavaScript/TypeScript', 'Responsive Design'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL'] },
    { category: 'Data & ML', items: ['Python (NumPy, Pandas)', 'TensorFlow', 'PyTorch', 'SQL', 'Data Visualization', 'Statistical Analysis'] },
    { category: 'Tools & Others', items: ['Git', 'Docker', 'Testing', 'Cloud Platforms (AWS, GCP)'] }
  ];

  const experience = [
    {
      position: 'Upcoming frontend and backend Developer',
      company: '',
      period: '2024 - Present',
      description: 'Leading development of enterprise web applications using cutting-edge technologies, managing cross-functional teams, and implementing machine learning solutions for data-driven features.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led the transition to a microservices architecture',
        'Implemented ML-based recommendation system increasing user engagement by 25%'
      ]
    },
    {
      position: 'Data Scientist & Backend Developer',
      company: '',
      period: '2024- Present',
      description: 'Developed data processing pipelines and predictive models while building robust backend systems to support data-intensive applications.',
      achievements: [
        'Built predictive models with 92% accuracy for financial forecasting',
        'Designed scalable data processing pipeline handling millions of records',
        'Reduced processing time by 60% through algorithm optimization'
      ]
    },
    {
      position: 'Frontend Developer',
      company: '',
      period: '2024- Present',
      description: 'Designed and implemented responsive, user-friendly interfaces for client applications across various industries.',
      achievements: [
        'Developed UI components library reducing development time by 30%',
        'Improved conversion rates by 20% through UX enhancements',
        'Successfully delivered 15+ client projects with consistent positive feedback'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-slate-300">
              A passionate technologists with expertise in frontend and backend development and machine learning
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-3 inline-block bg-blue-100 rounded-lg text-blue-600 mb-4">
                <Laptop size={28} />
              </div>
              
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Journey</h2>
              
              <div className="prose prose-lg text-slate-600 mb-6">
                <p>
                  With over 1 year of experience in software development and data science, We have built a career focused on 
                  creating innovative, high-performance applications and extracting valuable insights from complex data.
                </p>
                <p>
                  Our passion for technology started early, developing small web applications during my studies, and has 
                  evolved into a comprehensive skill set encompassing both frontend and backend development, along with 
                  specialized expertise in machine learning and data analysis.
                </p>
                <p>
                  We believe in creating solutions that are not just technically sound but also deliver genuine value to 
                  users and businesses. Every project we undertake is approached with a focus on quality, performance, 
                  and long-term maintainability.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center px-4 py-2 bg-slate-100 rounded-lg">
                  <BookOpen size={18} className="text-blue-600 mr-2" />
                  <span className="text-slate-700 font-medium">We are Students in B. in Data Science</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-slate-100 rounded-lg">
                  <Award size={18} className="text-blue-600 mr-2" />
                  <span className="text-slate-700 font-medium">Upcoming ML Engineers</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-slate-100 rounded-lg">
                  <Briefcase size={18} className="text-blue-600 mr-2" />
                  <span className="text-slate-700 font-medium">1+ Years Experience</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur-lg opacity-20"></div>
              <div className="relative p-8 bg-white border border-slate-200 rounded-xl shadow-xl">
                <h3 className="text-xl font-bold mb-6 text-slate-800">Technical Skills</h3>
                
                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <div className="flex items-center mb-3">
                        {index === 0 && <Code size={18} className="text-blue-600 mr-2" />}
                        {index === 1 && <Server size={18} className="text-blue-600 mr-2" />}
                        {index === 2 && <BarChart size={18} className="text-blue-600 mr-2" />}
                        {index === 3 && <Layers size={18} className="text-blue-600 mr-2" />}
                        <h4 className="font-semibold text-slate-800">{skillGroup.category}</h4>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center">
                            <Check size={16} className="text-green-500 mr-2" />
                            <span className="text-slate-600 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="p-3 inline-block bg-blue-100 rounded-lg text-blue-600 mb-4">
              <Cpu size={28} />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Professional Experience</h2>
            <p className="text-lg text-slate-600">
              A track record of delivering high-quality solutions across various domains
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 sm:left-1/2 transform sm:translate-x-[-50%] h-full w-0.5 bg-blue-200"></div>
              
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 sm:left-1/2 transform sm:translate-x-[-50%] w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-100"></div>
                    
                    <div className={`sm:w-1/2 pb-8 ${index % 2 === 0 ? 'ml-6 sm:ml-0 sm:pr-8' : 'ml-6 sm:ml-auto sm:pl-8'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                        <span className="inline-block px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full mb-3">
                          {job.period}
                        </span>
                        <h3 className="text-xl font-bold text-slate-800 mb-1">{job.position}</h3>
                        <p className="text-blue-600 font-medium mb-4">{job.company}</p>
                        <p className="text-slate-600 mb-4">{job.description}</p>
                        
                        <h4 className="font-semibold text-slate-800 mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-slate-600 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
            <p className="text-lg text-blue-100 mb-8">
              We always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
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

export default AboutPage;