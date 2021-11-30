import React, {useState} from "react";
import { connect } from "react-redux";

import { ShoppingCartOutlined } from "@material-ui/icons";
import "./CartBadge.css";
import CartPopup from "../CartPopup";


const mapStateToProps = (state) => {
  return {
    cartCount: state.cartReducer.cartCount,
  };
};

const mapDispatchToProps = {};

function CartBadge(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="card-badge order-sm-start order-lg-last">
      <div className="cart-icon-container" onClick = {handleShow}>
        <ShoppingCartOutlined style={{ fontSize: 23 }} className="cart-icon" />
        <span className="badge badge-danger cart-icon-badge">
          {props.cartCount}
        </span>
      </div> 
      <CartPopup show = {show} handleClose= {handleClose}/>    
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartBadge);
