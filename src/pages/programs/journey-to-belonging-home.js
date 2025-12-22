import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import PhotoCarousel from "@/components/PhotoCarousel";
import BackgroundSection from "@/components/BackgroundSection";
import SEO from "@/components/SEO";

const FramerImage = motion(Image);

const JourneyToBelongingHome = () => {
  const carouselImages = [
    {
      src: "/images/programs/program8.jpeg",
      alt: "Journey to Belonging Home - Cultural Activities"
    },
    {
      src: "/images/programs/program11.jpeg",
      alt: "Journey to Belonging Home - Learning Environment"
    },
    {
      src: "/images/programs/program2.jpeg",
      alt: "Journey to Belonging Home - Community Support"
    },
    {
        src: "/images/programs/program15.jpeg",
        alt: "Journey to Belonging Home - Community Support"
    },
  ];

  return (
    <>
      <SEO
        title="Journey to Belonging Home | Indigenous Youth Program Alberta"
        description="A nurturing, culturally safe environment where Indigenous children and youth aged 5-17 receive support to heal from trauma, develop life skills, and build a strong cultural identity."
        keywords="Indigenous youth program Alberta, trauma-informed care ages 5-17, cultural identity programs, life skills training Indigenous youth, academic support Indigenous children"
        ogUrl="https://plumingeaglelodge.com/programs/journey-to-belonging-home"
        canonicalUrl="https://plumingeaglelodge.com/programs/journey-to-belonging-home"
      />
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <BackgroundSection attachment="fixed">
        <Layout className="pt-16">

          <AnimatedText
            text="Journey to Belonging Home"
            className="mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8 text-center"
          />
          
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 lg:col-span-8 md:order-2">
              <h2 className="mb-4 text-center text-3xl font-bold uppercase text-white lg:text-2xl xs:text-xl">
                Ages 5 to 17
              </h2>
              
              <p className="my-4 font-medium text-gray-100">
                Our Journey to Belonging Home program provides a comprehensive, culturally safe environment for Indigenous children and youth aged 5 to 17. This program is designed to support healing from trauma while developing essential life skills and building a strong cultural identity.
              </p>
              
              <p className="my-4 font-medium text-gray-100">
                Each child receives personalized care with individualized healing plans that address their unique needs and circumstances. The program includes academic and vocational guidance to support educational success and future career planning. Additionally, we provide life skills training and financial literacy education to prepare youth for independent living.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Program Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li><strong>24/7 Supervision:</strong> Round-the-clock care and support in a safe, nurturing environment</li>
                <li><strong>Personalized Care:</strong> Individualized healing plans tailored to each child's unique needs</li>
                <li><strong>Academic & Vocational Guidance:</strong> Support for educational success and career planning</li>
                <li><strong>Life Skills Training:</strong> Practical skills development for independent living</li>
                <li><strong>Financial Literacy:</strong> Education in money management and financial planning</li>
                <li><strong>Cultural Identity Building:</strong> Programs that strengthen connection to Indigenous heritage</li>
                <li><strong>Trauma-Informed Care:</strong> Specialized support for healing from past experiences</li>
                <li><strong>Community Connection:</strong> Opportunities to build relationships with Elders and community</li>
              </ul>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-lg border-2 border-solid border-dark bg-dark p-2.5 px-6 text-lg font-semibold capitalize text-light hover:bg-light hover:text-dark dark:border-light dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light lg:p-2 lg:px-4 lg:text-base"
                >
                  Contact Us
                </Link>
                <Link
                  href="/programs"
                  className="rounded-lg border-2 border-solid border-dark p-2.5 px-6 text-lg font-semibold capitalize text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark lg:p-2 lg:px-4 lg:text-base"
                >
                  Back to Programs
                </Link>
              </div>
            </div>

            <div className="col-span-4 xl:col-span-4 lg:col-span-8 md:order-1">
              <PhotoCarousel images={carouselImages} />
            </div>
          </div>
        </Layout>
        </BackgroundSection>
      </main>
    </>
  );
};

export default JourneyToBelongingHome; 