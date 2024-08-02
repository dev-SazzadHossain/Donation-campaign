import React from "react";
import { Link } from "react-router-dom";
import { Drawer } from "rsuite";
import MainLogo from "../../svg/MainLogo";

const CustomDrawer = ({ placement, open, setOpen }) => {
  return (
    <Drawer
      placement={placement}
      open={open}
      onClose={() => setOpen(false)}
      closeButton={false}
    >
      <MainLogo />

      <ul>
        <li>
          <Link className=" text-lg font-bold font-mainFont tracking-normal">
            Home
          </Link>
        </li>
        <li>
          <Link className=" text-lg font-bold font-mainFont tracking-normal">
            Donation
          </Link>
        </li>
        <li>
          <Link className=" text-lg font-bold font-mainFont tracking-normal">
            Statistics
          </Link>
        </li>
      </ul>
    </Drawer>
  );
};

export default CustomDrawer;
