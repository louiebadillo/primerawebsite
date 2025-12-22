"use client";
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const impactItems = [
    {
      text: "Expanded to 6 holistic programs supporting Indigenous children, youth, and families from birth to adulthood"
    },
    {
      text: "Supported 100+ children and youth in culturally grounded, trauma-informed environments that promote healing and growth"
    },
    {
      text: "Partnered with Elders and communities to restore identity, belonging, and traditional wisdom"
    },
    {
      text: "Provided safe, nurturing homes that prioritize emotional healing, education, cultural connection, and independence"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="w-full py-16 relative"
      style={{
        backgroundImage: 'url(/images/sky.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Mobile background override - force light background on mobile */}
      <div 
        className="absolute inset-0 md:hidden" 
        style={{ 
          backgroundColor: 'var(--primary-bg-color) !important',
          backgroundImage: 'none !important'
        }}
      ></div>
      
      {/* Overlay for better text readability - hidden on mobile */}
      <div className="absolute inset-0 bg-black bg-opacity-40 hidden md:block"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-gray-800 md:text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          Our Impact
        </motion.h2>
        
        <motion.div
          ref={ref}
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {impactItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-6 border-l-4 border-[#87afb1] bg-white bg-opacity-90 rounded-r-lg backdrop-blur-sm"
              variants={itemVariants}
            >
              <div className="flex-shrink-0 w-2 h-2 bg-[#87afb1] rounded-full mt-3"></div>
              <p className="text-lg text-gray-800 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
