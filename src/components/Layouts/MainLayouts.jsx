import React, { Children } from "react";
import Footer from "../Footer";
import Header from "../Header";

const MainLayouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayouts;
