import React from "react";
import { useSelector } from "react-redux";
import "./profile.css";
import { Link } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

function ListItem({ label, src, link }) {
  const photo = require(`./img/${src}`).default;
  return (
    <Link
      to={link}
      style={{ color: "inherit", textDecoration: "inherit" }}
      className="btn btn-outline-primary list-group-item"
    >
      <li className="d-flex justify-content-between align-items-center flex-wrap">
        <h6 className="mb-0">
          <img
            className="feather feather-globe me-5 icon-inline"
            width="40"
            height="40"
            src={photo}
            alt={label}
          />
          {label}
        </h6>
      </li>
    </Link>
  );
}

function Profile(props) {
  const reduxUser = useSelector((state) => state.userReducer);
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: Yup.object({
      newPassword: Yup.string()
        .min(5, "Minimum 5 characters")
        .required("Required!"),
      oldPassword: Yup.string()
        .min(5, "Minimum 5 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      console.log(values.newPassword, values.oldPassword);
    },
  });
  const touched = formik.touched;
  const error = formik.errors;
  const values = formik.values;
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Is this your first reset password? Check{" "}
      <a href="https://mail.google.com/" target="_blank”" className="contBtn">
        mail
      </a>{" "}
      to get default password.
    </Tooltip>
  );
  return (
    <div>
      <NavBar />
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="main-body ">
          <div className="row gutters-sm ">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body card-profile">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={
                        reduxUser.user.avatar
                          ? reduxUser.user.avatar
                          : "https://i.pravatar.cc/150?u=" +
                            reduxUser.user.email
                      }
                      alt="avatar"
                      className="rounded-circle"
                      width={150}
                      height={150}
                    />
                    <div className="mt-3">
                      <h4>{reduxUser.user.name}</h4>
                      <p className="text-secondary mb-1">Premium Member</p>
                      <button
                        className="btn btn-outline-primary me-2 my-2"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <img
                          className="feather feather-globe me-2 icon-inline"
                          width="30"
                          height="30"
                          src={require(`./img/cart.png`).default}
                          alt="Cart"
                        />
                        Cart
                      </button>
                      <button className="btn btn-outline-primary">
                        <img
                          className="feather feather-globe me-2 icon-inline"
                          width="30"
                          height="30"
                          src={require(`./img/create.png`).default}
                          alt="Fav"
                        />
                        Create Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-3">
                <ul className="list-group list-group-flush">
                  <ListItem
                    label="Profile"
                    src="user.png"
                    link="/edit-profile"
                  ></ListItem>
                  <ListItem
                    label="My Posts"
                    src="post.png"
                    link="/my-posts"
                  ></ListItem>
                  <ListItem
                    label="History"
                    src="bill.png"
                    link="/payment/history"
                  ></ListItem>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Fullname</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {reduxUser.user.name}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {reduxUser.user.email}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {reduxUser.user.phone}
                    </div>
                  </div>
                  <hr />

                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      {reduxUser.user.address.commune},{" "}
                      {reduxUser.user.address.district},{" "}
                      {reduxUser.user.address.city}
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <Link
                        className="btn btn-info"
                        to={{ pathname: `/edit-profile` }}
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gutters-sm">
                <div className="col-sm-12 mb-3">
                  <div className="card h-100">
                    <div className="card-body card-statistic">
                      <form onSubmit={formik.handleSubmit}>
                        <div className="row justify-content-between">
                          <div className="col-4">
                            <h6 className="d-flex align-items-center mb-3 fw-bold">
                              <i className="material-icons text-info me-2 fw-bold ">
                                PASSWORD
                              </i>
                              Reset here
                            </h6>
                          </div>
                          <div className="col-4 text-end">
                            <button
                              className="btn btn-primary px-5"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            for="oldPassword"
                            className="form-label fw-bold"
                          >
                            Current password
                          </label>
                          {error.oldPassword && touched.oldPassword && (
                            <p className="text-danger fs-6">
                              {error.oldPassword}
                            </p>
                          )}
                          <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 700 }}
                            overlay={renderTooltip}
                          >
                            <input
                              type="password"
                              name="oldPassword"
                              className="form-control"
                              id="oldPassword"
                              placeholder="Enter your current password"
                              value={values.oldPassword}
                              onChange={formik.handleChange}
                            />
                          </OverlayTrigger>
                        </div>
                        <div className="mb-3">
                          <label
                            for="newPassword"
                            className="form-label fw-bold"
                          >
                            New password
                          </label>
                          {error.newPassword && touched.newPassword && (
                            <p className="text-danger fs-6">
                              {error.newPassword}
                            </p>
                          )}
                          <input
                            type="password"
                            className="form-control"
                            name="newPassword"
                            id="newPassword"
                            placeholder="Enter your new password"
                            value={values.newPassword}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
