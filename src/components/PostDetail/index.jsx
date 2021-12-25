import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import PostStatusQuantity from "components/PostStatus/PostStatusQuantity";
import "./PostDetail.scss";
import NavBar from "components/NavBar/NavBar";
import PostStatusSeller from "components/PostStatus/PostStatusSeller";
import FooterWave from "components/FooterWave/FooterWave";
import { VNDformat } from "helper/utils";
import ReportModal from "../../modals/ReportModal/ReportModal";
import useModal from "hook/useModal";
import { getPostById } from "api/posts/search";
import ContentLoader from "react-content-loader";
import moment from "moment";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={1280}
    height={900}
    viewBox="0 0 1280 900"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="753" y="419" rx="5" ry="5" width="510" height="2" />
    <rect x="147" y="24" rx="0" ry="0" width="540" height="540" />
    <rect x="12" y="25" rx="0" ry="0" width="104" height="109" />
    <rect x="11" y="165" rx="0" ry="0" width="104" height="109" />
    <rect x="11" y="305" rx="0" ry="0" width="105" height="109" />
    <rect x="753" y="27" rx="0" ry="0" width="160" height="18" />
    <rect x="753" y="63" rx="0" ry="0" width="496" height="32" />
    <rect x="753" y="189" rx="0" ry="0" width="45" height="16" />
    <rect x="753" y="224" rx="0" ry="0" width="80" height="80" />
    <rect x="11" y="451" rx="0" ry="0" width="105" height="109" />
    <rect x="73" y="479" rx="0" ry="0" width="2" height="14" />
    <rect x="753" y="127" rx="20" ry="20" width="101" height="32" />
    <rect x="872" y="128" rx="21" ry="21" width="85" height="32" />
    <rect x="972" y="125" rx="20" ry="20" width="146" height="32" />
    <rect x="1133" y="127" rx="20" ry="20" width="66" height="32" />
    <rect x="828" y="190" rx="0" ry="0" width="175" height="16" />
    <rect x="937" y="194" rx="0" ry="0" width="8" height="8" />
    <rect x="854" y="224" rx="0" ry="0" width="80" height="80" />
    <rect x="954" y="224" rx="0" ry="0" width="80" height="80" />
    <rect x="753" y="309" rx="0" ry="0" width="80" height="5" />
    <rect x="753" y="364" rx="0" ry="0" width="53" height="16" />
    <rect x="828" y="348" rx="25" ry="25" width="432" height="42" />
    <rect x="753" y="459" rx="0" ry="0" width="140" height="32" />
    <rect x="1150" y="521" rx="0" ry="0" width="6" height="4" />
    <rect x="1157" y="496" rx="0" ry="0" width="49" height="5" />
    <rect x="753" y="504" rx="0" ry="0" width="70" height="12" />
    <rect x="753" y="549" rx="25" ry="25" width="435" height="42" />
    <rect x="1101" y="459" rx="25" ry="25" width="48" height="48" />
    <rect x="1213" y="459" rx="25" ry="25" width="48" height="48" />
    <rect x="1172" y="461" rx="0" ry="0" width="16" height="30" />
    <rect x="1212" y="547" rx="25" ry="25" width="48" height="48" />
    <rect x="12" y="627" rx="0" ry="0" width="175" height="18" />
    <circle cx="20" cy="675" r="8" />
    <rect x="40" y="670" rx="0" ry="0" width="331" height="12" />
    <circle cx="20" cy="701" r="8" />
    <rect x="40" y="696" rx="0" ry="0" width="331" height="12" />
    <circle cx="20" cy="727" r="8" />
    <rect x="40" y="722" rx="0" ry="0" width="331" height="12" />
    <circle cx="20" cy="754" r="8" />
    <rect x="40" y="749" rx="0" ry="0" width="331" height="12" />
    <rect x="11" y="800" rx="0" ry="0" width="566" height="12" />
    <rect x="11" y="882" rx="0" ry="0" width="566" height="12" />
    <rect x="11" y="817" rx="0" ry="0" width="566" height="12" />
    <rect x="11" y="838" rx="0" ry="0" width="566" height="12" />
    <rect x="11" y="860" rx="0" ry="0" width="566" height="12" />
    <rect x="895" y="635" rx="0" ry="0" width="175" height="18" />
    <circle cx="903" cy="683" r="8" />
    <rect x="923" y="678" rx="0" ry="0" width="331" height="12" />
    <circle cx="903" cy="709" r="8" />
    <rect x="923" y="704" rx="0" ry="0" width="331" height="12" />
    <circle cx="903" cy="735" r="8" />
    <rect x="923" y="730" rx="0" ry="0" width="331" height="12" />
    <circle cx="903" cy="762" r="8" />
    <rect x="923" y="757" rx="0" ry="0" width="331" height="12" />
  </ContentLoader>
);

const PreviewSlider = ({ listPostImage }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  return (
    <div className="postdetails-img-group col-6">
      <Slider asNavFor={nav2} ref={slider1} className="slider-top">
        {listPostImage}
      </Slider>

      <Slider
        asNavFor={nav1}
        ref={slider2}
        slidesToShow={3}
        swipeToSlide={true}
        focusOnSelect={true}
        className="slider-down"
      >
        {listPostImage}
      </Slider>
    </div>
  );
};

export function PostDetails() {
  const location = useLocation();
  const post = location.state.post;

  const { isShowing, toggle } = useModal();

  const [loading, setLoading] = useState(false);
  const [userPosts, setUserPosts] = useState({
    user: {
      name: "",
      phone: "",
      address: {
        city: "",
        district: "",
        commune: "",
      },
    },
  });

  const {
    id,
    title,
    description,
    price,
    images,
    user,
    quantity,
    category,
    total,
    sell,
    stock,
  } = post;

  useEffect(() => {
    fetchUserPost();
  }, []);

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  const fetchUserPost = async () => {
    try {
      setLoading(true);
      const res = await getPostById(post?.id);
      if (res) {
        setLoading(false);
        setUserPosts(res);
      }
    } catch (error) {
      setLoading(false);
      console.log("failed to fetch user buy with error: ", error);
    }
  };

  const listPostImage = post.images.map((item) => (
    <img src={item.url} className="mx-auto d-block" alt="..." />
  ));
  const listBuyerImage =
    post.buyer &&
    post.buyer.map((item) => (
      <img
        src={
          item.avatar ? item.avatar : "https://i.pravatar.cc/150?u=" + item.id
        }
        className="buyer-img"
        alt="..."
      />
    ));
  return (
    <div>
      <NavBar />
      {loading ? (
        <div className="container postdetails">
          <MyLoader />
        </div>
      ) : (
        <div className="container postdetails">
          <div>
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <PreviewSlider listPostImage={listPostImage} />
                  <div className="postdetails-buyer">
                    {listBuyerImage}
                    {/* <span>{listBuyerImage.length} other people bought it</span> */}
                  </div>
                </div>
                <div className="details col-md-6">
                  <h3 className="product-title">{title}</h3>
                  <div className="rating">
                    <span
                      style={{ alignItems: "center" }}
                      className="review-no d-flex"
                    >
                      <span className="m-2">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.0026 1.66229V5.06563"
                            stroke="#282830"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M15.0026 24.9294V28.3328"
                            stroke="#282830"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28.263 14.9976H24.8596"
                            stroke="#282830"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.99624 14.9976H1.5929"
                            stroke="#282830"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M28.75 14.9976C28.75 22.5893 22.5942 28.7451 14.9975 28.7451C7.40583 28.7451 1.25 22.5893 1.25 14.9976C1.25 7.4059 7.40583 1.25007 14.9975 1.25007C22.5991 1.25007 28.75 7.4059 28.75 14.9976Z"
                            stroke="#282830"
                          />
                          <path
                            d="M22.127 9.22423L15.0322 16.3141L10.4066 11.9419"
                            stroke="#282830"
                          />
                        </svg>
                      </span>
                      <div className="">
                        {moment(userPosts.created_at).format(
                          "MMMM Do YYYY, h:mm:ss a"
                        )}
                      </div>
                    </span>
                  </div>
                  <h4 className="postdetails-price">
                    {VNDformat(price)}
                    {/* <span>VND</span> */}
                  </h4>
                  <p className="product-description">{description.trim()}</p>
                  <div className="action">
                    <button
                      className="add-to-cart btn btn-default"
                      type="button"
                    >
                      <span className="fas fa-cart-plus"></span>
                      add to cart
                    </button>
                    <button
                      onClick={toggle}
                      className="like btn btn-danger"
                      type="button"
                    >
                      <span className="fa fa-exclamation-circle fa-lg"></span>
                    </button>
                    <ReportModal
                      postId={post?.id}
                      handleClose={toggle}
                      isShowing={isShowing}
                    />
                  </div>
                </div>
              </div>
              <div className="postStatus row">
                <div className="table-status-quantity col-5">
                  <PostStatusQuantity
                    quantity={quantity}
                    sell={sell}
                    stock={stock}
                  />
                </div>
                <div className="col-md"></div>
                <div className="col-5">
                  <PostStatusSeller user={userPosts.user} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <FooterWave />
    </div>
  );
}
export default PostDetails;
