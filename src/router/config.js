import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "../pages/Authentication/Login";

export const routeConfig = [
  {
    path: "/login",
    isPrivate: false,
    exact: true,
    component: Login,
  },
  { path: "*", component: Error },
];

const PrivateRoute = (privateProps) => {
  const { user } = useSelector((state) => state.user);

  if (user) return <privateProps.component {...privateProps} />;

  return <Redirect to="/login" />;
};

export const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) =>
        route.isPrivate ? (
          <PrivateRoute {...route} />
        ) : (
          <route.component {...props} />
        )
      }
    />
  );
};
