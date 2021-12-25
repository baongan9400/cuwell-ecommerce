import React from "react";

import "./PostStatusSeller.scss";

const PostStatusSeller = (props) => {
  const { name, phone, address, rating } = props.user;
  const StartRating = ({ rating }) => {
    var rows = [];
    for (var i = 0; i < rating; i++) {
      rows.push(<span className="fa fa-star checked start-check"></span>);
    }
    for (var j = 0; j < 5 - rating; j++) {
      rows.push(<span className="fa fa-star start-uncheck"></span>);
    }
    return rows;
  };
  return (
    <div className="postStatusSeller">
      <div className="postStatusSeller__title mx-auto text-center uppercase">
        SELLER
      </div>
      <div className="postStatusSeller__points">
        <div className="myPoints myPoints_user d-flex items-center justify-content-between">
          <div className="myPoints__text">
            <img
              src={"https://i.pravatar.cc/150?u=" + name}
              className="buyer-img"
              alt="..."
            />
            <div className="user_name ms-3">{name}</div>
          </div>
          <div className="myPoints__number cursor-pointer">
            <div className="stars">
              <StartRating rating={rating} />
            </div>
          </div>
        </div>
        <div className="myPoints d-flex items-center justify-content-between">
          <div className="myPoints__text capitalize">
            <i className="fas fa-phone-square-alt"></i>
            <div className="user_info ms-3">{phone}</div>
          </div>
        </div>
        <div className="myPoints givePointsBottom d-flex items-center justify-content-between">
          <div className="myPoints__text capitalize">
            <i className="fas fa-map-marker-alt"></i>
            <div className="user_info ms-3">
              {address?.commune}, {address?.district}, {address?.city}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostStatusSeller;
