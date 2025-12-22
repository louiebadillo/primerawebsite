import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center"
      >
        <img
          src="/pellogo.png"
          alt="Pluming Eagle Lodge Logo"
          className="object-contain"
        />
      </MotionLink>
    </div>
  );
};

export default Logo;
