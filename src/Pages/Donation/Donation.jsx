import React, { useEffect, useState } from "react";
import CustomContainer from "../../ShearComponents/CustomContainer/CustomContainer";
import { GrClose } from "react-icons/gr";
import { motion } from "framer-motion";
import { clothing, education, food, health } from "../../utils/AllImages";
import { Link } from "react-router-dom";

const Donation = () => {
  const [donation, setDonation] = useState([]);

  useEffect(() => {
    setDonation(JSON.parse(localStorage.getItem("donation")) || []);
  }, []);
  const handelDelete = (id) => {
    const updateDonation = donation?.filter((dn) => dn.id !== id);
    setDonation(updateDonation);
    localStorage.setItem("donation", JSON.stringify(updateDonation));
  };
  let delay = 0;
  return (
    <div className="pt-52">
      <CustomContainer>
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5 ">
          {donation?.length > 0 ? (
            donation?.map(
              ({
                bgColor,
                url,
                categoryBg,
                categoryText,
                title,
                id,
                category,
                name,
                email,
              }) => {
                const colorBg = { background: bgColor };
                delay = delay + 0.2;
                return (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 100,
                    }}
                    transition={{
                      delay: delay,
                      duration: 0.3,
                    }}
                    key={id}
                    style={colorBg}
                    className={` rounded-md overflow-hidden w-full  relative group duration-300 transition-all`}
                  >
                    <div onClick={() => handelDelete(id)}>
                      <GrClose
                        size="28px"
                        className=" absolute top-0 right-0 bg-black/25 opacity-0 group-hover:opacity-100 duration-300 transition-all cursor-pointer text-white hover:text-white/40 hover:bg-gray-900/35"
                      />
                    </div>
                    <img
                      src={
                        url || category === "health"
                          ? health
                          : category === "clothing"
                          ? clothing
                          : category === "education"
                          ? education
                          : category === "food"
                          ? food
                          : ""
                      }
                      alt={category}
                      className="w-full object-cover h-[200px rounded-md ]"
                    />
                    <div className="px-5 pt-5">
                      <div className="flex justify-between">
                        <span
                          style={{
                            background: categoryBg,
                            color: categoryText,
                          }}
                          className={`py-1 px-2 rounded-md text-sm capitalize inline-block`}
                        >
                          {category}
                        </span>
                        <Link
                          to={`/donation_details/${id}`}
                          style={{
                            background: categoryBg,
                            color: categoryText,
                          }}
                          className={`py-1 px-2 rounded-md text-sm capitalize inline-block text-right cursor-pointer`}
                        >
                          View Details
                        </Link>
                      </div>
                      <h4
                        style={{ color: categoryBg }}
                        className="pt-3 pb-4 text-xl font-semibold capitalize"
                      >
                        {title}
                      </h4>
                      <small
                        style={{ color: categoryBg }}
                        className="text-base font-normal capitalize"
                      >
                        {name}
                      </small>
                      <p className="text-sm tracking-wider pb-2 font-medium text-gray-300  ">
                        {email}
                      </p>
                    </div>
                  </motion.div>
                );
              }
            )
          ) : (
            <div>
              <p className="text-red-400 font-semibold">Donation Is Empty</p>
            </div>
          )}
        </div>
      </CustomContainer>
    </div>
  );
};

export default Donation;
