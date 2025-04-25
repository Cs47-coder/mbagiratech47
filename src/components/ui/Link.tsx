import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, children, className = '', onClick }) => {
  const isExternal = to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:') || to.startsWith('https://wa.me');
  
  const handleClick = (e: React.MouseEvent) => {
    if (!isExternal && onClick) {
      e.preventDefault();
      onClick();
      
      // Simulate SPA navigation
      window.history.pushState({}, '', to);
      
      // Scroll to section if it's an anchor link
      const targetId = to.replace(/^\//, '');
      if (targetId) {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      } else {
        window.scrollTo(0, 0);
      }
    } else if (onClick) {
      onClick();
    }
  };

  if (isExternal) {
    return (
      <a 
        href={to} 
        className={className}
        onClick={onClick}
        target={to.startsWith('http') ? "_blank" : undefined}
        rel={to.startsWith('http') ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={to} className={className} onClick={handleClick}>
      {children}
    </a>
  );
};