import React from "react";
import Banner from "../../components/Contents/Banner";
import Footer from "../../components/Footer";
import "./Home.css";
import NavBar from "components/NavBar/NavBar";
import Posts from "components/Contents/Posts";
import Categories from "components/Contents/ExploreCategories/Categories";

function Home(props) {
  return (
    <div>
      <NavBar />
      <Banner />
      <Categories />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
