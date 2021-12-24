import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./profile.scss";
import NavBar from "components/NavBar/NavBar";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import userInfoApi from "api/user/userInfoApi";
import { pushToast } from "components/Toast";
import UserManagePosts from "components/UserPosts/UserManagePosts";
import EditUser from "components/EditUser";
import UserBuyHistory from "components/UserHistory/UserBuyHistory";
import UserSaleHistory from "components/UserHistory/UserSaleHistory";

function Profile() {
  const [component, setComponent] = useState("");
  const reduxUser = useSelector((state) => state.userReducer);
  const ProfileDetail = () => {
    return (
      <div>
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
                {reduxUser.user.address.district}, {reduxUser.user.address.city}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <button
                  className="btn btn-info"
                  onClick={() => setComponent("/edit-profile")}
                >
                  Edit
                </button>
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
                      <button className="btn btn-primary px-5" type="submit">
                        Save
                      </button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="oldPassword" className="form-label fw-bold">
                      Current password
                    </label>
                    {error.oldPassword && touched.oldPassword && (
                      <p className="text-danger fs-6">{error.oldPassword}</p>
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
                    <label for="newPassword" className="form-label fw-bold">
                      New password
                    </label>
                    {error.newPassword && touched.newPassword && (
                      <p className="text-danger fs-6">{error.newPassword}</p>
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
    );
  };

  const ListItem = ({ label, link }) => {
    let img = <></>;
    switch (label) {
      case "Profile":
        img = (
          <svg
            width="30"
            height="30"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.9916 5.32575C16.803 5.32575 8.81334 10.4584 4.73368 18.02C4.41438 18.6118 3.6758 18.8327 3.084 18.5134C2.4922 18.1941 2.27129 17.4555 2.59058 16.8637C7.07821 8.54605 15.8725 2.89062 25.9916 2.89062C36.0836 2.89062 44.8574 8.51656 49.3563 16.7955C49.6774 17.3864 49.4587 18.1256 48.8679 18.4467C48.277 18.7678 47.5378 18.5491 47.2167 17.9582C43.1267 10.4317 35.1555 5.32575 25.9916 5.32575ZM43.7794 28.9018C43.4512 18.2943 33.8442 10.0257 22.7907 11.9443C14.2508 13.4278 8.19362 21.3185 8.19362 30.1131C8.19362 33.7989 8.61793 37.4726 9.45414 41.0646L9.45462 41.0666L9.63861 41.8632C9.78994 42.5184 9.38149 43.1722 8.7263 43.3235C8.07111 43.4748 7.41729 43.0664 7.26596 42.4112L7.08245 41.6167C7.08235 41.6163 7.08225 41.6159 7.08215 41.6154C6.20424 37.844 5.7585 33.9855 5.7585 30.1131C5.7585 20.2623 12.5457 11.2523 22.3741 9.5451L22.3742 9.54508C34.9142 7.36842 45.84 16.7666 46.2134 28.8261C46.3414 32.9157 43.3438 36.7901 39.0655 37.011L39.0655 37.011C34.8148 37.2302 31.2824 33.9323 31.1172 29.7697C31.0161 27.2267 29.5315 25.0623 27.329 24.5129L27.3283 24.5127C23.9077 23.6572 20.8692 26.2082 20.8692 29.4659C20.8692 34.0185 21.9581 37.4651 23.9851 40.0923C26.0187 42.7282 29.094 44.6656 33.2963 46.0125C33.9367 46.2177 34.2894 46.9032 34.0842 47.5435C33.8789 48.1839 33.1934 48.5366 32.5531 48.3314C28.0431 46.886 24.4819 44.7227 22.0571 41.5798C19.6256 38.4282 18.4341 34.4179 18.4341 29.4659C18.4341 24.6585 22.9282 20.902 27.9192 22.1504L27.6237 23.3316L27.9184 22.1502C27.9186 22.1503 27.9189 22.1503 27.9192 22.1504C31.4263 23.0256 33.4177 26.3372 33.5504 29.6729L33.5504 29.673C33.6623 32.4932 36.0563 34.7278 38.94 34.5791L39.0027 35.7951L38.94 34.5791C41.7052 34.4363 43.8722 31.8647 43.7794 28.9023L43.7794 28.9018ZM37.4519 29.4616C37.4519 23.0161 32.1298 17.8117 25.6388 18.0073C19.4211 18.1954 14.5314 23.6445 14.5314 29.9941C14.5314 35.1269 16.1144 40.1356 19.0675 44.3352L19.0675 44.3352L20.7645 46.7487C21.1513 47.2987 21.0189 48.0582 20.4689 48.445C19.9188 48.8318 19.1593 48.6994 18.7726 48.1493L17.0756 45.7359C13.8338 41.1257 12.0963 35.6277 12.0963 29.9941C12.0963 22.4602 17.9038 15.8051 25.5652 15.5733L25.5653 15.5733C33.434 15.3361 39.887 21.6471 39.887 29.4616C39.887 30.134 39.3419 30.6791 38.6694 30.6791C37.997 30.6791 37.4519 30.134 37.4519 29.4616ZM25.9916 28.2462C26.6641 28.2462 27.2092 28.7913 27.2092 29.4637C27.2092 35.7894 32.3375 40.9196 38.6651 40.9196C39.3375 40.9196 39.8826 41.4647 39.8826 42.1372C39.8826 42.8096 39.3375 43.3547 38.6651 43.3547C30.9924 43.3547 24.7741 37.134 24.7741 29.4637C24.7741 28.7913 25.3192 28.2462 25.9916 28.2462Z"
              fill="#26aa99"
            />
          </svg>
        );
        break;
      case "My posts":
        img = (
          <svg
            width="30"
            height="30"
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.21777 7.00616C6.21777 6.33371 6.76291 5.78857 7.43536 5.78857H24.5638C25.2363 5.78857 25.7814 6.33371 25.7814 7.00616V36.981C25.7814 42.3834 21.402 46.7628 15.9996 46.7628C10.5972 46.7628 6.21777 42.3834 6.21777 36.981V7.00616ZM8.65294 8.22375V36.981C8.65294 41.0384 11.9422 44.3277 15.9996 44.3277C20.057 44.3277 23.3463 41.0384 23.3463 36.981V8.22375H8.65294ZM30.2687 8.83033C30.7442 8.35483 31.5151 8.35483 31.9906 8.83033L44.1023 20.942C44.5778 21.4175 44.5778 22.1884 44.1023 22.6639L30.937 35.8292C30.4615 36.3047 29.6906 36.3047 29.2151 35.8292C28.7396 35.3537 28.7396 34.5828 29.2151 34.1073L41.5194 21.803L31.1296 11.4132L30.5704 11.9725C30.0949 12.448 29.3239 12.448 28.8484 11.9725C28.3729 11.497 28.3729 10.7261 28.8484 10.2506L30.2687 8.83033ZM42.5753 28.4172C42.5753 27.7447 43.1204 27.1996 43.7929 27.1996H45.9749C46.6473 27.1996 47.1925 27.7447 47.1925 28.4172V45.5457C47.1925 46.2181 46.6473 46.7633 45.9749 46.7633H27.8608C27.1884 46.7633 26.6432 46.2181 26.6432 45.5457C26.6432 44.8732 27.1884 44.3281 27.8608 44.3281H44.7573V29.6348H43.7929C43.1204 29.6348 42.5753 29.0897 42.5753 28.4172ZM14.9552 38.4836C15.308 37.9112 16.0581 37.7332 16.6306 38.086L16.6351 38.0888C17.2075 38.4416 17.3855 39.1917 17.0327 39.7642C16.6798 40.3366 15.9297 40.5146 15.3573 40.1618L15.3528 40.159C14.7803 39.8061 14.6023 39.056 14.9552 38.4836Z"
              fill="#26aa99"
            />
          </svg>
        );
        break;
      case "Purchase history":
        img = (
          <svg
            width="30"
            height="30"
            viewBox="0 0 53 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.5604 8.31089C25.4687 7.5103 27.6186 7.5103 29.5269 8.31089L43.9072 14.344C46.6721 15.5039 46.6721 19.4215 43.9072 20.5815L29.5269 26.6146C27.6186 27.4151 25.4687 27.4151 23.5604 26.6146L9.18012 20.5815C6.41523 19.4215 6.41521 15.5039 9.18012 14.344L23.5604 8.31089ZM28.5848 10.5564C27.2792 10.0086 25.8082 10.0086 24.5025 10.5564L10.1222 16.5895C9.34803 16.9143 9.34802 18.0112 10.1222 18.336L24.5025 24.3691C25.8082 24.9168 27.2792 24.9168 28.5848 24.3691L42.9651 18.336C43.7393 18.0112 43.7393 16.9143 42.9651 16.5895L28.5848 10.5564ZM7.38117 27.5956C7.64132 26.9755 8.35488 26.6837 8.97496 26.9438L24.4991 33.4568C25.8047 34.0045 27.2757 34.0045 28.5814 33.4568L44.1055 26.9438C44.7256 26.6837 45.4391 26.9755 45.6993 27.5956C45.9594 28.2156 45.6676 28.9292 45.0476 29.1894L29.5235 35.7023C27.6152 36.5029 25.4652 36.5029 23.557 35.7023L8.03289 29.1894C7.41281 28.9292 7.12102 28.2156 7.38117 27.5956ZM7.38117 36.6761C7.64132 36.056 8.35488 35.7643 8.97496 36.0244L24.4991 42.5373C25.8047 43.0851 27.2757 43.0851 28.5814 42.5373L44.1055 36.0244C44.7256 35.7643 45.4391 36.056 45.6993 36.6761C45.9594 37.2962 45.6676 38.0098 45.0476 38.2699L29.5235 44.7828C27.6152 45.5834 25.4652 45.5834 23.557 44.7828L8.03289 38.2699C7.41281 38.0098 7.12102 37.2962 7.38117 36.6761Z"
              fill="#26aa99"
            />
          </svg>
        );
        break;
      case "Sales history":
        img = (
          <svg
            width="27"
            height="25"
            viewBox="0 0 44 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.82284 1.11786C7.04866 0.779139 7.42882 0.575684 7.83591 0.575684H36.6959C37.1029 0.575684 37.483 0.779065 37.7088 1.11769L43.4817 9.77373C43.6151 9.97377 43.6863 10.2088 43.6863 10.4493V16.3174C43.6863 16.6403 43.558 16.95 43.3297 17.1783C39.4117 21.0963 33.2185 21.3543 29.0009 17.9523C25.0806 21.1145 19.4534 21.1145 15.5331 17.9523C11.3154 21.3543 5.12229 21.0963 1.20427 17.1783C0.975935 16.95 0.847656 16.6403 0.847656 16.3174V10.4493C0.847656 10.2089 0.918808 9.97391 1.05215 9.77391L6.82284 1.11786ZM8.48753 3.0108L3.28278 10.8179V15.7929C6.54411 18.6955 11.5452 18.5833 14.6721 15.4564C15.1476 14.981 15.9185 14.981 16.394 15.4564C19.6372 18.6997 24.8967 18.6997 28.1399 15.4564C28.6154 14.981 29.3864 14.981 29.8618 15.4564C32.9887 18.5833 37.9898 18.6955 41.2512 15.7929V10.818L36.0444 3.0108H8.48753ZM4.95056 23.6606C5.623 23.6606 6.16812 24.2057 6.16812 24.8782V32.8113C6.16812 35.7255 8.53 38.0874 11.4442 38.0874H29.7076V27.7635C29.7076 27.0911 30.2527 26.546 30.9252 26.546C31.5976 26.546 32.1427 27.0911 32.1427 27.7635V38.0874H33.0897C36.004 38.0874 38.3658 35.7255 38.3658 32.8113V24.8782C38.3658 24.2057 38.9109 23.6606 39.5834 23.6606C40.2558 23.6606 40.8009 24.2057 40.8009 24.8782V32.8113C40.8009 37.0704 37.3488 40.5225 33.0897 40.5225H11.4442C7.18512 40.5225 3.733 37.0704 3.733 32.8113V24.8782C3.733 24.2057 4.27812 23.6606 4.95056 23.6606ZM13.6088 24.7104C14.2812 24.7104 14.8263 25.2556 14.8263 25.928V28.8133C14.8263 29.4858 14.2812 30.0309 13.6088 30.0309C12.9363 30.0309 12.3912 29.4858 12.3912 28.8133V25.928C12.3912 25.2556 12.9363 24.7104 13.6088 24.7104ZM22.267 24.7104C22.9394 24.7104 23.4845 25.2556 23.4845 25.928V28.8133C23.4845 29.4858 22.9394 30.0309 22.267 30.0309C21.5945 30.0309 21.0494 29.4858 21.0494 28.8133V25.928C21.0494 25.2556 21.5945 24.7104 22.267 24.7104Z"
              fill="#26aa99"
            />
          </svg>
        );
        break;
      default:
        break;
    }
    return (
      <button
        onClick={() => setComponent(link)}
        style={{ color: "inherit", textDecoration: "inherit" }}
        className="btn btn-outline-light list-group-item"
      >
        <li className="d-flex justify-content-between align-items-center flex-wrap">
          <h6 className="mb-0">
            <span className="mx-3"> {img}</span>
            {label}
          </h6>
        </li>
      </button>
    );
  };
  const [loading, setLoading] = useState(false);

  const StartRating = ({ rating }) => {
    var rows = [];
    for (var i = 0; i < rating; i++) {
      rows.push(<span className="fa fa-star checked start-check"></span>);
    }
    for (var j = 0; j < 5 - rating; j++) {
      rows.push(<span className="fa fa-star start-uncheck"></span>);
    }
    return rows;
  };
  const callResetPass = async (data) => {
    try {
      setLoading(true);
      const result = await userInfoApi.resetPassword(data);
      if (result) {
        setLoading(false);
        pushToast("success", "Your password was reset successfully!");
      }
    } catch (error) {
      pushToast("error", "Failed to reset password");
    }
  };
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
      callResetPass(values);
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
      <div className={loading ? "loading-bg" : "loading-bg d-none"}>
        <img
          src="https://cutewallpaper.org/21/loading-gif-transparent-background/Free-Content-Discovery-Influencer-Marketing-Tool-Buzzsumo-.gif"
          alt="Loading..."
        />
      </div>
      <div
        className="profile container-fluid p-5"
        style={{ marginTop: "10px" }}
      >
        <div className="main-body px-3 ">
          <div className="row gutters-sm ">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body card-profile">
                  <div className="container justify-content-center mt-5">
                    <div className="text-center mb-5">
                      <div className="circle-image">
                        {" "}
                        <img
                          src={
                            "https://i.pravatar.cc/150?u=" + reduxUser.user.id
                          }
                          alt="avatar"
                          width="50"
                        />{" "}
                      </div>{" "}
                      {/* <span className="dot"></span>{" "} */}
                      <span className="name mb-1 fw-bold fs-4">
                        {reduxUser.user.name}
                      </span>{" "}
                      {/* <small className="text-black-50">Tata Ace</small>{" "}
                      <small className="text-black-50 font-weight-bold">
                        QP09AA9090
                      </small> */}
                      {/* <div className="location mt-4">
                        {" "}
                        <span className="d-block">
                          <i className="fa fa-map-marker start"></i>{" "}
                          <small className="text-truncate ml-2">
                            Ganesha Road, preet vihar new delhi
                          </small>{" "}
                        </span>{" "}
                        <span>
                          <i className="fa fa-map-marker stop mt-2"></i>{" "}
                          <small className="text-truncate ml-2">
                            Mandir Road, Mayur vihar, new delhi
                          </small>{" "}
                        </span>{" "}
                      </div> */}
                      <div className="rate py-3 mt-3">
                        <div className="row">
                          <div className="col">
                            <h5 className="mb-0">
                              Rate {reduxUser.user.ratingAverage}/5
                            </h5>
                          </div>
                          <div className="col">
                            <div className="rating">
                              <StartRating
                                rating={Math.floor(
                                  reduxUser.user.ratingAverage
                                )}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-5">
                <ul className="list-group list-group-flush">
                  <ListItem label="Profile" link="/my-profile"></ListItem>
                  <ListItem label="My posts" link="/my-posts"></ListItem>
                  <ListItem
                    label="Purchase history"
                    link="/payment/history"
                  ></ListItem>
                  <ListItem label="Sales history" link="/sale"></ListItem>
                </ul>
              </div>
            </div>
            <div className="col-md-8">
              {component === "/edit-profile" && <EditUser />}
              {component === "/my-posts" && <UserManagePosts />}
              {component === "/my-profile" && <ProfileDetail />}
              {component === "/payment/history" && <UserBuyHistory />}
              {component === "/sale" && <UserSaleHistory />}
              {component === "" && <UserManagePosts />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
