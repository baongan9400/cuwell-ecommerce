import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../Cart/AddToCart";

import PropTypes from "prop-types";

import { VNDformat } from "../../helper/utils";
import "./CardPost.scss";
const CardPost = (props) => {
  const { id, title, description, price, images } = props.post;

  return (
    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-2 p-4 p-md-3 mt-3">
      <div className="product-item mb-3">
        <div className="down-content ">
          <Link to={{ pathname: `/post/${id}`, state: { post: props.post } }}>
            <img
              className="mb-3 imageProduct"
              src={
                images[0] && images[0].url
                  ? images[0].url
                  : "https://salt.tikicdn.com/cache/280x280/ts/product/29/f0/ad/2d35f5288ea643e3768c8f3361cafa5a.jpg"
              }
              alt=""
            />
            <h4 className="text-break-head px-4">{title.trim()}</h4>
            <div className="text-break px-4">
              <p className="product-item-description">{description.trim()}</p>
            </div>
          </Link>
          <div className="row d-flex justify-content-between mt-3 px-4">
            <p className="price col-md-8 col-lg-8">{VNDformat(price)}</p>
            <div className="col-md-4 col-4">
              <AddToCart item={props.post} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CardPost.propTypes = {
  post: PropTypes.object,
};
export default CardPost;
