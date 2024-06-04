import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Footer } from "../components";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Navbar />

      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default RootLayout;
