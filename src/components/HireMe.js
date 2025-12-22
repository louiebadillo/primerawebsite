import Link from "next/link";
import React from "react";
import Image from "next/image";
import CText from "../../public/images/CircularText2.png";

export const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-20 flex flex-col items-center justify-center md:right-8 sm:right-0 
    overflow-hidden md:bottom-auto md:left-auto md:top-0 md:absolute z-50 hidden sm:hidden md:flex"
    >
      <div className="HireMe w-full h-full flex items-center justify-center md:w-24">
        <Image
          priority={false}
          src={CText}
          alt="HireMe image"
          height={160}
          width={160}
          className={"fill-dark dark:fill-light animate-spin-slow duration-200"}
        />

        <Link
          href="/contact"
          className="flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] border border-solid
bg-dark rounded-full text-white w-20 h-20 text-[12px] font-semibold hover:bg-light hover:border-dark hover:text-dark dark:text-dark dark:bg-light dark:hover:bg-dark
dark:hover:text-light dark:hover:border-light  md:w-16 md:h-16 md:text-[10px]
"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
