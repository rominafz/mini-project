import React from "react";
import { Route } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Header from "./Header";
// import Footer from "./Footer";
export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <MainLayouts>
            <Header />
            <main className="main">
              <Component {...props} />
            </main>
            {/* <Footer /> */}
          </MainLayouts>
        );
      }}
    />
  );
};
