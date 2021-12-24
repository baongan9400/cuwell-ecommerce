import { editPost } from "api/posts/search";
import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Modal,
  FloatingLabel,
  Row,
  Col,
  Container,
  Image,
} from "react-bootstrap";
import { pushToast } from "components/Toast";

import "./style.scss";
const ModalEditPost = ({ isShowing, handleClose, post }) => {
  let { id, title, description, price, images, sell, stock, quantity } = post;
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
    }

    setValidated(true);
  };
  const handleEdit = () => {
    callEditPost();
  };
  const callEditPost = async () => {
    try {
      setLoading(true);
      const result = await editPost({
        id,
        title,
        description,
        price,
        quantity,
      });
      if (result) {
        setLoading(false);
        pushToast("success", "Update post successfully");
      }
    } catch (error) {
      setLoading(false);
      pushToast("error", "Failed to update post ");
    }
  };
  return (
    <Modal
      show={isShowing}
      onHide={handleClose}
      size="lg"
      dialogClassName="modal-edit-post"
    >
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    placeholder="Enter title"
                    defaultValue={title}
                    style={{ height: 70 }}
                    onChange={(e) => {
                      title = e.target.value;
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter title.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Enter price"
                    defaultValue={price}
                    onChange={(e) => {
                      price = e.target.value;
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter price.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    required
                    type="number"
                    placeholder="Enter quantity"
                    defaultValue={quantity}
                    onChange={(e) => {
                      quantity = e.target.value;
                    }}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter quantity.
                  </Form.Control.Feedback>
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Sold</Form.Label>
                    <Form.Control type="text" placeholder={sell} readOnly />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="text" placeholder={stock} readOnly />
                  </Form.Group>
                </Row>
              </Col>
              <Col>
                {" "}
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Description"
                  >
                    <Form.Control
                      required
                      as="textarea"
                      placeholder="Leave a description here"
                      style={{ height: 150 }}
                      defaultValue={description}
                      onChange={(e) => {
                        description = e.target.value;
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter description.
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </Form.Group>
                <Form.Label>Images</Form.Label>
                <Container>
                  <Row>
                    {images?.map((item) => (
                      <Col xs={6} md={4}>
                        <Image src={item.url} thumbnail />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleEdit}>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalEditPost;
