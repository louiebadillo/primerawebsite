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

const EarlyCareHaven = () => {
  const carouselImages = [
    {
      src: "/images/programs/program16.jpg",
      alt: "Early Care Haven - Safe Environment"
    },
    {
      src: "/images/programs/program17.jpg",
      alt: "Early Care Haven - Early Development"
    },
    {
      src: "/images/programs/program18.jpg",
      alt: "Early Care Haven - Family Support"
    },
    {
      src: "/images/programs/program19.jpg",
      alt: "Early Care Haven - Family Support"
    }
  ];

  return (
    <>
      <SEO
        title="Early Care Haven | Indigenous Early Childhood Program Alberta"
        description="Providing a safe and supportive emergency home environment for our youngest children aged 0-6, with emphasis on early development, attachment, and family reintegration."
        keywords="Indigenous early childhood care Alberta, emergency home ages 0-6, early development programs, family reintegration support, attachment-based care Indigenous children"
        ogUrl="https://plumingeaglelodge.com/programs/early-care-haven"
        canonicalUrl="https://plumingeaglelodge.com/programs/early-care-haven"
      />
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <BackgroundSection attachment="fixed">
        <Layout className="pt-16">
          <AnimatedText
            text="Early Care Haven"
            className="mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8 text-center"
          />
          
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 lg:col-span-8 md:order-2">
              <h2 className="mb-4 text-center text-3xl font-bold uppercase text-white lg:text-2xl xs:text-xl">
                Ages 0 to 6
              </h2>
              
              <p className="my-4 font-medium text-gray-100">
                Early Care Haven is our specialized program for children aged 0 to 6, providing a safe and supportive emergency home environment. This program places a strong emphasis on early development, attachment, and health and wellness services.
              </p>
              
              <p className="my-4 font-medium text-gray-100">
                We understand the critical importance of early childhood development and work to support family reintegration whenever possible. Our approach includes facilitating access to early developmental assessments to ensure each child's needs are properly identified and addressed. We maintain gentle routines that support security and growth, creating a stable environment for our youngest children.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Program Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li><strong>24/7 Supervision:</strong> Continuous care and monitoring in a safe environment</li>
                <li><strong>Early Developmental Assessments:</strong> Access to professional evaluations and support</li>
                <li><strong>Gentle Routines:</strong> Structured daily activities that promote security and growth</li>
                <li><strong>Family Visits:</strong> Safe, supervised visits to preserve family bonds</li>
                <li><strong>Health & Wellness Services:</strong> Comprehensive health monitoring and care</li>
                <li><strong>Attachment Support:</strong> Programs that strengthen emotional bonds</li>
                <li><strong>Family Reintegration:</strong> Support for reunification with biological families</li>
                <li><strong>Cultural Connection:</strong> Early introduction to Indigenous traditions and values</li>
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

export default EarlyCareHaven; 