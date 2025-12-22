import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <>
      <div
        className={`z-0 inline-block h-full w-full px-32 xl:px-24 lg:px-16 
        md:px-12 sm:px-8 pt-40 xl:pt-32 lg:pt-24 md:pt-20 sm:pt-16 pb-8 md:pb-6 sm:pb-4 ${className}`}
      >
        {children}
      </div>
    </>
  );
};

export default Layout;
