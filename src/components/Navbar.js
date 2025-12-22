import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className}  rounded relative group lg:text-light`}
    >
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300
              ${
                router.asPath === href ? "w-full" : " w-0"
              } lg:bg-light
              `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className}  rounded relative group lg:text-light`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`
              inline-block h-[1px]  bg-dark absolute left-0 -bottom-0.5 
              group-hover:w-full transition-[width] ease duration-300
              ${
                router.asPath === href ? "w-full" : " w-0"
              } lg:bg-light
              `}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header
      className="w-full flex items-center justify-between px-32 py-4 font-medium
    lg:px-16 fixed top-0 left-0 z-50 md:px-12 sm:px-8
    backdrop-blur-sm border-b border-white/20
    "
      style={{ backgroundColor: 'rgba(223, 229, 227, 0.3)' }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/pellogofinal.png"
            alt="Pluming Eagle Lodge"
            width={150}
            height={150}
            className="object-contain"
          />
        </Link>
      </div>

      <button
        type="button"
        className=" flex-col items-center justify-center hidden sm:flex lg:hidden z-9"
        aria-controls="mobile-menu"
        aria-expanded={isOpen}
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "opacity-100"
          } my-0.5`}
        ></span>
        <span
          className={`bg-dark block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="flex-1 flex justify-center items-center lg:hidden relative">
        {/* Navigation in the center */}
        <nav className="flex items-center justify-center space-x-16 -ml-20">
          <CustomLink className="text-lg font-semibold" href="/" title="Home" />
          <CustomLink className="text-lg font-semibold" href="/about" title="About" />
          <CustomLink className="text-lg font-semibold" href="/programs" title="Programs" />
          <CustomLink className="text-lg font-semibold" href="/contact" title="Contact" />
        </nav>

      </div>
    </header>
    
    {/* Mobile Menu Modal - Outside header for full screen coverage */}
    {isOpen ? (
      <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-[100] flex items-start justify-center bg-dark/90 backdrop-blur-md pt-24 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        aria-modal="true"
        role="dialog"
      >
        {/* Close button */}
        <button
          onClick={handleClick}
          aria-label="Close menu"
          className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          ✕
        </button>
        <div className="w-full max-w-4xl">
        <nav className="flex items-center justify-center flex-col space-y-8 text-white">
          <CustomMobileLink
            toggle={handleClick}
            className="text-xl font-semibold"
            href="/"
            title="Home"
          />
          <CustomMobileLink
            toggle={handleClick}
            className="text-xl font-semibold"
            href="/about"
            title="About"
          />
          <CustomMobileLink
            toggle={handleClick}
            className="text-xl font-semibold"
            href="/programs"
            title="Programs"
          />
          <CustomMobileLink
            toggle={handleClick}
            className="text-xl font-semibold"
            href="/contact"
            title="Contact"
          />
        </nav>
        </div>
      </motion.div>
    ) : null}
    </>
  );
};

export default Navbar;
