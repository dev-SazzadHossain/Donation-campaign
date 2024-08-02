import React, { useEffect, useState } from "react";
import MainLogo from "../../svg/MainLogo";
import CustomContainer from "../../ShearComponents/CustomContainer/CustomContainer";
import Flex from "../../ShearComponents/Flex/Flex";
import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import CustomDrawer from "../../ShearComponents/CustomDrawer/CustomDrawer";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { Button, Tooltip, Whisper } from "rsuite";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const [width, setWidth] = useState(window.innerWidth);
  const admin = true;

  const handelWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handelWidth);
    if (width >= 1024) {
      // -------lg breakpoint in Tailwind CSS---------
      setOpen(false);
    }
    return () => window.removeEventListener("resize", handelWidth);
  }, [width]);

  return (
    <header className=" fixed w-full top-0 left-0 z-50">
      <motion.nav
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 100,
        }}
        transition={{
          type: "spring",
          stiffness: 320,
          duration: 10,
        }}
      >
        <CustomContainer>
          <Flex className=" 2xl:justify-between xl:justify-between lg:justify-between md:justify-between sm:justify-between justify-between items-center py-2">
            <Link to="/">
              {" "}
              <MainLogo />
            </Link>
            <ul className=" gap-5 2xl:flex xl:flex lg:flex items-center hidden">
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
                      `text-lg font-bold font-mainFont tracking-normal  ${
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
              <li>
                <Whisper
                  placement="bottom"
                  controlId="control-id-hover"
                  trigger="hover"
                  speaker={<Tooltip>Donation</Tooltip>}
                >
                  <NavLink
                    to="/donation"
                    className={({ isActive }) =>
                      `text-lg font-bold font-mainFont tracking-normal  ${
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
                      `text-lg font-bold font-mainFont tracking-normal  ${
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
              {admin && (
                <li>
                  <Whisper
                    placement="bottom"
                    controlId="control-id-hover"
                    trigger="hover"
                    speaker={<Tooltip>Dashboard</Tooltip>}
                  >
                    <NavLink
                      to="/dashboard"
                      className={({ isActive }) =>
                        `text-lg font-bold font-mainFont tracking-normal  ${
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
                        Dashboard
                      </motion.span>
                    </NavLink>
                  </Whisper>
                </li>
              )}
            </ul>
            {/* mobile menu */}
            <div
              className={`2xl:hidden xl:hidden lg:hidden block cursor-pointer `}
            >
              {!open ? (
                <CiMenuBurger
                  onClick={() => setOpen((prv) => true)}
                  size="30px"
                  className={`transition-opacity duration-500 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
              ) : (
                <RxCross1
                  onClick={() => setOpen((prv) => false)}
                  size="30px"
                  className={`transition-opacity duration-500  opacity-0 ${
                    open && "opacity-100 shadow-md shadow-red-500/45"
                  }`}
                />
              )}
            </div>
            {/* mobile menu */}
          </Flex>
        </CustomContainer>
        <Drawer
          size={width - 100}
          open={open}
          onClose={() => setOpen(false)}
          direction="right"
          className="bla bla bla"
        >
          <div className="flex flex-col items-center">
            {" "}
            <MainLogo />
            <ul className=" flex flex-col items-start pt-10 transition-all duration-300">
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
                      `text-lg font-bold font-mainFont tracking-normal  ${
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
                      `text-lg font-bold font-mainFont tracking-normal  ${
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
                      `text-lg font-bold font-mainFont tracking-normal  ${
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
            </ul>
          </div>
        </Drawer>
      </motion.nav>
    </header>
  );
};

export default Navbar;
