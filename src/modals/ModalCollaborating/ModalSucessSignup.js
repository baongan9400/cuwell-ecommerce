import React from "react";

import "./ModalSucessSignup.scss";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
const ModalSucessSignup = ({ isShowing, handleClose }) => {
  return (
    <Modal
      show={isShowing}
      onHide={handleClose}
      dialogClassName="modal-collaborating"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <img
            src="https://i0.wp.com/codemyui.com/wp-content/uploads/2017/07/envelope-to-paper-plane-animation.gif?fit=880%2C440&ssl=1"
            alt="Success"
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ctn-collab mb-3">
          <div className="ctn text-center">
            <div className="text pb-5">
              Warmly welcome you to{" "}
              <span className="fw-bolder fs-5">Cuwell</span>
              <br></br>Check mail to get your default password. You can reset it
              later.<br></br>
              <Link to="/login" className="fw-bold">
                Log In Here
              </Link>
            </div>
            <a
              href="https://mail.google.com/"
              target="_blank”"
              className="contBtn"
            >
              Continue
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
export default ModalSucessSignup;
