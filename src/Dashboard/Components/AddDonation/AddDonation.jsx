import React from "react";
import { motion } from "framer-motion";
import Form from "./Form/Form";

const AddDonation = () => {
  return (
    <div className="px-5">
      <motion.h2
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 100,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          duration: 0.3,
        }}
        className=" text-center py-2 border-b-[1px] border-gray-400/30 text-lg uppercase text-red-500 font-semibold"
      >
        Add Donation
      </motion.h2>
      <Form />
    </div>
  );
};

export default AddDonation;
