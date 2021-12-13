import React from "react";
import ReactPaginate from "react-paginate";
import UserPost from "./UserPost";
import * as Loader from "../Post/CardPostLoading";
import NavBar from "components/NavBar/NavBar";
import "./UserManagePosts.scss";
function ListCardPost(props) {
  const { posts, load, size } = props;
  if (load === true) return <Loader.PostListLoading size={size ? size : 18} />;
  else
    return (
      <>
        {posts.results.length > 0 &&
          posts.results.map((item) => <UserPost key={item.id} post={item} />)}
      </>
    );
}
function UserManagePosts(props) {
  // const { posts, load, size } = props;
  // const dispatch = useDispatch();
  // const searchParams = (selectNumber) => {
  //   const params = {
  //     search: "",
  //     category: "",
  //     page: selectNumber.selected + 1,
  //     page_size: 24,
  //   };
  //   dispatch(searchLoading(params));
  // };
  const posts = {
    count: 6,
    pageIndex: 1,
    pageSize: 8,
    pageNumber: 0,
    results: [
      {
        id: 70,
        title: "Đồng Hồ Nam ECONOMICXI Dây Thép Lưới Đen",
        description:
          "ĐỒNG HỒ ECONOMICXI NAM TÍNH: Những chiếc đồng hồ ECONOMICXI làm tôn lên vẻ đẹp hiện đại mang lại sự cuốn hút mạnh mẽ cho nam giới từ cái nhìn đầu tiên. Đàn ông là phải thế, dù bạn không cao nhưng người khác phải ngước nhìn.",
        price: 1830000,
        status: 1,
        user: "618bde1b7dc3f7431c8be515",
        quantity: 1,
        images: [
          {
            id: 101,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/ad53fc174c7e055fe0eac541d3978aaf_qt218q",
          },
          {
            id: 102,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/8e3b8049d0d7a080dfad9f841a4fdf70_t4r6yy",
          },
          {
            id: 103,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/62243959a1901eabe6b8d3df36f6cf41_ddr4bl",
          },
        ],
        total: 1,
        sell: 1,
        stock: 0,
      },
      {
        id: 69,
        title: "aaaaaaaaaaa",
        description: "dfggggggg ddddd",
        price: 45678,
        status: 1,
        user: "618bde1b7dc3f7431c8be515",
        quantity: 1,
        images: [
          {
            id: 98,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/ad53fc174c7e055fe0eac541d3978aaf_pkpnkh",
          },
          {
            id: 99,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/8e3b8049d0d7a080dfad9f841a4fdf70_ydd08c",
          },
          {
            id: 100,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/62243959a1901eabe6b8d3df36f6cf41_wgftz2",
          },
        ],
        total: 1,
        sell: 0,
        stock: 1,
      },
      {
        id: 68,
        title: "aaaaaaaaaaa",
        description: "dfggggggg ddddd",
        price: 45678,
        status: 1,
        user: "618bde1b7dc3f7431c8be515",
        quantity: 1,
        images: [
          {
            id: 95,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/ad53fc174c7e055fe0eac541d3978aaf_mnvp8q",
          },
          {
            id: 96,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/8e3b8049d0d7a080dfad9f841a4fdf70_vbtujt",
          },
          {
            id: 97,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/62243959a1901eabe6b8d3df36f6cf41_d9xc8b",
          },
        ],
        total: 1,
        sell: 0,
        stock: 1,
      },
      {
        id: 67,
        title: "Đồng Hồ Nam ECONOMICXI Dây Thép Lưới Đen",
        description:
          "ĐỒNG HỒ ECONOMICXI NAM TÍNH: Những chiếc đồng hồ ECONOMICXI làm tôn lên vẻ đẹp hiện đại mang lại sự cuốn hút mạnh mẽ cho nam giới từ cái nhìn đầu tiên. Đàn ông là phải thế, dù bạn không cao nhưng người khác phải ngước nhìn.",
        price: 890000,
        status: 1,
        user: "618bde1b7dc3f7431c8be515",
        quantity: 5,
        images: [
          {
            id: 92,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/62243959a1901eabe6b8d3df36f6cf41_ovzxhr",
          },
          {
            id: 93,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/8e3b8049d0d7a080dfad9f841a4fdf70_pgr24a",
          },
          {
            id: 94,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/ad53fc174c7e055fe0eac541d3978aaf_jufeql",
          },
        ],
        total: 5,
        sell: 0,
        stock: 5,
      },
      {
        id: 66,
        title: "HTML",
        description: "99.99%",
        price: 99.99,
        status: 1,
        user: "618bde1b7dc3f7431c8be515",
        quantity: 3,
        images: [
          {
            id: 89,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/2019_11_04_14_40_20_1-390x510_-_Copy_qcz7hy",
          },
          {
            id: 90,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/2019_11_04_14_40_20_1-390x510_z0dvyp",
          },
          {
            id: 91,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/html_vxbmcj",
          },
        ],
        total: 3,
        sell: 0,
        stock: 3,
      },
      {
        id: 65,
        title: "Day con lam giau",
        description: "99.99%",
        price: 99.99,
        status: 1,
        user: "618bde1b7dc3f7431c8be515",
        quantity: 3,
        images: [
          {
            id: 88,
            url: "https://res.cloudinary.com/cuwell/image/upload/v1/media/posts/2019_11_04_14_40_20_1-390x510_akpeia",
          },
        ],
        total: 3,
        sell: 0,
        stock: 3,
      },
    ],
  };
  return (
    <div className="userManagePost container-fluid ">
      <div className="row justify-content-center">
        <ListCardPost load={false} posts={posts} size={18} />
        <div className="pagination-custom">
          <nav aria-label="Page navigation example">
            <ReactPaginate
              pageCount={10}
              pageRange={1}
              marginPagesDisplayed={1}
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
      </div>
    </div>
  );
}

export default UserManagePosts;
