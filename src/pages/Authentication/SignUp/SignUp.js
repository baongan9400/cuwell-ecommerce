import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./SignUp.scss";
import {
  getCities,
  getDistrict,
  getCommute,
} from "redux/actions/signup/address.action";
import signupBackground from "../../../assets/images/bottom-bg-signup.png";
import { register } from "redux/actions/signup/register.action";

const SignUp = () => {
  const [check, setCheck] = useState({
    checkCity: false,
    checkDistrict: false,
    checkCommute: false,
  });
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      city: "",
      district: "",
      commute: "",
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
    }),
    onSubmit: (values) => {
      dispatch(
        register(
          values.email,
          values.first_name + " " + values.last_name,
          values.phone,
          values.city,
          values.district,
          values.commute
        )
      );
    },
  });
  const dispatch = useDispatch();
  const cities = useSelector((state) => {
    return state.addressReducer.cities.slice(1);
  });
  const findByName = (array, name) => {
    return array.find((element) => element.name === name).id;
  };
  const districts = useSelector((state) => {
    return state.addressReducer.districts;
  });

  const commutes = useSelector((state) => {
    return state.addressReducer.commutes;
  });
  useEffect(() => {
    dispatch(getCities());
  }, []);

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
                <label className="label-form">Phone</label>
                <div className="input-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    pattern="[0]{1}[0-9]{9}"
                    required
                    name="phone"
                    value={values.phone}
                    onChange={formik.handleChange}
                  />
                </div>
                {error.phone && touched.phone && (
                  <p className="errors">{error.phone}</p>
                )}
              </div>
              <div className="form-group">
                <label className="label-form">City</label>
                <select
                  className="form-control rounded border-0 shadow-sm px-4 address"
                  style={{ backgroundColor: "#e7e7e7" }}
                  onChange={(e) => {
                    if (cities.length > 0) {
                      let city_id = findByName(cities, e.target.value);
                      setCheck({ ...check, checkCity: true });
                      dispatch(getDistrict(city_id));
                      formik.setFieldValue("city", e.target.value);
                    }
                  }}
                >
                  {!check.checkCity && (
                    <option>&#8594;Select city&#8592;</option>
                  )}
                  {cities.length > 0 &&
                    cities.map((value, index) => (
                      <option value={value.name} key={value.id}>
                        {value.name}
                      </option>
                    ))}
                </select>
              </div>

              <div class="row">
                <div className="col-md-6 form-group">
                  <label className="label-form">District</label>
                  <select
                    className="form-control rborder-0 shadow-sm px-4 address"
                    style={{ backgroundColor: "#e7e7e7" }}
                    onChange={(e) => {
                      if (districts.length > 0) {
                        let district_id = findByName(districts, e.target.value);
                        setCheck({ ...check, checkDistrict: true });
                        dispatch(getCommute(district_id));
                        formik.setFieldValue("district", e.target.value);
                      }
                    }}
                    // required
                  >
                    {!check.checkDistrict && (
                      <option>&#8594;Select district&#8592;</option>
                    )}
                    {districts.length > 0 &&
                      districts.map((value, index) => (
                        <option value={value.name} key={value.id}>
                          {value.name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-md-6 form-group">
                  <label className="label-form">Commute</label>
                  <select
                    className="form-control border-0 shadow-sm px-4 address"
                    style={{ backgroundColor: "#e7e7e7" }}
                    onChange={(e) => {
                      if (commutes.length > 0) {
                        setCheck({ ...check, checkCommute: true });
                        formik.setFieldValue("commute", e.target.value);
                      }
                    }}
                    required
                  >
                    {!check.checkCommute && (
                      <option>&#8594;Select commute&#8592;</option>
                    )}
                    {commutes.length > 0 &&
                      commutes.map((value, index) => (
                        <option value={value.name} key={value.id}>
                          {value.name}
                        </option>
                      ))}
                  </select>
                </div>
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
