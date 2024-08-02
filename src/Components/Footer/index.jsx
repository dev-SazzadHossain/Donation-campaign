import React from "react";
import CustomContainer from "../../ShearComponents/CustomContainer/CustomContainer";
import MainLogo from "../../svg/MainLogo";
import { NavLink } from "react-router-dom";
import { Tooltip, Whisper } from "rsuite";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-gray-200 mt-10">
      <CustomContainer>
        <footer class=" text-white py-6">
          <div class="">
            <div class="flex   justify-between">
              <MainLogo />
              <nav class="flex flex-col ">
                <li>
                  <Whisper
                    placement="bottom"
                    controlId="control-id-hover"
                    trigger="hover"
                    speaker={<Tooltip>Home</Tooltip>}
                  >
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `text-lg font-bold text-gray-600 font-mainFont tracking-normal  ${
                          isActive && "active"
                        }`
                      }
                    >
                      <motion.span
                        initial={{ letterSpacing: 0 }}
                        whileHover={{ letterSpacing: "1.3px" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          duration: 0.2,
                        }}
                      >
                        Home
                      </motion.span>
                    </NavLink>
                  </Whisper>
                </li>
                <li className="py-3">
                  <Whisper
                    placement="bottom"
                    controlId="control-id-hover"
                    trigger="hover"
                    speaker={<Tooltip>Donation</Tooltip>}
                  >
                    <NavLink
                      to="/donation"
                      className={({ isActive }) =>
                        `text-lg font-bold text-gray-600 font-mainFont tracking-normal  ${
                          isActive && "active"
                        }`
                      }
                    >
                      <motion.span
                        initial={{ letterSpacing: 0 }}
                        whileHover={{ letterSpacing: "1.3px" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          duration: 0.2,
                        }}
                      >
                        Donation
                      </motion.span>
                    </NavLink>
                  </Whisper>
                </li>
                <li>
                  <Whisper
                    placement="bottom"
                    controlId="control-id-hover"
                    trigger="hover"
                    speaker={<Tooltip>Statistics</Tooltip>}
                  >
                    <NavLink
                      to="/statistics"
                      className={({ isActive }) =>
                        `text-lg font-bold text-gray-600 font-mainFont tracking-normal  ${
                          isActive && "active"
                        }`
                      }
                    >
                      <motion.span
                        initial={{ letterSpacing: 0 }}
                        whileHover={{ letterSpacing: "1.3px" }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          duration: 0.2,
                        }}
                      >
                        {" "}
                        Statistics
                      </motion.span>
                    </NavLink>
                  </Whisper>
                </li>
              </nav>
            </div>
            <div class="text-gray-800 mt-4 text-center text-sm font-medium tracking-wider">
              &copy; 2024 Your ..... All rights reserved.
            </div>
          </div>
        </footer>
      </CustomContainer>
    </div>
  );
};

export default Footer;
