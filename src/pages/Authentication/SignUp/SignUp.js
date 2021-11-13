import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignUp.scss";
import signupBackground from "../../../assets/images/bottom-bg-signup.png";

const SignUp = () => {
  const [isShow, setIsShow] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      last_name: Yup.string()
        .min(1, "Mininum 1 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(5, "Minimum 5 characters")
        .required("Required!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      console.log("values: ", values);
    },
  });
  const touched = formik.touched;
  const error = formik.errors;
  const values = formik.values;

  return (
    <div className="signup-bgr">
      <div className="signup-wrapper">
        <div className="signup-wrapper-title">
          <h2 className="signup-title">Sign Up</h2>
        </div>
        <div className="signup-form">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-wrapper">
              <div className="row">
                <div className="col form-group">
                  <label className="label-form">Name </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="first_name"
                    value={values.first_name}
                    onChange={formik.handleChange}
                  />
                  {error.first_name && touched.first_name && (
                    <p className="errors">{error.first_name}</p>
                  )}
                </div>
                <div className="col form-group">
                  <label className="label-form invisible">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="last_name"
                    value={values.last_name}
                    onChange={formik.handleChange}
                  />
                  {error.last_name && touched.last_name && (
                    <p className="errors">{error.last_name}</p>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label className="label-form">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={values.email}
                  onChange={formik.handleChange}
                />
                {error.email && touched.email && (
                  <p className="errors">{error.email}</p>
                )}
              </div>

              <div className="form-group">
                <label className="label-form">Password</label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type={isShow ? "text" : "password"}
                    placeholder="Enter your password"
                    name="password"
                    value={values.password}
                    onChange={formik.handleChange}
                  />
                  <span className="input-group-append">
                    <div className="input-group-text">
                      <i
                        className={isShow ? "fas fa-eye" : "fa fa-eye-slash"}
                        onClick={() => setIsShow((prevState) => !prevState)}
                      />
                    </div>
                  </span>
                </div>
                {error.password && touched.password && (
                  <p className="errors">{error.password}</p>
                )}
              </div>
              <div className="form-group">
                <label className="label-comfirm">Confirm password</label>
                <div className="input-group">
                  <input
                    className="form-control"
                    type={isShowConfirm ? "text" : "password"}
                    placeholder="Confirm your password"
                    name="confirm_password"
                    value={values.confirm_password}
                    onChange={formik.handleChange}
                  />
                  <span className="input-group-append">
                    <div className="input-group-text">
                      <i
                        className={
                          isShowConfirm ? "fas fa-eye" : "fa fa-eye-slash"
                        }
                        onClick={() =>
                          setIsShowConfirm((prevState) => !prevState)
                        }
                      />
                    </div>
                  </span>
                </div>
                {error.confirm_password && touched.confirm_password && (
                  <p className="errors">{error.confirm_password}</p>
                )}
              </div>
              <p className="text-muted-1">
                By clicking Sign Up, you agree with our{" "}
                <span className="font-weight-bold">Privacy Policy</span>
              </p>
              <div className="form-group btn-signup">
                <button type="submit" className="btn btn-block">
                  {" "}
                  SIGN UP
                </button>
              </div>
              <p className="text-muted-2">
                Already have an account ?{" "}
                <Link to="/login" className="font-weight-bold">
                  Log In Here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <img src={signupBackground} alt="bgImage" className="bgImage" />
    </div>
  );
};

export default SignUp;
