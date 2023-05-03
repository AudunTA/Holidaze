import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Index";
import Footer from "./Footer";
function Layout() {
  return (
    <div className="TESTTT">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
