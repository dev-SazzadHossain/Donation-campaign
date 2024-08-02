import React from "react";
import { FaStamp } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CgAdd, CgProfile } from "react-icons/cg";
import { AiFillLayout } from "react-icons/ai";
import { BsDashCircle } from "react-icons/bs";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="bg-white h-full">
      <div className="pt-2 flex flex-col gap-5 items-center justify-center">
        {/* menu */}
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `text-black flex items-center bg-white shadow-sm justify-center  hover:text-black mx-4 py-2 px-3 shadow-red-300 rounded-lg gap-2 text-lg cursor-pointer ${
                location.pathname === "/dashboard" && "active"
              }`
            }
          >
            {" "}
            <span>
              <BsDashCircle size="20px" />
            </span>
            Dashboard
          </NavLink>
        </motion.div>
        {/* menu */}
        {/* menu */}
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          <NavLink
            to="/dashboard/statistic"
            className={({ isActive }) =>
              `text-black flex items-center bg-white shadow-sm justify-center  hover:text-black mx-4 py-2 px-3 shadow-red-300 rounded-lg gap-2 text-lg cursor-pointer ${
                isActive && "active"
              }`
            }
          >
            {" "}
            <span>
              <FaStamp size="20px" />
            </span>
            Statistic
          </NavLink>
        </motion.div>
        {/* menu */}
        {/* menu */}
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          <NavLink
            to="/dashboard/allDonation"
            className={({ isActive }) =>
              `text-black flex items-center bg-white shadow-sm justify-center  hover:text-black mx-4 py-2 px-3 shadow-red-300 rounded-lg gap-2 text-lg cursor-pointer ${
                isActive && "active"
              }`
            }
          >
            {" "}
            <span>
              <AiFillLayout size="20px" />
            </span>
            All Donation
          </NavLink>
        </motion.div>
        {/* menu */}
        {/* menu */}
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          <NavLink
            to="/dashboard/addDonation"
            className={({ isActive }) =>
              `text-black flex items-center bg-white shadow-sm justify-center  hover:text-black mx-4 py-2 px-3 shadow-red-300 rounded-lg gap-2 text-lg cursor-pointer ${
                isActive && "active"
              }`
            }
          >
            {" "}
            <span>
              <CgAdd size="20px" />
            </span>
            Add Donation
          </NavLink>
        </motion.div>
        {/* menu */}
        {/* menu */}
        <motion.div
          initial={{ scale: 1 }}
          whileTap={{
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `text-black flex items-center bg-white shadow-sm justify-center  hover:text-black mx-4 py-2 px-3 shadow-red-300 rounded-lg gap-2 text-lg cursor-pointer ${
                isActive && "active"
              }`
            }
          >
            {" "}
            <span>
              <CgProfile size="20px" />
            </span>
            Profile
          </NavLink>
        </motion.div>
        {/* menu */}
      </div>
    </div>
  );
};

export default Sidebar;
