import React from "react";

import "./PostStatusSeller.scss";

const PostStatusSeller = () => {
  return (
    <div className="postStatusSeller">
      <div className="postStatusSeller__title mx-auto text-center uppercase">
        SELLER
      </div>
      <div className="postStatusSeller__points">
        <div className="myPoints myPoints_user d-flex items-center justify-content-between">
          <div className="myPoints__text">
            <img
              src={"https://i.pravatar.cc/150?u=0904"}
              className="buyer-img"
              alt="..."
            />
            <div className="user_name ms-3">Taylor Swift</div>
          </div>
          <div className="myPoints__number cursor-pointer">
            <div className="stars">
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
        </div>
        <div className="myPoints d-flex items-center justify-content-between">
          <div className="myPoints__text capitalize">
            <i className="fas fa-phone-square-alt"></i>
            <div className="user_info ms-3">012345678989</div>
          </div>
        </div>
        <div className="myPoints givePointsBottom d-flex items-center justify-content-between">
          <div className="myPoints__text capitalize">
            <i className="fas fa-map-marker-alt"></i>
            <div className="user_info ms-3">
              123 Nguyen Luong Bang, Hoa Khanh, Lien Chieu, Da Nang
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostStatusSeller;
