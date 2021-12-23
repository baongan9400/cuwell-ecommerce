import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import "./paymentStyle.css";
import { VNDformat } from "helper/utils";
import { Link } from "react-router-dom";
import paymentApi from "api/user/paymentApi";
import { pushToast } from "components/Toast";

function CartItem({ cartItem }) {
  const { id, title, price, images } = cartItem;

  return (
    <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
      <img
        src={images[0].url}
        alt=""
        className="rounded"
        width="80"
        height="65"
      />
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
});

function Payment(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(PaymentSchema),
  });
  const [loading, setLoading] = useState(false);

  const [total, setTotal] = useState(0);
  const { user } = useSelector((state) => state.userReducer);
  const callPayment = async (data) => {
    try {
      setLoading(true);
      data.ratingAverage = user.ratingAverage;
      const result = await paymentApi.checkout(data);
      if (result) {
        setLoading(false);
        window.open(result?.auth_url);
      }
    } catch (error) {
      pushToast("error", "Error checkout your cart! ");
    }
  };
  const listItems = useSelector((state) => {
    return state.cartReducer.list;
  });

  const onSubmit = (data) => {
    callPayment(data);
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
      <div
        className="container pt-5 rounded cart"
        style={{ marginTop: "140px" }}
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
              <h4 className="type d-block mt-3 mb-1">Paypal</h4>
              <label className="radio">
                {" "}
                <input type="radio" name="card" value="payment" />
                <span>
                  <img
                    width="30"
                    src="https://img.icons8.com/officel/48/000000/paypal.png"
                    alt=""
                  />
                </span>
              </label>
              <form onSubmit={handleSubmit(onSubmit)}>
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
