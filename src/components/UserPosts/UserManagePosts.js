import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import UserPost from "./UserPost";
import * as Loader from "../Post/CardPostLoading";
import "./UserManagePosts.scss";
import userInfoApi from "api/user/userInfoApi";
import { useSelector } from "react-redux";
function ListCardPost(props) {
  const { posts, load, size } = props;
  if (load === true) return <Loader.PostListLoading size={size ? size : 18} />;
  else
    return (
      <>
        {posts?.results.length > 0 &&
          posts?.results.map((item) => <UserPost key={item.id} post={item} />)}
      </>
    );
}
function UserManagePosts(props) {
  const userReducerId = useSelector((state) => state.userReducer?.user?.id);
  const [userPosts, setUserPosts] = useState();
  const searchParams = (selectNumber) => {
    const params = {
      page: selectNumber.selected + 1,
      page_size: 6,
    };
    fetchUserPost(params);
  };

  useEffect(() => {
    fetchUserPost({ page: 1, page_size: 6 });
  }, []);

  const fetchUserPost = async (params) => {
    try {
      const res = await userInfoApi.manageUserPosts(params, userReducerId);
      if (res) setUserPosts(res);
    } catch (error) {
      console.log("failed to fetch user post with error: ", error);
    }
  };

  return (
    <div className="userManagePost container-fluid ">
      <div className="row justify-content-center">
        <ListCardPost load={false} posts={userPosts} size={18} />
        <div className="pagination-custom">
          <nav aria-label="Page navigation example">
            <ReactPaginate
              pageCount={5}
              pageRange={1}
              marginPagesDisplayed={1}
              containerClassName={"pagination"}
              previousLinkClassName={"page-link"}
              breakLinkClassName={"page-link page-item"}
              nextLinkClassName={"page-link"}
              pageLinkClassName={"page-link"}
              disabledClassName={""}
              activeLinkClassName={"page-link"}
              onPageChange={searchParams}
            />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default UserManagePosts;
