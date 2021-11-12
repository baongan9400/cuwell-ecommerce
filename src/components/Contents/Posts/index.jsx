import React, { useEffect } from "react";
import PostList from "../../../components/PostList";
import { searchLoading } from "redux/actions/posts/search.action";

import "./posts.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Posts() {
  const dispatch = useDispatch();
  const { load, data } = useSelector((state) => state.searchPostsReducer);

  const params = {
    search: "",
    category: "",
    page: 1,
    page_size: 12,
  };
  useEffect(() => {
    dispatch(searchLoading(params));
  }, []);
  return (
    <div className="latest-products">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="section-heading">
              <h2 className="blink_me text-center col-md-11">
                LATEST ARRIVAL <span>It’s old for them but gold for you</span>
              </h2>
              <Link to="/best-price">
                view all products <i className="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
          <PostList load={load} posts={data.results} />
        </div>
      </div>
    </div>
  );
}
export default Posts;
