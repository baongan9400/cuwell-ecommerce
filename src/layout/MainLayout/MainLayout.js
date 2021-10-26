import React from "react";
import "./MainLayout.scss";
import NavBar from "components/NavBar/NavBar";

const MainLayout = (props) => {
  return (
    <>
      <div className="main-layout">
        <div className="d-flex">
          <NavBar />
          <div className="main-layout-body">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
