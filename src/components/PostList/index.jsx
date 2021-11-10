import React from "react";
import CardPost from "../Post/CardPost";
import * as Loader from "../Post/CardPostLoading";

function Posts(props) {
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
  return (
    <>
      <Posts load={load} posts={posts} size={size} />
    </>
  );
}

export default PostList;