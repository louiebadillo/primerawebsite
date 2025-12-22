import { HireMe } from "@/components/HireMe";
import BackgroundSection from "@/components/BackgroundSection";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import HeroFinal from "@/components/HeroFinal";
import ProgramsOverview from "@/components/ProgramsOverview";
import TestimonialSlider from "@/components/TestimonialSlider";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Pluming Eagle Lodge | Indigenous Child & Youth Care Services Alberta"
        description="Culturally safe, trauma-informed care for Indigenous children, youth, and families in Alberta. Programs include group homes, early care, foster care, and support services."
        keywords="Indigenous child care Alberta, youth services Calgary, trauma-informed care, cultural support programs, foster care Indigenous youth, Calgary child services, group home programs, early childhood care"
        ogUrl="https://plumingeaglelodge.com"
        canonicalUrl="https://plumingeaglelodge.com"
      />

      <TransitionEffect />
            
      {/* Hero Section */}
      <HeroFinal />
      
      {/* Programs Overview Section */}
      <ProgramsOverview />
      
      {/* Testimonial Slider Section */}
      <TestimonialSlider />
      
      {/* Homepage CTA above footer */}
      <BackgroundSection>
        <div className="container mx-auto px-4 text-center">
          {/* Land Acknowledgement */}
          <div className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Land Acknowledgement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In the spirit of respect, reciprocity and truth, we honour and acknowledge Moh'kinsstis, and the traditional Treaty 7 territory and oral practices of the Blackfoot confederacy: Siksika, Kainai, Piikani, Stoney Nakoda Nations: Chiniki, Bearspaw, Goodstoney and Tsuut'ina Nation. We acknowledge that this territory is home to the Otipemisiwak Métis Government of the Métis Nation, Calgary Nose Hill Métis District and Calgary Elbow Métis District. Finally, we acknowledge all Nations – Indigenous and non – who live, work and play on this land, and who honour and celebrate this territory.
            </p>
          </div>

          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Join us in our mission to support children, youth, and families. 
            Together, we can create lasting positive change in our communities.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href="/programs" 
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Our Programs
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </BackgroundSection>

      <HireMe />
    </>
  );
}
