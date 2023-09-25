import React from "react";
import Header from "./header";
import Footer from "./Footer";
import { Outlet } from "react-router";

const SharedLayOut = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default SharedLayOut;
