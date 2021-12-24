import React from "react";

import "./ModalPayByCashSuccess.scss";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
const ModalPayByCashSuccess = ({ isShowing, toggle }) => {
  return (
    <Modal
      show={isShowing}
      onHide={toggle}
      dialogClassName="modal-payment"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <img
            src="https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif"
            alt="Success"
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ctn-collab mb-3">
          <div className="ctn text-center">
            <div className="text pb-5">
              Purchase request successful. Order is being processed.
              <br></br>Wait for the seller to deliver and pay in cash<br></br>
              <Link to="/profile" className="fw-bold">
                View your payment history
              </Link>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ModalPayByCashSuccess;
