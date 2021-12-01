import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import "./paymentStyle.css";
// import { getCartItems } from 'redux/actions/user/payment.action'
import { VNDformat } from "helper/utils";
import { Link } from "react-router-dom"

function CartItem({ cartItem }) {
  // console.log("cartItem", cartItem)
  const { id, title, price, images } = cartItem;

  return (
    <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
      <img src={images[0].url} alt="" className="rounded" width="80" height="65" />
      <div className="d-flex col-12 ms-2">
        <span className="col-6 pl-1 post-title">{title}</span>
        <span className="col-4 text-danger pl-1">{VNDformat(price)} VND</span>
      </div>
    </div>
  );
}

const PaymentSchema = yup.object().shape({
  description: yup.string().required('Description is required'),
});

function Payment(props) {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(PaymentSchema)
  });
   const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  // const data = useSelector(state => {
  //   return state.paymentReducer.data;
  // });

  // const check = useSelector(state => {
  //   return state.paymentReducer.check;
  // });

  const listItems = useSelector(state => {
    return     state.cartReducer.list;
  });
  // const checkFailed = useSelector(state => {
  //   return state.paymentReducer.checkFailed;
  // })

  const onSubmit = (data) => {
    console.log("payment data", data);
    // dispatch(pay(data))
  };

  useEffect(() => {
    let total_ =0;
    listItems.forEach(element => {
      total_ = total_ +  element.price;
    });
    setTotal(total_);
    // dispatch(getCartItems());
  }, []);

  return (
    <div>
      <div className="loading-bg d-none">
        <img src="{loading}" alt="Loading..." />
      </div>
      <div className="container pt-5 rounded cart" style={{marginTop: "140px"}}>
        <div className="row">
          <div className="col-md-8">
            <div className="product-details mr-2">
              {/* <hr> */}
              <Link to={{pathname: '/home',}} style={{color: 'blue'}}><i className="fas fa-arrow-left"></i>
                  <span className="ms-2 text">Back to Homepage</span>
                </Link>
              <div className="d-flex justify-content-between ms-2"><span>You have {listItems.posts && <span>{listItems.posts.length}</span>} items in your cart</span>
              </div>
              {listItems && listItems.map(item =>
                <CartItem
                  key={item.id}
                  cartItem={item} />
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="payment-info">
              <div className="d-flex justify-content-between align-items-center">
                <span className="title-payment">Payment Information</span>
                <img className="rounded" src="https://i.imgur.com/WU501C8.jpg" width="30" alt="" />
              </div>
              <h4 className="type d-block mt-3 mb-1">Paypal</h4>
              <label className="radio"> <input type="radio" name="card" value="payment"/>
              <span>
                <img width="30" src="https://img.icons8.com/officel/48/000000/paypal.png" alt="" />
                </span>
              </label>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-3'>
                  <label className="credit-card-label">Currency</label>
                  <select className="form-control" {...register("currency")}>
                    <option value="USD">United States dollar (USD)</option>
                    <option value="THB">Thai baht (THB)</option>
                    <option value="RUB">Russian ruble (RUB)</option>
                  </select>
                </div>
                <div className='mt-3'>
                  <label className="credit-card-label">Description</label>
                  <input type="text" className="form-control" {...register("description")} />
                  {errors.description && <p className="badge badge-danger">{errors.description.message}</p>}
                </div>
                <div>
                  <input type="text" hidden {...register("price")} value="" />
                </div>
                {/* <div className="row">
              <div className="col-md-6"><label className="credit-card-label">Date</label><input type="text" className="form-control credit-inputs" placeholder="12/24" /></div>
              <div className="col-md-6"><label className="credit-card-label">CVV</label><input type="text" className="form-control credit-inputs" placeholder="342" /></div>
            </div> */}
                {/* <hr className="line"> */}
                {/* <div className="d-flex justify-content-between information"><span>Subtotal</span><span>$3000.00</span></div> */}
                {/* <div className="d-flex justify-content-between information"><span>Shipping</span><span>$20.00</span></div> */}
                <div className="d-flex justify-content-between information mt-3">
                  <span>Total(Incl. taxes)</span><span>{VNDformat(total)} </span>
                </div>
                {/* {checkFailed && <div>
                  <p className="badge badge-danger" style={{fontSize: '12px'}}>Cant connect to paypal! Please try later.</p>
                </div>} */}
                <button
                  className="btn btn-primary btn-block d-flex justify-content-between mt-3"
                  type="submit"
                  disabled={!total > 0 && 'disabled'}
                >
                  <span>{VNDformat(total)} </span><span> &#160; Checkout<i className="fa fa-long-arrow-right ms-1"></i></span>
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