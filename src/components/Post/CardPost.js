import React from "react";
import { Link } from "react-router-dom";
import AddToCart from "../Cart/AddToCart";

import PropTypes from "prop-types";
// import AddToCart from "../Cart/AddToCart";

import { VNDformat } from "../../helper/utils";
import "./CardPost.scss";
const CardPost = (props) => {
  const { id, title, description, price, image } = props.post;
  return (
    <div className="col-md-2 p-4 mt-3">
      <div className="product-item mb-3">
        <div className="down-content">
          {/* <Link to={{ pathname: `/post/${id}`, state: { post: props.post } }}> */}
          <img className="mb-2" src={image} alt="" />
          <h4 className="text-break-head">{title.trim()}</h4>
          <div className="text-break">
            <p className="product-item-description">{description.trim()}</p>
          </div>
          {/* </Link> */}
          <div className="row d-flex justify-content-between mt-3">
            <p className="price col-md-8 mr-2">{VNDformat(price)}</p>
            <div className="ml-3 col-md-4 ">
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
