import React from 'react';
import { useRouter } from 'next/router';

const BackgroundSection = ({ children, className = "", attachment = 'local', image = '/pelbackground.jpg' }) => {
  const router = useRouter();
  const isContactPage = router.pathname === '/contact';
  const isHomePage = router.pathname === '/';
  // Check if there's any content to display
  const hasContent = React.Children.count(children) > 0;
  
  return (
    <section 
      className={`relative ${isContactPage ? 'py-0 min-h-[600px]' : hasContent ? 'py-16 min-h-[600px]' : 'py-0 min-h-screen'} ${className}`}
      style={{
        background: isContactPage 
          ? `url(${image}) center center/cover no-repeat`
          : hasContent 
            ? `
              linear-gradient(to bottom, 
                var(--primary-bg-color) 0%, 
                var(--primary-bg-color) 10%, 
                transparent 30%, 
                transparent 100%
              ),
              url(${image}) bottom center/cover no-repeat
            `
            : `url(${image}) center center/cover no-repeat`,
        backgroundAttachment: attachment
      }}
    >
      {/* Gradient overlay for seamless transition - skip for contact page */}
      {!isContactPage && (
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(to bottom, 
                transparent 0%, 
                transparent 60%, 
                rgba(0,0,0,0.3) 100%
              )
            `
          }}
        ></div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default BackgroundSection;
