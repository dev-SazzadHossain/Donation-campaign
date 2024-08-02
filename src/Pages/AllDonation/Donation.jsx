import React from "react";
import { GrClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { clothing, education, food, health } from "../../utils/AllImages";

const Donation = ({ donation = {}, delay }) => {
  const { id, title, category, url, bgColor, categoryBg, categoryText } =
    donation || {};

  const colorBg = { background: bgColor };
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
        duration: 0.2,
      }}
      style={colorBg}
      className={` rounded-md overflow-hidden w-full relative`}
    >
      <Link to={`/donation_details/${id}`}>
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
          <span
            style={{
              background: categoryBg,
              color: categoryText,
            }}
            className={`py-1 px-2 rounded-md text-sm capitalize inline-block`}
          >
            {category}
          </span>
          <h4
            style={{ color: categoryBg }}
            className="pt-3 pb-4 text-xl font-semibold capitalize"
          >
            {title}
          </h4>
        </div>
      </Link>
    </motion.div>
  );
};

export default Donation;
