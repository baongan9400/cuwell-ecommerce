import React, { useState } from "react";
import { RemoveShoppingCart } from "@material-ui/icons";
import { connect } from "react-redux";
import { Modal, Button, Accordion } from "react-bootstrap";
import {
  addNewToCart,
  RemoveCartItemAPIAction,
} from "../../../redux/actions/cartAction";
import { Link } from "react-router-dom";
import { VNDformat } from "helper/utils";

import "./cartPopup.css";

const mapStateToProps = (state) => {
  return {
    list: state.cartReducer.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCartItemAPI: (pid) => {
      dispatch(RemoveCartItemAPIAction(pid));
    },
    addNewToCart: (item) => {
      dispatch(addNewToCart(item));
    },
  };
};

const ListPopup = (props) => {
  const { list, addNewToCart, removeCartItem } = props;

  const handleRemovePopupItem = (item) => {
    addNewToCart(item);

    removeCartItem(item.id);
  };
  const listItems = list.map((item) => (
    <li key={item.id} className="li-list-wrapper">
      {/* <div
        className="popup-sm-item p-3"
        data-bs-toggle="collapse"
        data-bs-target={`#${item.id}`}
      >
        <img src={item?.images[0]?.url} alt="" className="popup-sm-img" />
        <div className="popup-sm-user">
          <span className="popup-sm-username">{item.title}</span>
          <span className="popup-sm-user-price mt-2">
            {VNDformat(item.price)}
          </span>
        </div>
        <button
          className="popup-sm-button"
          onClick={() => handleRemovePopupItem(item)}
        >
          <RemoveShoppingCart className="popup-sm-icon" />
          Remove
        </button>
      </div>
      <div
        id={item.id}
        className="collapse multi-collapse"
        aria-labelledby="headingThree"
        data-parent="#accordionExample"
      >
        <span className="ms-3">{item.category}</span>
      </div> */}
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey={item.id}>
          <Accordion.Header>
            <img src={item?.images[0]?.url} alt="" className="popup-sm-img" />
            <div className="popup-sm-user">
              <span className="popup-sm-username">{item.title}</span>
              <span className="popup-sm-user-price mt-2">
                {VNDformat(item.price)}
              </span>
            </div>
            <button
              className="popup-sm-button"
              onClick={() => handleRemovePopupItem(item)}
            >
              <RemoveShoppingCart className="popup-sm-icon" />
              Remove
            </button>
          </Accordion.Header>
          <Accordion.Body>
          <span className="ms-3 text-break">{item.description}</span>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </li>
  ));

  return <ul className="popup-sm-list">{listItems}</ul>;
};

function CartPopup(props) {
  const priceTotal = props.list.reduce((total, item) => total + item.price, 0);
  const { show, handleClose } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title> Shopping Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListPopup
          list={props.list}
          addNewToCart={props.addNewToCart}
          removeCartItem={props.removeCartItemAPI}
        />
      </Modal.Body>
      <div className="row ms-5">
        <h5 className="col-md-6">Total</h5>
        <h6 className="col-md-6 text-info mb-3">{VNDformat(priceTotal)}</h6>
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Link
          to={{
            pathname: "/payment",
            state: {
              listItems: props.list,
            },
          }}
        >
          <button type="button" className="btn btn-info">
            Checkout
          </button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPopup);
