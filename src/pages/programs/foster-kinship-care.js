import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import PhotoCarousel from "@/components/PhotoCarousel";
import BackgroundSection from "@/components/BackgroundSection";
import SEO from "@/components/SEO";



const FosterKinshipCare = () => {
  const carouselImages = [
    {
      src: "/images/programs/program2hero.jpeg",
      alt: "Foster/Kinship Care Program - Family Connection"
    },
    {
      src: "/images/programs/programkinship.jpeg",
      alt: "Foster/Kinship Care Program - Cultural Support"
    },
    {
      src: "/images/programs/program20.jpg",
      alt: "Foster/Kinship Care Program - Community Integration"
    }
  ];

  return (
    <>
      <SEO
        title="Foster/Kinship Care Program | Indigenous Foster Care Alberta"
        description="A culturally safe foster care model that nurtures emotional well-being, strengthens identity, supports education, cultural connection, and ensures lasting stability."
        keywords="Indigenous foster care Alberta, culturally safe foster care, kinship care programs, Indigenous family placement, cultural awareness foster parents"
        ogUrl="https://plumingeaglelodge.com/programs/foster-kinship-care"
        canonicalUrl="https://plumingeaglelodge.com/programs/foster-kinship-care"
      />
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <BackgroundSection attachment="fixed">
        <Layout className="pt-16">
          <AnimatedText
            text="Foster/Kinship Care Program"
            className="mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8 text-center"
          />
          
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 lg:col-span-8 md:order-2">
              <div className="mb-4 inline-block rounded-lg bg-red-600 px-4 py-2 text-white">
                Coming Soon
              </div>
              
              <h2 className="mb-4 text-center text-3xl font-bold uppercase text-white lg:text-2xl xs:text-xl">
                Culturally Safe Foster Care
              </h2>
              
              <p className="my-4 font-medium text-gray-100">
                Our Foster/Kinship Care Program represents an innovative approach to culturally safe foster care that prioritizes emotional well-being, identity strengthening, and cultural connection. This program will place children with culturally aware families who understand and respect Indigenous traditions and values.
              </p>
              
              <p className="my-4 font-medium text-gray-100">
                We will provide ongoing cultural awareness training for foster parents to ensure they can effectively support the cultural needs of the children in their care. The program will facilitate access to Elders, community events, and cultural activities to maintain and strengthen cultural identity. Additionally, we will offer culturally guided reunification planning that respects traditional family structures and community relationships.
              </p>

              <h3 className="text-2xl font-bold mt-8 mb-4">Program Features</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-100">
                <li><strong>Culturally Aware Families:</strong> Placement with families who understand Indigenous traditions</li>
                <li><strong>Cultural Awareness Training:</strong> Ongoing education for foster parents</li>
                <li><strong>Elder Access:</strong> Connection to community Elders and cultural activities</li>
                <li><strong>Cultural Reunification Planning:</strong> Respect for traditional family structures</li>
                <li><strong>Emotional Well-being Support:</strong> Focus on mental health and healing</li>
                <li><strong>Identity Strengthening:</strong> Programs that maintain cultural heritage</li>
                <li><strong>Educational Support:</strong> Academic assistance and cultural learning</li>
                <li><strong>Community Connection:</strong> Integration with Indigenous community resources</li>
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

export default FosterKinshipCare; 