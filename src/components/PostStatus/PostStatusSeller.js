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
          <div className="myPoints__text capitalize">Total</div>
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
          <div className="myPoints__text capitalize">Stock</div>
          <div className="myPoints__number ml-2 numberCustom_stock cursor-pointer">
            5
          </div>
        </div>
        <div className="myPoints givePointsBottom d-flex items-center justify-content-between">
          <div className="myPoints__text capitalize">Sale</div>
          <div className="myPoints__number numberCustom_sale cursor-pointer">
            7
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostStatusSeller;
