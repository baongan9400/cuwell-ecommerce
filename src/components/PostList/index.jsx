import React from "react";
import ReactPaginate from "react-paginate";
import CardPost from "../Post/CardPost";
import * as Loader from "../Post/CardPostLoading";
import "./PostList.scss";
import { useDispatch } from "react-redux";
import { searchLoading } from "redux/actions/posts/search.action";
function ListCardPost(props) {
  const { posts, load, size } = props;
  if (load === true) return <Loader.PostListLoading size={size ? size : 18} />;
  else
    return (
      <>
        {posts.length > 0 &&
          posts.map((item) => <CardPost key={item.id} post={item} />)}
      </>
    );
}
function PostList(props) {
  const { posts, load, size } = props;
  const dispatch = useDispatch();
  const searchParams = (selectNumber) => {
    const params = {
      search: "",
      category: "",
      page: selectNumber.selected + 1,
      page_size: 24,
    };
    dispatch(searchLoading(params));
  };

  return (
    <>
      <ListCardPost load={load} posts={posts} size={size} />
      <div className="pagination-custom">
        <nav aria-label="Page navigation example">
          <ReactPaginate
            pageCount={10}
            pageRange={1}
            marginPagesDisplayed={1}
            onPageChange={searchParams}
            containerClassName={"pagination"}
            previousLinkClassName={"page-link"}
            breakLinkClassName={"page-link page-item"}
            nextLinkClassName={"page-link"}
            pageLinkClassName={"page-link"}
            disabledClassName={""}
            activeLinkClassName={"page-link"}
          />
        </nav>
      </div>
    </>
  );
}

export default PostList;
