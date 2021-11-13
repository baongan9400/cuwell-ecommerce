import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import PostStatusQuantity from "components/PostStatus/PostStatusQuantity";
import "./PostDetail.scss";
import NavBar from "components/NavBar/NavBar";
import PostStatusSeller from "components/PostStatus/PostStatusSeller";
import FooterWave from "components/FooterWave/FooterWave";

export function PostDetails() {
  const location = useLocation();
  const post = location.state.post;

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);
  const listPostImage = post.images.map((item) => (
    <img src={item.url} className="mx-auto d-block" alt="..." />
  ));
  const listBuyerImage = post.buyer && post.buyer.map((item) => (
    <img
      src={item.avatar ? item.avatar : "https://i.pravatar.cc/150?u=" + item.id}
      className="buyer-img"
      alt="..."
    />
  ));
  return (
    <div>
      <NavBar />
      <div className="container postdetails">
        <div>
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="postdetails-img-group col-6">
                  <Slider asNavFor={nav2} ref={slider1} className="slider-top">
                    {listPostImage}
                  </Slider>

                  <Slider
                    asNavFor={nav1}
                    ref={slider2}
                    slidesToShow={2}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    className="slider-down"
                  >
                    {listPostImage}
                  </Slider>
                </div>
                <div className="postdetails-buyer">
                  {listBuyerImage}
                  {/* <span>{listBuyerImage.length} other people bought it</span> */}
                </div>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{post.title}</h3>
                <div className="rating">
                  <span className="review-no">
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
                    12:00PM Saturday, 9 October, 2021
                  </span>
                </div>
                <h4 className="postdetails-price">
                  4.500.500 <span>VND</span>
                </h4>
                <p className="product-description">{post.description.trim()}</p>
                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button">
                    <span className="fas fa-cart-plus"></span>
                    add to cart
                  </button>
                  <button className="like btn btn-default" type="button">
                    <span className="fa fa-heart"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="postStatus row">
              <div className="table-status-quantity col-5">
                <PostStatusQuantity />
              </div>
              <div className="col-md"></div>
              <div className="col-5">
                <PostStatusSeller />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterWave />
    </div>
  );
}
export default PostDetails;
