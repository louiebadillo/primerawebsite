import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function RenovationHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    "/images/renovation/renovationhero2.jpg",
    "/images/renovation/renovationhero4.jpg",
    "/images/renovation/renovationhero5.jpg",
    "/images/renovation/renovationhero6.jpg",
    "/images/renovation/renovationhero7.jpg",
    "/images/renovation/renovationhero8.jpg",
    "/images/renovation/renovationhero9.jpg",
    "/images/renovation/renovationhero10.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Split Background Images */}
      <div className="absolute inset-0 z-0 flex">
        {/* Left half - Auto carousel (full width on mobile, half on desktop) */}
        <div className="relative w-1/2 h-full">
          {carouselImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`Renovation Hero ${index + 1}`}
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={90}
            />
          ))}
        </div>
        {/* Right half - renovationhero1 (hidden on mobile, visible on desktop) */}
        <div className="relative md:block sm:block w-1/2 h-full">
          <Image
            src="/images/renovation/renovationhero1.jpg"
            alt="Renovation Hero Right"
            fill
            priority
            className="object-cover"
            sizes="50vw"
            quality={90}
          />
        </div>
      </div>
      
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex items-center justify-end px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Container for positioning */}
        <div className="relative w-full max-w-6xl">
          {/* Horizontal Layout: Text and button on the right */}
          <div className="flex flex-row justify-end">
            {/* Text and button on the right */}
            <div className="max-w-xl flex flex-col gap-4 md:gap-6 mr-4 sm:mr-8 md:mr-12 lg:mr-20 xl:mr-32">
            <h1 className="text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl font-bold italic leading-tight animate-text text-[#E1AC00] drop-shadow-lg text-left !mb-0 justify-end pt-0">
              BREATHE NEW LIFE<br />
              INTO YOUR HOME
            </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed text-right drop-shadow-lg">
                Transform your Calgary home<br />
                with expert renovation services that bring your vision to life.
              </p>
              
              {/* Button */}
              <div className="flex justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-lg bg-[#E1AC00] hover:bg-[#c99a00] text-white font-semibold py-3 px-8 text-base sm:text-lg transition-colors duration-300"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
