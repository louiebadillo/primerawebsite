import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";

export default function HeroFinal() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Optimized Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banff.jpg"
          alt="Pluming Eagle Lodge Hero Background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
      </div>
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex min-h-screen items-end justify-center px-4 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* <AnimatedText
            text="Pluming Eagle Lodge"
            className="!text-7xl xl:!text-6xl lg:!text-5xl md:!text-4xl sm:!text-3xl font-extrabold italic text-white mb-6"
          /> */}
          
                      <h1 className="!text-5xl xl:!text-4xl lg:!text-3xl md:!text-2xl sm:!text-xl font-extrabold italic mb-8 leading-relaxed tracking-wide animate-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg whitespace-nowrap py-2">
              Empowering the Next Generation
            </h1>

          <p className="text-xl md:text-lg sm:text-base font-medium mb-8 max-w-2xl mx-auto leading-relaxed text-white">
            Providing comprehensive child, youth, and family care services with compassion, 
            understanding, and dedication. We support families through every step of their journey, 
            creating safe spaces where children and youth can thrive and grow.
          </p>
          
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <Link
              href="/about/"
              target={"_self"}
              className={`flex items-center rounded-lg border-2 border-solid bg-white p-3 px-8 text-lg font-semibold
        capitalize text-dark hover:border-white hover:bg-transparent hover:text-white 
        transition-all duration-300 md:p-2 md:px-6 md:text-base
         `}
            >
              Learn About Us
            </Link>
            <Link
              href="/programs/"
              target={"_self"}
              className={`flex items-center rounded-lg border-2 border-solid border-white p-3 px-8 text-lg font-semibold
        capitalize text-white hover:bg-white hover:text-dark 
        transition-all duration-300 md:p-2 md:px-6 md:text-base
         `}
            >
              Our Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 