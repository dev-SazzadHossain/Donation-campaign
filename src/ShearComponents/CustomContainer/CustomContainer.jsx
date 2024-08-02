import React from "react";

const CustomContainer = ({ children }) => {
  return (
    <div className="2xl:container xl:container lg:container md:container sm:container container px-5 mx-auto">
      {children}
    </div>
  );
};

export default CustomContainer;
