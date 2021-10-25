import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Login.scss";

const Login = () => {
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(5, "Minimum 5 characters")
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
    <div className="login-bgr">
      <div className="login-wrapper">
        <div className="login-wrapper-title">
          <h2 className="login-title">Log In</h2>
          <p>Hello and welcome to Cuwell !</p>
        </div>

        <div className="login-form">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group login-form-group">
              <label>Email</label>
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
            <div className="login-form-group ">
              <label>Password</label>
              <input
                className="input-password form-control"
                type={isShowPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                value={values.confirm_password}
                onChange={formik.handleChange}
              />
              <div
                className="show-password"
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? (
                  <i className="far fa-eye" />
                ) : (
                  <i className="far fa-eye-slash" />
                )}
              </div>
              {error.password && touched.password && (
                <p className="errors">{error.password}</p>
              )}
            </div>

            <div className="login-form-group remember-forgot-group">
              <label className="login-form-group-remember">
                <p>Remember me</p>
                <input type="checkbox" />
                <span className="remeber-mark"></span>
              </label>

              <div className="login-form-forgot">
                <Link to="#" className="forgot-password">
                  Forgot password
                </Link>
              </div>
            </div>
            <div className="login-form-submit">
              <button className="login-form-submit-btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="directional-signup">
          <p>Don’t have an account? </p>
          <Link to="/signup" className="directional-signup-link">
            Sign Up Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
