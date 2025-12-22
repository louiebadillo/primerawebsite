import React from "react";

const FloatingLogo = () => {
  return (
    <div className="absolute -top-20 left-32 z-10 xl:left-24 lg:left-16 md:left-1/2 md:-translate-x-1/2 md:top-8 sm:left-1/2 sm:-translate-x-1/2 sm:top-1 xs:top-0">
              <img
          src="/pelologowhite.png"
          alt="Pluming Eagle Lodge"
          className="w-64 h-64 object-contain xl:w-56 xl:h-56 lg:w-48 lg:h-48 md:w-40 md:h-40 sm:w-32 sm:h-32 xs:w-28 xs:h-28"
        />
    </div>
  );
};

export default FloatingLogo; 