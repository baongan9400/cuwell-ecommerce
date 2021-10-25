import React from "react";
import { Route } from "react-router-dom";

import Login from "../pages/Authentication/Login/Login";

export const routeConfig = [
  {
    path: "/login",
    isPrivate: false,
    exact: true,
    component: Login,
  },
  { path: "*", component: Error },
];

export const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} />}
    />
  );
};
