import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function HeroFinal() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);
  
  const videos = [
    "/videos/vid1.mp4",
    "/videos/vid2.mp4",
    "/videos/vid3.mp4"
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load(); // Reload video when source changes
      video.play().catch(error => {
        // Handle autoplay restrictions
        console.log("Autoplay prevented:", error);
      });
    }
  }, [currentVideoIndex]);

  const handleVideoEnd = () => {
    // Move to next video, loop back to first after last
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
          onEnded={handleVideoEnd}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <Image
            src="/images/hero-renovation.jpg"
            alt="Renovation Hero Background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </video>
      </div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-end pb-16">
        <div className="w-full px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl ml-12 mr-auto">
            <img
              src="/images/primeralogo.png"
              alt="Primera Solutions Logo"
              className="mb-6 w-48 h-auto object-contain"
              style={{ background: 'transparent', display: 'block' }}
            />
            <h1 className="text-6xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl font-bold italic leading-tight animate-text text-[#E1AC00] drop-shadow-lg text-left mt-24 !mb-0">
              BREATHE NEW LIFE<br />
              INTO YOUR HOME
            </h1>

            <p className="text-xl md:text-lg sm:text-base font-medium mb-10 leading-relaxed text-white text-left">
              Trusted Renovation and Restoration services in Calgary and surrounding areas. 
            </p>
            
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 justify-start flex-wrap">
              <button
                onClick={() => {
                  const element = document.getElementById('homepage-overview');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`flex items-center rounded-lg border-2 border-solid bg-white p-2 px-4 sm:p-2 sm:px-6 md:p-3 md:px-8 text-sm sm:text-base md:text-lg font-semibold
        capitalize text-dark hover:border-white hover:bg-transparent hover:text-white 
        transition-all duration-300 whitespace-nowrap
         `}
              >
                I'm looking for RESTORATION
              </button>
              <Link
                href="/renovation"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid border-white p-2 px-4 sm:p-2 sm:px-6 md:p-3 md:px-8 text-sm sm:text-base md:text-lg font-semibold
        capitalize text-white hover:bg-white hover:text-dark 
        transition-all duration-300 whitespace-nowrap
         `}
              >
                I'm looking to RENOVATE
              </Link>
            </div>
            
            {/* Scroll Down Arrow */}
            <button
              onClick={() => {
                window.scrollBy({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
              className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-20 text-white hover:text-[#E1AC00] transition-colors duration-300"
              aria-label="Scroll down"
            >
              <svg
                className="w-8 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}