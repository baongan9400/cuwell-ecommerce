import React, { useState } from "react";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { addNewToCart, AddToCartAPI } from '../../../redux/actions/cartAction'

import "./AddToCart.scss";
import { useDispatch } from "react-redux";
function AddToCart(props) {
  const [actived, setActived] = useState(true);
  const { item, cartList, price } = props;
  const dispatch = useDispatch();

  const handleCartItemClick = () => {
    console.log("cart", item);
    dispatch(AddToCartAPI(item.id));
    dispatch(addNewToCart(item));
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
