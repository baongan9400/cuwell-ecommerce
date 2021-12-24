import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import "./paymentStyle.scss";
import { VNDformat } from "helper/utils";
import { Link } from "react-router-dom";
import paymentApi from "api/user/paymentApi";
import { pushToast } from "components/Toast";
import useModal from "hook/useModal";
import ModalPayByCashSuccess from "modals/ModalPayByCashSuccess";
import { useDispatch } from "react-redux";
import { loadCartAction } from "redux/actions/cartAction";

function CartItem({ cartItem }) {
  const { title, price, images } = cartItem;

  return (
    <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
      <img src={images[0].url} alt="" className="rounded" />
      <div className="d-flex col-12 ms-2">
        <span className="col-6 pl-1 post-title">{title}</span>
        <span className="col-4 text-danger pl-1">{VNDformat(price)}</span>
      </div>
    </div>
  );
}

const PaymentSchema = yup.object().shape({
  street: yup.string().required("No. Street is required!"),
  commune: yup.string().required("Commune is required!"),
  district: yup.string().required("District is required!"),
  city: yup.string().required("City is required!"),
  payment: yup.string().required("City is required!"),
});

function Payment(props) {
  const { isShowing, toggle } = useModal();
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(PaymentSchema),
  });
  const [loading, setLoading] = useState(false);
  const [isPay, setIsPay] = useState(false);

  const [total, setTotal] = useState(0);
  const { user } = useSelector((state) => state.userReducer);
  const callPayByPaypal = async (data) => {
    try {
      setLoading(true);
      const result = await paymentApi.checkout(data);
      if (result) {
        setLoading(false);
        window.open(result?.auth_url);
      }
    } catch (error) {
      pushToast("error", "Error checkout your cart! ");
    }
  };
  const callPayByOffline = async (data) => {
    try {
      const result = await paymentApi.checkoutByCash(data);
      if (result) {
        setIsPay(true);
        loadCartAction();
      }
    } catch (error) {
      pushToast("error", "Error checkout your cart! ");
    }
  };
  const listItems = useSelector((state) => {
    return state.cartReducer.list;
  });

  const onSubmit = (data) => {
    switch (data.payment) {
      case "paypal":
        callPayByPaypal(data);
        break;
      case "delivery":
        callPayByOffline(data);
        toggle();
        break;

      default:
        break;
    }
    console.log(data);
  };

  useEffect(() => {
    let total_ = 0;
    listItems.forEach((element) => {
      total_ = total_ + element.price;
    });
    setTotal(total_);
  }, []);

  return (
    <div>
      <div className={loading ? "loading-bg" : "loading-bg d-none"}>
        <img
          src="https://cutewallpaper.org/21/loading-gif-transparent-background/Free-Content-Discovery-Influencer-Marketing-Tool-Buzzsumo-.gif"
          alt="Loading..."
        />
      </div>
      {isPay ? (
        <ModalPayByCashSuccess toggle={toggle} isShowing={isShowing} />
      ) : (
        <></>
      )}
      <div
        className="container pt-5 rounded cart"
        style={{ marginTop: "100px" }}
      >
        <div className="row">
          <div className="col-md-8">
            <div className="product-details mr-2">
              {/* <hr> */}
              <Link to={{ pathname: "/home" }} style={{ color: "blue" }}>
                <i className="fas fa-arrow-left"></i>
                <span className="ms-2 text">Back to Homepage</span>
              </Link>
              <div className="d-flex justify-content-between ms-2">
                <span>
                  You have{" "}
                  {listItems.posts && <span>{listItems.posts.length}</span>}{" "}
                  items in your cart
                </span>
              </div>
              {listItems &&
                listItems.map((item) => (
                  <CartItem key={item.id} cartItem={item} />
                ))}
            </div>
          </div>
          <div className="col-md-4">
            <div className="payment-info" style={{ marginTop: -40 }}>
              <div className="d-flex justify-content-between align-items-center">
                <span className="title-payment">Payment Information</span>
                <img
                  className="rounded"
                  src={"https://i.pravatar.cc/150?u=" + user?.id}
                  width="40"
                  alt=""
                />
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col">
                    <h4 className="type d-block mt-3 mb-1">Paypal</h4>
                    <label className="radio">
                      {" "}
                      <input
                        type="radio"
                        name="payment"
                        value="paypal"
                        {...register("payment")}
                        checked
                      />
                      <span>
                        <img
                          width="30"
                          src="https://img.icons8.com/officel/48/000000/paypal.png"
                          alt=""
                        />
                      </span>
                    </label>
                  </div>
                  <div className="col">
                    <h4 className="type d-block mt-3 mb-1">Payment by cash</h4>
                    <label className="radio">
                      {" "}
                      <input
                        type="radio"
                        name="payment"
                        value="delivery"
                        {...register("payment")}
                      />
                      <span>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ marginTop: -5 }}
                        >
                          <path
                            d="M3 10C3 7.17157 3 5.75736 3.87868 4.87868C4.75736 4 6.17157 4 9 4H15C17.8284 4 19.2426 4 20.1213 4.87868C21 5.75736 21 7.17157 21 10V11.7C21 11.8414 21 11.9121 20.9561 11.9561C20.9121 12 20.8414 12 20.7 12H16.5C16.0353 12 15.803 12 15.6098 12.0384C14.8164 12.1962 14.1962 12.8164 14.0384 13.6098C14 13.803 14 14.0353 14 14.5C14 14.9647 14 15.197 14.0384 15.3902C14.1962 16.1836 14.8164 16.8038 15.6098 16.9616C15.803 17 16.0353 17 16.5 17H20.8571C20.936 17 21 17.064 21 17.1429C21 18.7208 19.7208 20 18.1429 20H9C6.17157 20 4.75736 20 3.87868 19.1213C3 18.2426 3 16.8284 3 14V10Z"
                            fill="#1653FF"
                            fill-opacity="0.25"
                          />
                          <path
                            d="M14 14C14 12.8954 14.8954 12 16 12H20.85C20.9328 12 21 12.0672 21 12.15V16.85C21 16.9328 20.9328 17 20.85 17H16C14.8954 17 14 16.1046 14 15V14Z"
                            fill="#647DFF"
                          />
                          <rect
                            x="6"
                            y="7"
                            width="6"
                            height="1"
                            rx="0.5"
                            fill="#4C66ED"
                          />
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <label className="credit-card-label">Currency</label>
                  <select className="form-control" {...register("currency")}>
                    <option value="USD">United States dollar (USD)</option>
                  </select>
                </div>
                <div className="mt-3">
                  <label className="credit-card-label">Address</label>
                  {errors.street && (
                    <p className="badge text-danger">{errors.street.message}</p>
                  )}
                  {errors.commune && (
                    <p className="badge text-danger">
                      {errors.commune.message}
                    </p>
                  )}
                  <div class="input-group">
                    <input
                      type="text"
                      className="form-control"
                      {...register("street")}
                      name="street"
                      placeholder="No. Street"
                    />

                    <input
                      type="text"
                      className="form-control"
                      {...register("commune")}
                      name="commune"
                      defaultValue={user.address.commune}
                      placeholder="Commune"
                    />
                  </div>
                </div>

                <div className="mt-3">
                  <label className="credit-card-label">District</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("district")}
                    defaultValue={user.address.district}
                    name="district"
                  />
                  {errors.district && (
                    <p className="badge bg-danger">{errors.district.message}</p>
                  )}
                </div>
                <div className="mt-3">
                  <label className="credit-card-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register("city")}
                    defaultValue={user.address.city}
                    name="city"
                  />
                  {errors.city && (
                    <p className="badge bg-danger">{errors.city.message}</p>
                  )}
                </div>
                <div>
                  <input type="text" hidden {...register("price")} value="" />
                </div>
                <div className="d-flex justify-content-between information mt-3">
                  <span>Total</span>
                  <span>{VNDformat(total)} </span>
                </div>
                {/* {checkFailed && <div>
                  <p className="badge badge-danger" style={{fontSize: '12px'}}>Cant connect to paypal! Please try later.</p>
                </div>} */}
                <button
                  className="btn btn-primary btn-block d-flex justify-content-between mt-3"
                  type="submit"
                  disabled={!total > 0 && "disabled"}
                >
                  <span>{VNDformat(total)} </span>
                  <span>
                    {" "}
                    &#160; Checkout
                    <i className="fa fa-long-arrow-right ms-1"></i>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
