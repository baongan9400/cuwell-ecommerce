import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  getCities,
  getDistrict,
  getCommute,
} from "redux/actions/signup/address.action";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./edituser.css";
import userInfoApi from "api/user/userInfoApi";
import { pushToast } from "components/Toast";
import * as actions from "redux/actions/login/authAction";
function EditUser() {
  const { user } = useSelector((state) => state.userReducer);
  const { name, email, phone, address } = user;
  const { commune, district, city } = address;
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [check, setCheck] = useState({
    checkCity: false,
    checkDistrict: false,
    checkCommute: false,
  });

  const dispatch = useDispatch();
  const cities = useSelector((state) => {
    return state.addressReducer.cities.slice(1);
  });

  const districts = useSelector((state) => {
    return state.addressReducer.districts;
  });

  const commutes = useSelector((state) => {
    return state.addressReducer.commutes;
  });
  const findByName = (array, name) => {
    return array.find((element) => element.name === name).id;
  };

  useEffect(() => {
    dispatch(getCities());
  }, []);
  const callEditProfile = async (data) => {
    try {
      setLoading(true);
      data.ratingAverage = user.ratingAverage;
      const result = await userInfoApi.updateUser(data, user.id);
      if (result) {
        setLoading(false);
        pushToast("success", "Update profile successfully");
        dispatch(actions.userLoggedIn(result.payload.result, user.id));
      }
    } catch (error) {
      pushToast("error", "Failed to update profile ");
    }
  };
  const onSubmit = (data) => {
    callEditProfile(data);
  };

  if (!user) {
    return <Redirect to="/home" />;
  } else
    return (
      <div>
        <div className={loading ? "loading-bg" : "loading-bg d-none"}>
          <img
            src="https://cutewallpaper.org/21/loading-gif-transparent-background/Free-Content-Discovery-Influencer-Marketing-Tool-Buzzsumo-.gif"
            alt="Loading..."
          />
        </div>
        <div className="mb-3">
          <div className="row gutters">
            <div className="col">
              <form
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
              >
                <div className="card-edit h-100">
                  <div className="card-body p-5">
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h5 className="mb-2 text-primary fw-bold mb-3">
                          Personal Details
                        </h5>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="fullName">Full Name</label>
                          <input
                            {...register("name")}
                            type="text"
                            className="form-control"
                            id="fullName"
                            defaultValue={name}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="eMail">Email</label>
                          <input
                            {...register("email")}
                            type="email"
                            className="form-control"
                            id="eMail"
                            value={email}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="phone">Phone</label>
                          {errors.phone && (
                            <p
                              className="ml-2 text-danger mt-1"
                              style={{ fontSize: "16px" }}
                            >
                              {errors.phone.message}
                            </p>
                          )}
                          <input
                            {...register("phone")}
                            type="number"
                            className="form-control"
                            id="phone"
                            required
                            defaultValue={phone}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <h6 className="mt-3 mb-2 text-primary">Address</h6>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                          <label htmlFor="ciTy">City</label>
                          <div className="form-group mb-3">
                            <select
                              {...register("city")}
                              className="form-control rounded-pill border-0 shadow-sm px-4"
                              onChange={(e) => {
                                if (cities.length > 0) {
                                  let city_id = findByName(
                                    cities,
                                    e.target.value
                                  );
                                  setCheck({ ...check, checkCity: true });
                                  dispatch(getDistrict(city_id));
                                }
                              }}
                              required
                            >
                              {!check.checkCity && <option>{city}</option>}
                              {cities.length > 0 &&
                                cities.map((value) => (
                                  <option value={value.name} key={value.id}>
                                    {value.name}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="form-group">
                          <label htmlFor="Street">District</label>
                          <select
                            {...register("district")}
                            className="form-control rounded-pill border-0 shadow-sm px-4"
                            onChange={(e) => {
                              if (districts.length > 0) {
                                let district_id = findByName(
                                  districts,
                                  e.target.value
                                );
                                setCheck({ ...check, checkDistrict: true });
                                dispatch(getCommute(district_id));
                              }
                            }}
                          >
                            {!check.checkDistrict && (
                              <option>{district}</option>
                            )}
                            {districts.length > 0 &&
                              districts.map((value) => (
                                <option value={value.name} key={value.id}>
                                  {value.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className="form-group">
                          <label htmlFor="sTate">Commune</label>
                          {/* <input type="text" className="form-control" id="sTate" defaultValue={commune} /> */}
                          <div className="form-group mb-3">
                            <select
                              {...register("commune")}
                              className="form-control rounded-pill border-0 shadow-sm px-4"
                              onChange={(e) => {
                                if (commutes.length > 0) {
                                  setCheck({ ...check, checkCommute: true });
                                }
                              }}
                              required
                            >
                              {!check.checkCommute && (
                                <option>{commune}</option>
                              )}
                              {commutes.length > 0 &&
                                commutes.map((value) => (
                                  <option value={value.name} key={value.id}>
                                    {value.name}
                                  </option>
                                ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row gutters mt-3">
                      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="text-right">
                          <Link
                            to="/profile"
                            className="btn btn-secondary mr-3"
                          >
                            Cancel
                          </Link>
                          <button
                            type="submit"
                            id="submit"
                            name="submit"
                            className="btn btn-info ms-3"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default EditUser;
