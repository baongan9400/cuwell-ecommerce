import reportApi from "api/report/reportApi";
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
import "./style.scss";
const ModalEditPost = ({ isShowing, handleClose, post }) => {
  const { id, title, description, price, images, sell, stock } = post;
  const handleEditPost = (data) => {
    console.log(data);
  };

  return (
    <Modal
      show={isShowing}
      onHide={handleClose}
      size="lg"
      dialogClassName="modal-edit-post"
    >
      <Form>
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
                    type="text"
                    placeholder="Enter title"
                    value={title}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter price"
                    value={price}
                  />
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
                      as="textarea"
                      placeholder="Leave a description here"
                      style={{ height: 150 }}
                      value={description}
                    />
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
          <Button type="submit" variant="primary" onClick={handleEditPost}>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalEditPost;
