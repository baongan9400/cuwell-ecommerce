import React, { useEffect, useState } from "react";
import Banner from "../../components/Contents/Banner";
import "./Home.css";
import NavBar from "components/NavBar/NavBar";
import Posts from "components/Contents/Posts";
import FooterWave from "components/FooterWave/FooterWave";

function CategoryPosts() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Posts />
      <FooterWave />
    </div>
  );
}

export default CategoryPosts;
