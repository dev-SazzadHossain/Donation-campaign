import React from "react";

const CustomButton = ({ children, className, type, onClick, ...props }) => {
  return (
    <button
      type={type || "button"}
      {...props}
      onClick={onClick}
      className={`${className}  px-5 py-2 bg-red-500 rounded-md text-white text-lg font-bold text-center `}
    >
      {children}
    </button>
  );
};

export default CustomButton;
