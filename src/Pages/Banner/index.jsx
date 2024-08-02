import React from "react";
import { Button, Input } from "rsuite";
import { motion } from "framer-motion";
import "./index.css";
import CustomContainer from "../../ShearComponents/CustomContainer/CustomContainer";

const Banner = ({ search, setSearch, handleSearch }) => {
  return (
    <section>
      <div className="bannerBg pt-[242px] pb-[210px] relative">
        <div className=" absolute w-full h-full top-0 left-0 bg-white/95"></div>
        <CustomContainer>
          <motion.h3
            initial={{
              y: -500,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 100,
            }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              // staggerDirection: 3,
            }}
            className="text-black 2xl:text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-center relative z-30"
          >
            I Grow By Helping People In Need
          </motion.h3>
          <div className=" flex justify-center items-center mx-auto relative z-30 2xl:w-[400px] xl:w-[400px] lg:w-[400px]  md:w-[400px] pt-10 ">
            {" "}
            <motion.input
              initial={{
                boxShadow: "1px 2px 3px black",
              }}
              whileFocus={{
                boxShadow: "1px 2px 3px red",
              }}
              transition={{
                duration: 2,
              }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search here..."
              className=" w-full h-[50px] border-none outline-none  px-5 rounded-md text-lg"
            />
            <motion.button
              initial={{
                scale: 1,
              }}
              whileTap={{
                scale: 1.06,
              }}
              onClick={handleSearch}
              color="red"
              appearance="primary"
              className=" absolute right-0 h-[50px] px-5 border-none outline-none bg-red-500 rounded-r-md text-white font-bold text-lg"
            >
              Search
            </motion.button>
          </div>
        </CustomContainer>
      </div>
    </section>
  );
};

export default Banner;
