import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Image from "next/image";

// Simple count-up animated number
const StatNumber = ({ value, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // Detect when the number comes into view
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Run the count-up animation once when visible
  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 2200;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * value);
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [hasAnimated, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const ServiceCardsCarousel = () => {
  const serviceCards = [
    {
      id: 1,
      title: "Water Damage Restoration",
      description: "Emergency water extraction, structural drying, and moisture control after floods, burst pipes, or leaks.",
      image: "/images/restoration/waterrestoration.jpg"
    },
    {
      id: 2,
      title: "Fire & Smoke Damage",
      description: "Smoke odor removal, soot cleanup, and full fire damage restoration.",
      image: "/images/restoration/firerestoration.jpg"
    },
    {
      id: 3,
      title: "Mold Remediation",
      description: "Safe, certified mold removal and prevention to protect your health and property.",
      image: "/images/restoration/moldrestoration.jpg"
    },
    {
      id: 5,
      title: "Reconstruction & Repairs",
      description: "From drywall and flooring to full rebuilds — we restore, not just clean.",
      image: "/images/restoration/reconstructionrestoration.jpg"
    }
  ];

  return (
    <div className="mb-16 sm:mb-20 md:mb-24 py-8">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="service-cards-swiper"
      >
        {serviceCards.map((card) => (
          <SwiperSlide key={card.id} className="service-slide">
            <div className="relative w-full h-[350px] rounded-lg overflow-hidden shadow-lg">
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                
                {/* Description - Always Visible */}
                <p className="text-white text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <style jsx global>{`
        .service-cards-swiper {
          width: 100%;
          padding-top: 50px;
          padding-bottom: 80px;
        }
        .service-cards-swiper .service-slide {
          width: 70%;
          height: 350px;
          border-radius: 18px;
        }
        .service-cards-swiper .swiper-slide-shadow-left,
        .service-cards-swiper .swiper-slide-shadow-right {
          border-radius: 18px;
        }
        .service-cards-swiper .swiper-pagination-bullet {
          background: lightgray;
          opacity: 1;
        }
        .service-cards-swiper .swiper-pagination-bullet-active {
          background: #E1AC00;
        }
        @media (max-width: 768px) {
          .service-cards-swiper .service-slide {
            width: 75%;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

const HomepageOverview = () => {
  const weTakeImages = [
    "/images/restoration/20.png",
    "/images/restoration/19.png",
    "/images/restoration/18.png",
    "/images/restoration/17.png",
    "/images/restoration/16.png",
  ];

  const restorationServices = [
    {
      title: "Fire Damage Restoration",
      description: "Comprehensive fire damage restoration services. We handle smoke damage, soot removal, and structural repairs to restore your home to its pre-fire condition.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Water Damage Restoration",
      description: "Rapid response water damage restoration. We provide emergency water extraction, drying, and dehumidification to prevent mold and structural damage.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v1a1 1 0 11-2 0v-1A5 5 0 0011 9H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Mold Remediation",
      description: "Professional mold removal and remediation services. We identify, contain, and safely remove mold while preventing future growth through proper ventilation and moisture control.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Emergency Response",
      description: "24/7 emergency restoration services. Our rapid response team is available around the clock to mitigate damage and begin restoration immediately.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
          <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
        </svg>
      )
    }
  ];

  const renovationServices = [
    {
      title: "Kitchen Renovations",
      description: "Transform your kitchen with modern designs, quality materials, and expert craftsmanship. From complete remodels to cabinet refacing, we bring your vision to life.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
      )
    },
    {
      title: "Bathroom Remodeling",
      description: "Create a spa-like retreat with our bathroom renovation services. We handle everything from plumbing to tiling, ensuring beautiful and functional results.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Basement Finishing",
      description: "Maximize your living space with professional basement finishing. We create functional, comfortable spaces perfect for entertainment, work, or relaxation.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
        </svg>
      )
    },
    {
      title: "Home Additions",
      description: "Expand your home with seamless additions that match your existing architecture. We handle permits, design, and construction for a stress-free experience.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
      )
    },
    {
      title: "Flooring Installation",
      description: "Upgrade your floors with premium materials including hardwood, tile, laminate, and luxury vinyl. Expert installation for lasting beauty and durability.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      title: "Painting & Finishing",
      description: "Professional interior and exterior painting services. We use premium paints and techniques to give your home a fresh, polished look.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
        </svg>
      )
    }
  ];


  return (
    <section id="homepage-overview" className="py-12 sm:py-16 md:py-20 bg-[#ede7e3]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Main Heading Section */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-700 mb-6 sm:mb-8 md:mb-10 leading-tight">
          Have you ever stepped into a home and felt the relief of “we’re okay now”
          </h2>
          <h2 className="font-light italic text-xl sm:text-4xl md:text-5xl text-gray-700 mb-6 sm:mb-8 md:mb-10 leading-tight">
          That feeling isn’t luck — it’s the result of the right team, the right plan, and craftsmanship that shows.          
          </h2>
          <h2 className="font-light italic text-xl sm:text-4xl md:text-5xl text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-tight">
            At Primera, we restore what was lost and renovate what’s next.
          </h2>

          {/* Animated Stats */}
          <motion.div
            className="mt-16 mb-8 sm:mb-10 grid grid-cols-3 gap-6 sm:gap-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Stat 1 */}
            <div className="flex flex-col items-center sm:items-start px-4 sm:px-6 py-4 sm:py-5">
              <motion.div
                className="text-5xl sm:text-5xl md:text-6xl font-regular text-gray-700 tracking-tight"
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <StatNumber value={24} suffix="/ 7" />
              </motion.div>
              <motion.h2
                className="mt-2 text-xl italic sm:text-base font-medium text-gray-800"
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                Emergency Response
              </motion.h2>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center sm:items-start px-4 sm:px-6 py-4 sm:py-5">
              <motion.div
                className="text-5xl sm:text-5xl md:text-6xl font-regular text-gray-700 tracking-tight"
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <StatNumber value={100} suffix="+" />
              </motion.div>
              <motion.h2
                className="mt-2 text-xl italic sm:text-base font-medium text-gray-800"
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                Calgary Projects
              </motion.h2>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center sm:items-start px-4 sm:px-6 py-4 sm:py-5">
              <motion.div
                className="text-5xl sm:text-5xl md:text-6xl font-regular text-gray-700 tracking-tight"
                initial={{ y: 60 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <StatNumber value={5} suffix="★" />
              </motion.div>
              <motion.h2
                className="mt-2 text-xl italic sm:text-base font-medium text-gray-800"
                initial={{ y: 40 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              >
                Client-Rated Service
              </motion.h2>
            </div>
          </motion.div>

          <p className="text-lg sm:text-xl font-medium md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed px-4 sm:px-6">
          From emergency response to full rebuild, our team of certified restoration specialists will take care of you and your property quickly and efficiently - so you can get back to normal in no time.
          </p>
        </motion.div>

        {/* “We Take It From Here” – What That Means */}
        <section
          className="relative mb-10 sm:mb-12 overflow-hidden w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[60vh] bg-[url('/images/restoration/renovatehero.jpg')] bg-cover bg-center bg-fixed"
        >
          {/* Darken + soften so text isn't distracting */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/30 to-black/10" />

          {/* Text left, cards right */}
          <div className="relative z-10 px-4 sm:px-6 py-10 sm:py-16">
            <div className="max-w-7xl mx-auto flex flex-row items-start md:items-stretch justify-between gap-8 lg:gap-14">
              {/* Left text column */}
              <div className="w-1/2 lg:w-2/5 text-white pr-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-tight">
                  When disaster hits, you don’t have to figure it out alone.
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-100/90 leading-relaxed">
                  We coordinate emergency response, mitigation, and full rebuild so you can focus on your family, business, and what comes next.
                  Clear timelines, consistent updates, and one dedicated team from first call to final walkthrough.
                </p>
              </div>

              {/* Right cards grid */}
              <div className="w-1/2 lg:w-3/5">
                <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                  {weTakeImages.map((src, index) => (
                    <div
                      key={src}
                      className="relative"
                    >
                      <div className="relative w-full h-full min-h-[220px] sm:min-h-[260px] md:min-h-[320px] lg:min-h-[360px]">
                        <Image
                          src={src}
                          alt={`We Take It From Here card ${index + 1}`}
                          fill
                          className="object-contain object-center"
                          sizes="(max-width: 768px) 50vw, 240px"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance Peace-of-Mind Section */}
        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Insurance Claims Made Simple
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Dealing with insurance can be one of the most stressful parts of property damage. We help simplify the process by working directly with your insurance provider, documenting damage, and ensuring nothing is missed.
          </p>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            You don’t have to chase adjusters or translate restoration jargon —{" "}
            <span className="font-semibold">we take it from here.</span>
          </p>
        </motion.div>

        {/* Service Cards Carousel */}
        <ServiceCardsCarousel />


        {/* Call to Action Section */}
        <motion.div 
          className="text-center pt-6 sm:pt-8 border-t border-gray-300"
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            Ready to start your renovation project?
          </p>
          <motion.a 
            href="/contact" 
            className="inline-block bg-[#E1AC00] hover:bg-[#c99a00] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-base sm:text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomepageOverview;
