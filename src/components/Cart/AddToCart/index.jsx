import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./AddToCart.scss";
function AddToCart(props) {
  const [actived, setActived] = useState(true);
  const { item, cartList, price } = props;

  const handleCartItemClick = () => {
    props.addNewToCart(item);
    props.addToCartAPI(item.id);
  };

  return (
    <div className="add-to-cart">
      {actived ? (
        <div className="add-to-cart-active">
          <ShoppingCartIcon onClick={handleCartItemClick} />
        </div>
      ) : (
        <div className="add-to-cart-plus">
          <AddShoppingCartIcon onClick={handleCartItemClick} />
        </div>
      )}
    </div>
  );
}

export default AddToCart;
