import NavBar from "components/NavBar/NavBar";
import SignUp from "pages/Authentication/SignUp/SignUp";
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
  {
    path: "/signup",
    isPrivate: false,
    exact: true,
    component: SignUp,
  },
  {
    path: "/navbar",
    isPrivate: false,
    exact: true,
    component: NavBar,
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
