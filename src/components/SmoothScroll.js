"use client";
import { useEffect } from 'react';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const initSmoothScroll = async () => {
      try {
        const Lenis = (await import('lenis')).default;
        const gsap = (await import('gsap')).default;
        const { ScrollTrigger } = await import('gsap/all');

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Initialize Lenis
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          direction: 'vertical',
          gestureDirection: 'vertical',
          smooth: true,
          mouseMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2,
          infinite: false,
        });

        // Integrate Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
          lenis.destroy();
          gsap.ticker.remove(lenis.raf);
        };
      } catch (error) {
        console.error('Error loading smooth scroll:', error);
      }
    };

    initSmoothScroll();
  }, []);

  return <>{children}</>;
};

export default SmoothScroll; 