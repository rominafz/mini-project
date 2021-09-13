import React from "react";
import { Route } from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
export const MainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <MainLayouts>
            <Component {...props} />
          </MainLayouts>
        );
      }}
    />
  );
};
