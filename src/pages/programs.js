import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import BackgroundSection from "@/components/BackgroundSection";
import SEO from "@/components/SEO";

const FramerImage = motion(Image);

const Programs = () => {
  const programs = [
    {
      title: "Journey to Belonging Home",
      ageRange: "Ages 5 to 17",
      summary: "A nurturing, culturally safe environment where Indigenous children and youth receive support to heal from trauma, develop life skills, and build a strong cultural identity.",
      keyPoints: [
        "24/7 supervision",
        "Personalized care and individualized healing plans",
        "Academic and vocational guidance",
        "Life skills training and financial literacy"
      ],
      fullDescription: "Our Journey to Belonging Home program provides a comprehensive, culturally safe environment for Indigenous children and youth aged 5 to 17. This program is designed to support healing from trauma while developing essential life skills and building a strong cultural identity. Each child receives personalized care with individualized healing plans that address their unique needs and circumstances. The program includes academic and vocational guidance to support educational success and future career planning. Additionally, we provide life skills training and financial literacy education to prepare youth for independent living.",
      image: "/images/programs/program11.jpeg",
      slug: "journey-to-belonging-home"
    },
    {
      title: "Early Care Haven",
      ageRange: "Ages 0 to 6",
      summary: "Providing a safe and supportive emergency home environment for our youngest children, with a strong emphasis on early development, attachment, health and wellness services, and support for family reintegration.",
      keyPoints: [
        "24/7 supervision",
        "Facilitates access to early developmental assessments",
        "Gentle routines that support security and growth",
        "Safe, supervised visits with biological family to preserve family bonds"
      ],
      fullDescription: "Early Care Haven is our specialized program for children aged 0 to 6, providing a safe and supportive emergency home environment. This program places a strong emphasis on early development, attachment, and health and wellness services. We understand the critical importance of early childhood development and work to support family reintegration whenever possible. Our approach includes facilitating access to early developmental assessments to ensure each child's needs are properly identified and addressed. We maintain gentle routines that support security and growth, creating a stable environment for our youngest children. The program also includes safe, supervised visits with biological family to preserve important family bonds and support reunification goals.",
      image: "/images/programs/program2hero.jpeg",
      slug: "early-care-haven"
    },
    {
      title: "Nurturing Mothers Program",
      ageRange: "Young Mothers",
      summary: "A culturally grounded program designed to support Indigenous young mothers in their journey toward healing, parenting, and personal growth.",
      keyPoints: [
        "24/7 supervision",
        "Culturally safe parenting mentorship",
        "Gentle routines that support security and growth",
        "Life skills development and self-care planning",
        "Focus on rebuilding stability for mother and child"
      ],
      fullDescription: "The Nurturing Mothers Program is a culturally grounded initiative designed specifically to support Indigenous young mothers in their journey toward healing, parenting, and personal growth. This program recognizes the unique challenges faced by young mothers and provides comprehensive support to help them build stable, nurturing environments for themselves and their children. Our approach includes culturally safe parenting mentorship that honors traditional Indigenous parenting practices while incorporating modern best practices. We provide gentle routines that support security and growth for both mother and child. The program focuses on life skills development and self-care planning, recognizing that a mother's well-being is essential to her child's development. Our ultimate goal is to help rebuild stability for both mother and child, creating lasting positive outcomes for families.",
      image: "/images/programs/program2.jpeg",
      slug: "nurturing-mothers"
    },
    {
      title: "Foster/Kinship Care Program",
      ageRange: "Coming Soon",
      summary: "A culturally safe foster care model that nurtures emotional well-being, strengthens identity, supports education, cultural connection, and ensures lasting stability.",
      keyPoints: [
        "Placement with culturally aware families",
        "Ongoing cultural awareness training for foster parents",
        "Access to Elders, community, and cultural activities",
        "Culturally guided reunification planning"
      ],
      fullDescription: "Our Foster/Kinship Care Program (Coming Soon) represents an innovative approach to culturally safe foster care that prioritizes emotional well-being, identity strengthening, and cultural connection. This program will place children with culturally aware families who understand and respect Indigenous traditions and values. We will provide ongoing cultural awareness training for foster parents to ensure they can effectively support the cultural needs of the children in their care. The program will facilitate access to Elders, community events, and cultural activities to maintain and strengthen cultural identity. Additionally, we will offer culturally guided reunification planning that respects traditional family structures and community relationships. This program aims to ensure lasting stability while preserving and celebrating cultural heritage.",
      image: "/images/programs/programkinship.jpeg",
      slug: "foster-kinship-care",
      comingSoon: true
    }
  ];

  return (
    <>
      <SEO
        title="Our Programs | Pluming Eagle Lodge - Culturally Safe Care"
        description="Explore our comprehensive programs: Journey to Belonging Home, Early Care Haven, Nurturing Mothers, and Foster/Kinship Care. Supporting Indigenous families in Alberta."
        keywords="Indigenous programs Alberta, youth group home, early childhood care, foster care programs, cultural support services, trauma-informed care programs, Indigenous youth services Calgary"
        ogUrl="https://plumingeaglelodge.com/programs"
        canonicalUrl="https://plumingeaglelodge.com/programs"
      />
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center dark:text-light">
        <BackgroundSection attachment="fixed">
          <div className="pt-16 sm:pt-32 px-8 md:px-12 lg:px-16 xl:px-24 w-full">
            <AnimatedText
              text="Explore Our Programs"
              className="!text-gray-800 dark:!text-gray-800 mt-12 mb-16 !text-6xl !leading-tight lg:!text-5xl sm:!text-3xl xs:!text-3xl sm:mb-16 text-center"
            />
            
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                {programs.map((program, index) => {
                  const badge = program.comingSoon ? "Coming Soon" : program.ageRange || "";
                  return (
                    <article key={index} className="relative bg-white dark:bg-dark rounded-xl flex flex-col">
                      {/* Image */}
                      <div className="relative h-56 w-full rounded-lg overflow-visible">
                        <FramerImage
                          src={program.image}
                          alt={program.title}
                          className="w-full h-full object-cover"
                          width={800}
                          height={450}
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        {/* Protruding bubble badge */}
                        {badge && (
                          <div className="absolute -top-3 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                            {badge}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{program.title}</h3>
                        <div id={`program-details-${index}`} className="mt-4 border-t border-gray-200 dark:border-white/10 pt-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">{program.summary}</p>
                          <h4 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">Key Features</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {program.keyPoints.map((point, pointIndex) => (
                              <li key={pointIndex} className="text-sm text-gray-700 dark:text-gray-300">{point}</li>
                            ))}
                          </ul>
                          <div className="mt-4 flex items-center gap-3">
                            <Link href={`/programs/${program.slug}`} className="px-4 py-2 rounded-md bg-[#0d2834] text-white text-sm font-semibold hover:opacity-90">Learn More</Link>
                            <Link href="/contact" className="px-4 py-2 rounded-md border border-[#0d2834] text-[#0d2834] text-sm font-semibold hover:bg-[#0d2834] hover:text-white transition">Contact Us</Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </BackgroundSection>
      </main>
    </>
  );
};

export default Programs; 