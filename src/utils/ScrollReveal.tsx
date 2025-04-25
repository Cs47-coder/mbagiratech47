import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: string;
  origin?: 'top' | 'right' | 'bottom' | 'left';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 700,
  distance = '30px',
  origin = 'bottom',
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    // Initial state
    element.style.opacity = '0';
    element.style.transform = getTransform(origin, distance);
    element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
    element.style.transitionDelay = `${delay}ms`;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translate3d(0, 0, 0)';
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, duration, distance, origin]);
  
  const getTransform = (origin: string, distance: string) => {
    switch (origin) {
      case 'top':
        return `translate3d(0, -${distance}, 0)`;
      case 'right':
        return `translate3d(${distance}, 0, 0)`;
      case 'bottom':
        return `translate3d(0, ${distance}, 0)`;
      case 'left':
        return `translate3d(-${distance}, 0, 0)`;
      default:
        return `translate3d(0, ${distance}, 0)`;
    }
  };
  
  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;