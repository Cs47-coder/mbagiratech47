import  { useState, useEffect } from 'react';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LocationPage from './pages/LocationPage';
import 'leaflet/dist/leaflet.css';


function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    
    // Simple routing mechanism
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    // Update page title based on current route
    let pageTitle = "TechSolve - Full-Stack & ML Development";
    
    if (currentPath === "/services") {
      pageTitle = "Services | TechSolve";
    } else if (currentPath === "/about") {
      pageTitle = "About | TechSolve";
    } else if (currentPath === "/contact") {
      pageTitle = "Contact | TechSolve";
    } else if (currentPath === "/location") {
      pageTitle = "Location | TechSolve";
    }
    
    document.title = pageTitle;
  }, [currentPath]);
  
  // Add styles for animations to head
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes blob {
        0% {
          transform: translate(0px, 0px) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        100% {
          transform: translate(0px, 0px) scale(1);
        }
      }
      .animate-blob {
        animation: blob 7s infinite;
      }
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      .animation-delay-4000 {
        animation-delay: 4s;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/services':
        return <ServicePage />;
      case '/about':
        return <AboutPage />;
      case '/contact':
        return <ContactPage />;
      case '/location':
        return <LocationPage />;
      default:
        return <Home />;
    }
  };

  return renderPage();
}

export default App;