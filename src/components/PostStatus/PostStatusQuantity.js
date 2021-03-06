import React from "react";

import "./PostStatusQuantity.scss";

const PostStatusQuantity = (props) => {
  const { sell, stock, quantity } = props;
  return (
    <div className="postStatusTable">
      <div className="postStatusTable__title mx-auto text-center uppercase">
        QUANTITY
      </div>
      <div className="postStatusTable__points">
        <div className="myPoints d-flex items-center justify-content-between">
          <div className="myPoints__text capitalize">Total</div>
          <div className="myPoints__number cursor-pointer">{quantity}</div>
        </div>
        <div className="myPoints d-flex items-center justify-content-between">
          <div className="myPoints__text capitalize">Stock</div>
          <div className="myPoints__number ml-2 numberCustom_stock cursor-pointer">
            {stock}
          </div>
        </div>
        <div className="myPoints givePointsBottom d-flex items-center justify-content-between">
          <div className="myPoints__text capitalize">Sale</div>
          <div className="myPoints__number numberCustom_sale cursor-pointer">
            {sell}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostStatusQuantity;
