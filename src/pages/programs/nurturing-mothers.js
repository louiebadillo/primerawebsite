import Layout from "@/components/Layout";
import Head from "next/head";   
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import PhotoCarousel from "@/components/PhotoCarousel";
import BackgroundSection from "@/components/BackgroundSection";
import SEO from "@/components/SEO";


const NurturingMothers = () => {
  const carouselImages = [
    {
      src: "/images/programs/program20.jpg",
      alt: "Nurturing Mothers Program - Parenting Support"
    },
    {
      src: "/images/programs/program21.jpg",
      alt: "Nurturing Mothers Program - Cultural Connection"
    },
    {
      src: "/images/programs/program22.jpg",
      alt: "Nurturing Mothers Program - Life Skills"
    },
  ];

  return (
    <>
      <SEO
        title="Nurturing Mothers Program | Indigenous Young Mother Support Alberta"
        description="A culturally grounded program designed to support Indigenous young mothers in their journey toward healing, parenting, and personal growth."
        keywords="Indigenous young mother support Alberta, culturally grounded parenting programs, Indigenous mother-child programs, healing programs young mothers, parenting mentorship Indigenous"
        ogUrl="https://plumingeaglelodge.com/programs/nurturing-mothers"
        canonicalUrl="https://plumingeaglelodge.com/programs/nurturing-mothers"
      />
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <BackgroundSection attachment="fixed">
        <Layout className="pt-16">
          <AnimatedText
            text="Nurturing Mothers Program"
            className="mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8 text-center"
          />
          
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 lg:col-span-8 md:order-2">
              <h2 className="mb-4 text-center text-3xl font-bold uppercase text-white lg:text-2xl xs:text-xl">
                Young Mothers
              </h2>
              
              <p className="my-4 font-medium text-gray-100">
                The Nurturing Mothers Program is a culturally grounded initiative designed specifically to support Indigenous young mothers in their journey toward healing, parenting, and personal growth. This program recognizes the unique challenges faced by young mothers and provides comprehensive support to help them build stable, nurturing environments for themselves and their children.
              </p>
              
              <p className="my-4 font-medium text-gray-100">
                Our approach includes culturally safe parenting mentorship that honors traditional Indigenous parenting practices while incorporating modern best practices. We provide gentle routines that support security and growth for both mother and child. The program focuses on life skills development and self-care planning, recognizing that a mother's well-being is essential to her child's development.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Program Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li><strong>24/7 Supervision:</strong> Round-the-clock support and guidance</li>
                <li><strong>Culturally Safe Parenting Mentorship:</strong> Guidance that honors Indigenous traditions</li>
                <li><strong>Gentle Routines:</strong> Structured daily activities that promote security and growth</li>
                <li><strong>Life Skills Development:</strong> Practical skills for independent living</li>
                <li><strong>Self-Care Planning:</strong> Support for maternal well-being and mental health</li>
                <li><strong>Stability Building:</strong> Focus on creating lasting positive outcomes for families</li>
                <li><strong>Cultural Connection:</strong> Programs that strengthen Indigenous identity</li>
                <li><strong>Community Support:</strong> Connection to Elders and community resources</li>
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

export default NurturingMothers; 