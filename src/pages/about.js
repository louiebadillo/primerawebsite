
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import PhotoCarousel from "@/components/PhotoCarousel";
import ValuesCards from "@/components/ValuesCards";
import ImpactSection from "@/components/ImpactSection";
import { HireMe } from "@/components/HireMe";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundSection from "@/components/BackgroundSection";
import SEO from "@/components/SEO";





export default function About() {

  const carouselImages = [
    {
      src: "/images/programs/programkinship.jpeg",
      alt: "Pluming Eagle Lodge Facility",
      caption: "Community and engagement"
    },
    {
      src: "/images/programs/program14.jpeg", 
      alt: "Youth Activities",
      caption: "Engaging activities that promote growth and development"
    },
    {
      src: "/images/programs/program10.jpeg",
      alt: "Community Support",
      caption: "Safe and comfortable environment for children and youth"
    },
    {
      src: "/images/programs/program6.jpeg",
      alt: "Community Support",
      caption: "Our programs are designed to support the needs of the community"
    },
    {
      src: "/images/programs/program11.jpeg",
      alt: "Community Support",
      caption: "We provide a safe and supportive environment for children and youth"
    }
  ];

  return (
    <>
      <SEO
        title="About Us | Pluming Eagle Lodge - Our Mission & Values"
        description="Learn about Pluming Eagle Lodge's mission to empower Indigenous children and youth through culturally grounded, trauma-informed programs since 2020."
        keywords="Indigenous youth organization, cultural identity programs, Alberta child services, community support, trauma-informed care Alberta, Indigenous child welfare"
        ogUrl="https://plumingeaglelodge.com/about"
        canonicalUrl="https://plumingeaglelodge.com/about"
      />

      <TransitionEffect />
      <SmoothScroll>
        <main
          className={`flex  w-full flex-col items-center justify-center`}
        >
          <Layout className="pt-16 sm:pt-24">
            <AnimatedText
              text="Helping Youth to Path of Independence"
              className="!text-gray-800 dark:!text-gray-800 mt-12 sm:mt-20 mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-3xl xs:!text-2xl sm:mb-8 text-center"
            />

            {/* Photo Carousel Section - Full Width */}
            <div className="w-full mb-8 sm:mb-4">
              <PhotoCarousel images={carouselImages} />
            </div>
          </Layout>

          {/* About Us Section - Full Width */}
          <div className="w-full mb-16 sm:mb-8 px-4 sm:px-2">
            <h2 className="mb-8 text-4xl font-bold uppercase text-dark/75 text-center md:text-3xl sm:text-2xl xs:text-xl">
              About Us
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl font-medium mb-6 leading-relaxed md:text-lg sm:text-base xs:text-sm">
                Founded in 2020 in Alberta, Canada, Pluming Eagle Lodge began as a dedicated non-institutional group home facility with the mission to provide a safe and supportive environment for children and youth in need. As we continued to support these young individuals, we saw their needs grow and evolve. In response, we expanded our programs to offer even greater support for their journey into adulthood.
              </p>
              <p className="text-xl font-medium leading-relaxed md:text-lg sm:text-base xs:text-sm">
                We are committed to providing necessary tools, guidance, and opportunities to empower children, youth, and families, ensuring they have the resources to lead independent, successful lives. Our growth is driven by a deep commitment to making a meaningful difference in the lives of those we serve, supporting their development, independence and connection to their communities.
              </p>
            </div>
          </div>

          {/* Full width ImpactSection right after About Us */}
          <ImpactSection />

          <Layout>
            <ValuesCards />
          </Layout>
        </main>
        <BackgroundSection>
          {/* Overlay for better text readability */}
          <div className="absolute"></div>
          <div className="outro-content relative z-10">
            <div className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-4xl text-center font-bold text-gray-700 mb-12">
              Land Acknowledgement
            </h2>
            <p className="text-2xl text-gray-700 leading-relaxed text-center">
              In the spirit of respect, reciprocity and truth, we honour and acknowledge Moh'kinsstis, and the traditional Treaty 7 territory and oral practices of the Blackfoot confederacy: Siksika, Kainai, Piikani, Stoney Nakoda Nations: Chiniki, Bearspaw, Goodstoney and Tsuut'ina Nation. We acknowledge that this territory is home to the Otipemisiwak Métis Government of the Métis Nation, Calgary Nose Hill Métis District and Calgary Elbow Métis District. Finally, we acknowledge all Nations – Indigenous and non – who live, work and play on this land, and who honour and celebrate this territory.
            </p>
          </div>
            <h2 className="text-gray-800 text-4xl font-semibold text-center mt-32 mb-16">Our Contact Information</h2>
            <div className="outro-info-section">
              <div className="map-container">
                <iframe 
                  src="https://maps.google.com/maps?q=4715+88+Ave+NE+%232205+Calgary+AB+T3J+2J2&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pluming Eagle Lodge Location"
                ></iframe>
              </div>
              
              <div className="business-info">
                <div className="info-item">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                   <span>4715 88 Ave NE #2205<br />Calgary, AB T3J 2J2</span>
                 </div>
                 
                 <div className="info-item">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09494 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55778 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.59522 1.99522 8.06574 2.16708 8.43376 2.48353C8.80178 2.79999 9.042 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97348 7.27675 9.89381 7.65319C9.81415 8.02963 9.62901 8.36836 9.35999 8.62L8.08999 9.9C9.51355 12.4136 11.5864 14.4865 14.1 15.91L15.38 14.64C15.6316 14.3709 15.9704 14.1858 16.3468 14.1061C16.7232 14.0265 17.1121 14.0554 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                   <span>(403) 807-6088</span>
                 </div>
                 
                 <div className="info-item">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                     <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                   </svg>
                   <span>info@plumingeaglelodge.com</span>
                 </div>
              </div>
            </div>
            
            <div className="outro-buttons">
              <a href="/programs" className="outro-button programs-btn">
                <span>Our Programs</span>
              </a>
              <a href="/contact" className="outro-button careers-btn">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
      </BackgroundSection>
        <HireMe />

      </SmoothScroll>
      
    </>
  );
}
