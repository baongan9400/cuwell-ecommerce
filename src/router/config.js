import { Create } from "@material-ui/icons";
import NavBar from "components/NavBar/NavBar";
import PostDetail from "components/PostDetail";
import SignUp from "pages/Authentication/SignUp/SignUp";
import ErrorPage from "pages/Error/ErrorPage";
import Home from "pages/Home";
import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Authentication/Login/Login";
import CreatePost from "pages/CreatePost/CreatePost";
import profile from "pages/Profile/profile";
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
  {
    path: "/home",
    isPrivate: false,
    exact: true,
    component: Home,
  },
  {
    path: "/create-post",
    isPrivate: false,
    exact: true,
    component: CreatePost,
  },
  {
    path: "/post/:post_id",
    component: PostDetail,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/profile",
    component: profile,
    isPrivate: false,
    exact: true,
  },
  { path: "*", component: ErrorPage },
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
