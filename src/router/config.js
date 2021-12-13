import PostDetail from "components/PostDetail";
import SignUp from "pages/Authentication/SignUp/SignUp";
import ErrorPage from "pages/Error/ErrorPage";
import Home from "pages/Home";
import React from "react";
import { Route } from "react-router-dom";
import Login from "../pages/Authentication/Login/Login";
import CreatePost from "pages/CreatePost/CreatePost";
import profile from "pages/Profile/profile";
import SearchResult from "pages/SearchResult/index";
import EditUser from "components/EditUser";
import Payment from "components/Payment";
import CategoryPosts from "pages/CategoryPosts/CategoryPosts";
import UserManagePosts from "components/UserPosts/UserManagePosts";
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
  {
    path: "/posts",
    component: SearchResult,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/edit-profile",
    component: EditUser,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/payment",
    component: Payment,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/category/:cat_id",
    component: CategoryPosts,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/my-posts",
    component: UserManagePosts,
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
