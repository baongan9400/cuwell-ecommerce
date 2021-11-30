import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import "./profile.css";
import { VNDformat } from "helper/utils";
import { Link } from "react-router-dom";
import NavBar from "components/NavBar/NavBar";

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
function ProgressBar({ label, width, aria_valuenow }) {
  const styleObject = { maxWidth: width };
  return (
    <div>
      <small>{label}</small>
      <div className="progress mb-3" style={{ height: "15px" }}>
        <div
          className="progress-bar progress-bar-striped bg-danger"
          role="progressbar"
          style={styleObject}
          aria-valuenow={{ aria_valuenow }}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <span className="title text-warning">
            {Math.round(aria_valuenow * 100 + Number.EPSILON) / 100}%
          </span>
        </div>
      </div>
    </div>
  );
}

function Profile(props) {
  const reduxUser = useSelector((state) => state.userReducer);
  console.log(reduxUser);
  // const [total, setTotal_all_orders] = useState();
  // const [total_buy, setTotalBuy] = useState();

  // const [list, setList] = useState([]);
  // const [list_buy, setListBuy] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);

  // const fetchStatistic = async () => {
  //   try {
  //     setIsLoading(true);
  //     const response_sale = await userApi.statisticByPrice();
  //     const response_buy = await userApi.statisticBuy();

  //     setTotal_all_orders(response_sale[0]);
  //     setList(response_sale.slice(1, response_sale.length));

  //     setTotalBuy(response_buy[0]);
  //     setListBuy(response_buy.slice(1, response_buy.length));

  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log("failed to fetch list users", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchStatistic();
  // }, [])

  // const handleClickCreatePostButton = () =>
  // {
  //   history.push('/create-post')
  // }

  const data = {
    user: {
      id: 12,
      name: "Harry Potter",
      email: "user11@gmail.com",
      phone: "123456789",
      address: {
        createdAt: "2021-06-28T13:07:55.574+00:00",
        updatedAt: "2021-07-12T09:58:44.192+00:00",
        id: 1,
        commune: "Phường An Khê",
        district: "Quận Thanh Khê",
        city: "Hậu Giang",
      },
      auth: 1,
      roles: ["ROLE_USER"],
      avatar: null,
      deletedAt: null,
    },
  };

  // if (!data) {
  //   return <Redirect to="/home" />;
  // }// else
  return (
    <div>
      <NavBar />
      <div className="container" style={{ marginTop: "140px" }}>
        <div className="main-body ">
          <div className="row gutters-sm ">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body card-profile">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={
                        data.user.avatar
                          ? data.user.avatar
                          : "https://i.pravatar.cc/150?u=" + data.user.id
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
                  {/* <ListItem label="Notification" src='megaphone.png' link="#"></ListItem>
                  <ListItem label="Voucher" src='voucher.png' link="#"></ListItem> */}
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
                        to={{ pathname: `/edit_profile` }}
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/*<div className="row gutters-sm">
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                     <div className="card-body card-statistic">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info me-2">BUY</i>Statistics</h6>
                      {isLoading || total == null || list == [] ? (
                        <img src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif" className="img-responsive" style={{ width: '100%', height: '90%' }}></img>
                      ) : (
                        <div>
                          <h6 className="d-flex align-items-center ml-5 mb-3"><i className="material-icons text-success ml-5 me-2">{VNDformat(total.total_all_orders)}</i></h6>
                          {list.map(item => (
                            <ProgressBar label={item.category} width={`${item.percentage}%`} aria_valuenow={item.percentage} ></ProgressBar>
                          ))}
                        </div>
                      )}
                    </div> 
                  </div>
                </div>
                <div className="col-sm-6 mb-3">
                  <div className="card h-100">
                    {/* <div className="card-body card-statistic">
                      <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info me-2">SALE</i>Statistics</h6>
                      {isLoading || total_buy==null || list_buy==[] ? (
                        <img src="https://i.pinimg.com/originals/6b/67/cb/6b67cb8a166c0571c1290f205c513321.gif" className="img-responsive" style={{ width: '100%', height: '90%' }}></img>
                        ) : (
                        <div>
                          <h6 className="d-flex align-items-center ml-5 mb-3 text-success"><i className="material-icons text-success ml-5 me-2">{VNDformat(total_buy.total_price)}</i></h6>
                          {list_buy.map(item => (
                            <ProgressBar label={item.category} width={`${item.percentage}%`} aria_valuenow={item.percentage} ></ProgressBar>
                          ))}
                        </div>
                      )}
                    </div> 
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// function mapStateToProps(state) {
//   const { user } = state.userReducer;
//   return {
//     user,
//   };
// }

export default Profile;
