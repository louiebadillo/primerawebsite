import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import RenovationHero from "@/components/RenovationHero";
import SEO from "@/components/SEO";

export default function Renovation() {
  return (
    <>
      <SEO
        title="Renovation Services Calgary | Primera Solutions"
        description="Expert home renovation services in Calgary. Transform your space with quality craftsmanship and professional design."
        keywords="Calgary renovation, home renovation, kitchen renovation, bathroom renovation, home remodeling Calgary"
        ogUrl="https://primerasolutions.com/renovation"
        canonicalUrl="https://primerasolutions.com/renovation"
      />

      <TransitionEffect />
      
      {/* Hero Section */}
      <RenovationHero />

      {/* Intro Copy (matches homepage text formatting) */}
      <section className="py-10 sm:py-14 md:py-16 bg-[#ede7e3]">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-700 mb-6 sm:mb-8 md:mb-10 leading-tight">
          Ever look at a room and think, “This could be so much better”?
          </h2>
          <h2 className="font-light italic text-xl sm:text-4xl md:text-5xl text-gray-700 mb-6 sm:mb-8 md:mb-10 leading-tight">
          Better flow. Better function. A space that finally matches how you live.
          </h2>
          <h2 className="font-light italic text-xl sm:text-4xl md:text-5xl text-gray-700 mb-4 sm:mb-6 md:mb-8 leading-tight">
          Primera’s renovation process turns ideas into a plan — and a plan into results.
          </h2>
          </div>
        </div>
      </section>
    </>
  );
}
