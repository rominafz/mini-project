import React, { Children } from "react";
import Header from "../Header";

const MainLayouts = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />
        {children}
      </div>
    </>
  );
};

export default MainLayouts;
