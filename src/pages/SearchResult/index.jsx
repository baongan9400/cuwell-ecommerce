import React from "react";
import Banner from "../../components/Contents/Banner";
import "./Home.css";
import NavBar from "components/NavBar/NavBar";
import Posts from "components/Contents/Posts";
import FooterWave from "components/FooterWave/FooterWave";

function SearchResult() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Posts />
      <FooterWave />
    </div>
  );
}

export default SearchResult;
