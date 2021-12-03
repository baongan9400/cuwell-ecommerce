import React from "react";
import Banner from "../../components/Contents/Banner";
import "./Home.css";
import NavBar from "components/NavBar/NavBar";
import Posts from "components/Contents/Posts";
import Categories from "components/Contents/ExploreCategories/Categories";
import FooterWave from "components/FooterWave/FooterWave";

function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Categories />
      <Posts />
      <FooterWave />
    </div>
  );
}

export default Home;
