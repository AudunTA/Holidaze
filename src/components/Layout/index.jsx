import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Index";
import Footer from "./Footer";
import MobileBar from "./MobileBar";
function Layout() {
  return (
    <>
      <Header />
      <MobileBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
