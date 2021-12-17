import reportApi from "api/report/reportApi";
import { PostListLoading } from "components/Post/CardPostLoading";
import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

const ReportModal = ({ isShowing, handleClose, postId }) => {
  const [reportTypes, setReportTypes] = useState([]);
  const [selectReportTypes, setSelectReportTypes] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    fetchReportTypes();
  }, []);

  const handleReport = (e) => {
    if (typeof e === "string") {
      setDescription(e);
    }
    if (typeof e === "number") {
      setSelectReportTypes(e);
    }
  };

  const handlePostReport = () => {
    postReportProduct({
      description: description,
      post: postId,
      report: selectReportTypes,
    });
  };

  const postReportProduct = async (body) => {
    try {
      const res = await reportApi.postReport(body);
      if (res) {
        handleClose();
      }
    } catch (error) {
      console.log("failed to report product with error: ", error);
    }
  };

  const fetchReportTypes = async () => {
    try {
      const res = await reportApi.getAllReportTypes();
      if (res) setReportTypes(res);
    } catch (error) {
      console.log("failed to fetch report types with error: ", error);

      // cheat
      setReportTypes([
        {
          id: 1,
          type: 1,
          description: "spam type",
          type_name: "SPAM",
        },
        {
          id: 3,
          type: 2,
          description: "cheat type",
          type_name: "CHEAT",
        },
      ]);
    }
  };

  return (
    <>
      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Report Violations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select
            onChange={(e) => {
              let type = parseInt(e.target.value);
              handleReport(type);
            }}
            aria-label="Default select example"
          >
            {reportTypes.map((rp) => (
              <option value={rp.id} key={rp.id}>
                {rp.type_name}
              </option>
            ))}
          </Form.Select>
          <FloatingLabel
            style={{ marginTop: "20px" }}
            controlId="floatingTextarea2"
            label="Description"
          >
            <Form.Control
              onChange={(e) => {
                handleReport(e.target.value);
              }}
              value={description}
              as="textarea"
              placeholder="Leave a comment here"
              style={{ minHeight: "100px" }}
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlePostReport}>
            Report
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReportModal;
