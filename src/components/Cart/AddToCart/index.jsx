import React, { useState, useEffect } from "react";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { addNewToCart, AddToCartAPI } from "../../../redux/actions/cartAction";

import "./AddToCart.scss";
import { useDispatch, useSelector } from "react-redux";
function AddToCart(props) {
  const { list } = useSelector((state) => state.cartReducer);
  const { user } = useSelector((state) => state.userReducer);

  const [actived, setActived] = useState(false);
  const { item } = props;
  const dispatch = useDispatch();

  const handleCartItemClick = () => {
    dispatch(AddToCartAPI(item.id, 1, user.paypalEmail));
    dispatch(addNewToCart(item));
  };

  useEffect(() => {
    const newItem = list?.find((cartItem) => cartItem?.id === item.id);
    const id_new = typeof newItem?.id === "undefined" ? 0 : newItem.id;
    const id_item = typeof item?.id === "undefined" ? -1 : item.id;
    if (id_new === id_item) {
      setActived(true);
    } else {
      setActived(false);
    }
  }, [list]);
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
