import React from "react";
import Banner from "../../components/Contents/Banner";
import Footer from "../../components/Footer";
import "./Home.css";
import NavBar from "components/NavBar/NavBar";
import Posts from "components/Contents/Posts";

function Home(props) {
  return (
    <div>
      <NavBar />
      <Banner />
      <Posts />
      <Footer />
    </div>
  );
}

export default Home;
