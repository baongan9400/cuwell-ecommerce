import React, { useState, useEffect } from "react";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { addNewToCart, AddToCartAPI } from '../../../redux/actions/cartAction'

import "./AddToCart.scss";
import { useDispatch,useSelector  } from "react-redux";
function AddToCart(props) {
  const { list, cartCount } = useSelector((state) => state.cartReducer);
  const [actived, setActived] = useState(false);
  const { item, price } = props;
  const dispatch = useDispatch();

  const handleCartItemClick = () => {
    dispatch(AddToCartAPI(item.id));
    dispatch(addNewToCart(item));
  };

  useEffect(() => {

    const newItem = list?.find(cartItem => JSON.stringify(cartItem) === JSON.stringify(item))
    if (JSON.stringify(newItem) === JSON.stringify(item)) {
      setActived(true);
    } else {
      setActived(false)
    }
  }, [cartCount])
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
