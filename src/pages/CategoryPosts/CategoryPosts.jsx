import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import Posts from "components/Contents/Posts";
import FooterWave from "components/FooterWave/FooterWave";
import { useDispatch } from "react-redux";
import { searchLoading } from "redux/actions/posts/search.action";
import Banner from "../../components/Contents/Banner";

function CategoryPosts(props) {
  const { cat_id } = useParams();
  const dispatch = useDispatch();

  window.scrollTo({
    top: 700,
    left: 0,
    behavior: "smooth",
  });
  useEffect(() => {
    const params = {
      search: "",
      page: 1,
      category: cat_id,
      page_size: 24,
    };
    dispatch(searchLoading(params));
  }, [cat_id]);

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
