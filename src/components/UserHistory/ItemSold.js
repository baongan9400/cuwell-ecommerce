import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ItemSold.scss";
import { convertStatus } from "helper/utils";
import paymentApi from "api/user/paymentApi";
import { pushToast } from "components/Toast";

const ItemSold = (props) => {
  const {
    post,
    status,
    payee_email,
    price,
    quantity,
    created_at,
    delivery_day,
    street,
    city,
    district,
    id,
  } = props.history;
  const [updateStatus, setUpdateStatus] = useState(3);
  const [loading, setLoading] = useState(false);

  const { title, description, images, sell, stock } = post;
  const callUpdateSellerOrder = async ({ id, updateStatus }) => {
    try {
      setLoading(true);
      const result = await paymentApi.updateSellerOrder(id, updateStatus.value);
      if (result) {
        setLoading(false);
        pushToast("success", "Update status of sales order successfully");
      }
    } catch (error) {
      setLoading(false);
      pushToast("error", "Failed to update status of sales order profile ");
    }
  };
  const handleUpdateStatus = (event) => {
    event.preventDefault();
    callUpdateSellerOrder({ id, updateStatus });
  };
  const handleChange = (event) => {
    setUpdateStatus({ value: event.target.value });
  };
  return (
    <div className="itemBuy container-fluid mx-auto ms-5 me-5">
      <div className="row d-flex justify-content-center">
        <div className="card border-0">
          <div className="row set-p justify-content-center">
            <div className="col-sm-3 px-0">
              {" "}
              <img className="image" src={images[0].url} alt={title} />{" "}
            </div>
            <div className="col-sm-9">
              <div className="row px-3 mt-4">
                <h5 className="fw-bold">{title}</h5>
              </div>
              <div className="row px-3">
                <h6 className="mb-1 fw-bold">
                  Quantity &middot; {quantity} &middot;
                </h6>
              </div>
              <div className="row px-3">
                <span className="d-block">
                  <i className="fa fa-map-marker start"></i>{" "}
                  <small className="text-truncate ml-2">
                    {street}, {district}, {city}
                  </small>{" "}
                </span>{" "}
              </div>
              <div className="row px-3">
                <p className="">Payment &middot; {payee_email}</p>
              </div>
              <div className="line"></div>
              <div className="row px-3 mt-2 mb-2">
                <h6 className="text-secondary mb-1">
                  <svg
                    width="23"
                    height="25"
                    viewBox="0 0 43 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M34.3673 1.1364C34.8428 0.660914 35.6137 0.660913 36.0892 1.1364L42.4314 7.47853C42.6597 7.70687 42.788 8.01656 42.788 8.33948C42.788 8.66239 42.6597 8.97209 42.4314 9.20042L36.0892 15.5426C35.6137 16.018 34.8428 16.018 34.3673 15.5426C33.8918 15.0671 33.8918 14.2962 34.3673 13.8207L38.631 9.55704L26.7908 9.55704C26.1184 9.55704 25.5733 9.01192 25.5733 8.33948C25.5733 7.66704 26.1184 7.12192 26.7908 7.12192L38.631 7.12192L34.3673 2.85829C33.8918 2.3828 33.8918 1.61189 34.3673 1.1364ZM9.83144 13.5422C9.51884 12.3755 8.31903 11.6828 7.1524 11.9954C5.98576 12.308 5.29305 13.5078 5.60565 14.6745L10.0111 31.1157C10.1851 31.7652 9.79965 32.4328 9.15012 32.6069C8.50059 32.7809 7.83296 32.3955 7.65892 31.7459L3.2535 15.3047C2.59282 12.839 4.05645 10.3039 6.52214 9.64327C8.98783 8.98259 11.5229 10.4462 12.1836 12.9119L13.6931 18.5456L24.1755 18.1034C27.4185 17.9001 30.3579 20.0127 31.1993 23.1528L32.988 29.8283C33.3952 31.3481 33.4432 32.9402 33.1277 34.4821C32.3584 38.2413 29.5308 41.2444 25.8234 42.2378L20.6225 43.6314C16.0953 44.8444 11.263 43.7639 7.68237 40.7417L4.97213 38.4544C3.54722 37.5364 2.51506 36.1209 2.07578 34.4815L0.59843 28.968C0.42439 28.3185 0.809848 27.6508 1.45938 27.4768C2.1089 27.3028 2.77654 27.6882 2.95058 28.3377L4.42793 33.8513C4.71585 34.9258 5.39876 35.8496 6.34028 36.4387C6.38913 36.4692 6.43576 36.5032 6.4798 36.5404L9.25298 38.8808L9.25302 38.8809C12.2251 41.3894 16.2355 42.2858 19.9922 41.2792L25.1931 39.8856C28.0095 39.131 30.1576 36.8496 30.742 33.9939C30.9817 32.8226 30.9453 31.6134 30.6359 30.4586L28.8472 23.7831C28.3049 21.7594 26.4082 20.399 24.3186 20.5343L24.2912 20.5358L12.8209 21.0196C12.2512 21.0437 11.7411 20.6691 11.5935 20.1183L9.83144 13.5422Z"
                      fill="#26aa99"
                    />
                  </svg>
                  &#160;&#160;&#160; Payment &#160;&#160;&#160;{created_at}
                </h6>
              </div>
              {status === 3 ? (
                <></>
              ) : (
                <div className="row px-3">
                  <p className="text-muted mb-1">
                    <svg
                      width="25"
                      height="22"
                      viewBox="0 0 44 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.701172 1.72195C0.701172 1.04951 1.24629 0.504395 1.91873 0.504395H13.4623C14.1347 0.504395 14.6798 1.04951 14.6798 1.72195V13.2655C14.6798 13.9379 14.1347 14.4831 13.4623 14.4831H1.91873C1.24629 14.4831 0.701172 13.9379 0.701172 13.2655V1.72195ZM3.13629 2.93951V12.0479H12.2447V2.93951H3.13629ZM21.1519 8.46886C21.1519 7.79642 21.697 7.2513 22.3694 7.2513H28.1401C28.6581 7.2513 29.1193 7.57898 29.2898 8.06807L33.0229 18.7768C34.2094 18.3813 35.4788 18.1671 36.7983 18.1671C37.4707 18.1671 38.0159 18.7122 38.0159 19.3847C38.0159 20.0571 37.4707 20.6022 36.7983 20.6022C35.3946 20.6022 34.0616 20.907 32.8622 21.4541C32.8253 21.4736 32.7871 21.4913 32.7476 21.5072C30.1379 22.7398 28.1791 25.126 27.5313 28.0073C27.4533 28.6045 26.9425 29.0656 26.324 29.0656H2.16333C1.49089 29.0656 0.945766 28.5205 0.945766 27.8481C0.945766 22.2989 5.44336 17.8013 10.9925 17.8013C16.1296 17.8013 20.3654 21.6557 20.9663 26.6305H25.3778C26.26 23.7241 28.2212 21.2865 30.7955 19.7849L27.2751 9.68642H22.3694C21.697 9.68642 21.1519 9.1413 21.1519 8.46886ZM18.5074 26.6305C17.9247 23.0051 14.7824 20.2364 10.9925 20.2364C7.20267 20.2364 4.06038 23.0051 3.47771 26.6305H18.5074ZM35.5883 8.69938C36.2608 8.69938 36.8059 9.2445 36.8059 9.91694V13.1508C36.8059 13.8232 36.2608 14.3683 35.5883 14.3683C34.9159 14.3683 34.3708 13.8232 34.3708 13.1508V9.91694C34.3708 9.2445 34.9159 8.69938 35.5883 8.69938ZM36.7983 26.0418C34.5574 26.0418 32.7409 27.8583 32.7409 30.0992C32.7409 32.3401 34.5574 34.1567 36.7983 34.1567C39.0392 34.1567 40.8558 32.3401 40.8558 30.0992C40.8558 27.8583 39.0392 26.0418 36.7983 26.0418ZM30.3057 30.0992C30.3057 26.5135 33.2126 23.6066 36.7983 23.6066C40.3841 23.6066 43.2909 26.5135 43.2909 30.0992C43.2909 33.685 40.3841 36.5918 36.7983 36.5918C33.2126 36.5918 30.3057 33.685 30.3057 30.0992ZM16.2907 31.2327C16.8996 31.5181 17.1619 32.243 16.8765 32.8519C15.8419 35.0594 13.6 36.5939 10.9947 36.5939C8.39822 36.5939 6.16116 35.0706 5.12326 32.875C4.83588 32.2671 5.09573 31.5413 5.70366 31.2539C6.3116 30.9665 7.0374 31.2264 7.32479 31.8343C7.97524 33.2103 9.37463 34.1588 10.9947 34.1588C12.6189 34.1588 14.0221 33.2041 14.6715 31.8185C14.9569 31.2096 15.6818 30.9473 16.2907 31.2327Z"
                        fill="#26aa99"
                      />
                    </svg>
                    &#160;&#160;&#160; Expected Date of Delivery &#160;
                    {delivery_day}
                  </p>
                </div>
              )}
              <div className="row px-3 mt-1">
                <div
                  className="accordion accordion-flush bg-"
                  id={"accordionFlushExample" + id}
                >
                  <div className="accordion-item">
                    <h2
                      className="accordion-header bg-light"
                      id={"flush-heading" + id}
                    >
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={"#flush-collapse" + id}
                        aria-expanded="false"
                        aria-controls={"flush-collapse" + id}
                      >
                        {convertStatus(status)}
                      </button>
                    </h2>
                    <div
                      id={"flush-collapse" + id}
                      className="accordion-collapse collapse"
                      aria-labelledby={"flush-heading" + id}
                      data-bs-parent={"#accordionFlushExample" + id}
                    >
                      <div className="accordion-body">
                        <form>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              value="3"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Accepted
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              value="1"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault2"
                            >
                              Deliveried
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault3"
                              value="4"
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault3"
                            >
                              Cancel
                            </label>
                          </div>

                          <button
                            type="submit"
                            class="btn btn-outline-info"
                            style={{ float: "right" }}
                            onClick={handleUpdateStatus}
                          >
                            Update status
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row px-3">
                <h5 className="text-success mb-2 fw-bold mt-2">${price}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
ItemSold.propTypes = {
  post: PropTypes.object,
};
export default ItemSold;
