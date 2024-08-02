import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <main className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
