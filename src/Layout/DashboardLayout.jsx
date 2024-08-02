import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Components/Sidebar/Sidebar";
import CustomContainer from "../ShearComponents/CustomContainer/CustomContainer";

const DashboardLayout = () => {
  return (
    <div>
      <CustomContainer>
        <section className="flex">
          <div className="2xl:w-[200px] xl:w-[200px] h-screen overflow-hidden shadow-lg">
            <Sidebar />
          </div>
          <main className="flex-1  h-screen overflow-x-hidden overflow-y-auto pt-2">
            <Outlet />
          </main>
        </section>
      </CustomContainer>
    </div>
  );
};

export default DashboardLayout;
