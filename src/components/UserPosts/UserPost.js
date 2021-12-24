import React from "react";
import PropTypes from "prop-types";
import "./UserPost.scss";
import useModal from "hook/useModal";
import ModalEditPost from "modals/ModalEditPost/ModalEditPost";

const UserPost = (props) => {
  const { isShowing, toggle } = useModal();

  const { id, title, description, price, images, sell, stock } = props.post;
  return (
    <div
      className="userPost card col-xs-12 col-sm-6 col-md-4 col-lg-2 p-4 p-md-3 mt-3 m-4"
      style={{ width: "15rem" }}
    >
      <ModalEditPost
        post={props.post}
        handleClose={toggle}
        isShowing={isShowing}
      />
      <img
        src={
          images[0] && images[0].url ? (
            images[0].url
          ) : (
            <svg
              class="bd-placeholder-img card-img-top"
              width="100%"
              height="180"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder: Image cap"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="35%" y="50%" fill="#dee2e6" dy=".3em">
                No Image
              </text>
            </svg>
          )
        }
        className="card-img-top"
        alt="..."
        style={{ height: "170px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-break">{description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <div class="row justify-content-between">
            <div class="col-4">
              <svg
                width="29"
                height="29"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  fill="#185ADB"
                  fill-opacity="0.25"
                />
                <path
                  d="M9 10L12.2581 12.4436C12.6766 12.7574 13.2662 12.6957 13.6107 12.3021L20 5"
                  stroke="#185ADB"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
                <path
                  d="M21 12C21 13.8805 20.411 15.7137 19.3156 17.2423C18.2203 18.7709 16.6736 19.9179 14.893 20.5224C13.1123 21.1268 11.187 21.1583 9.38744 20.6125C7.58792 20.0666 6.00459 18.9707 4.85982 17.4789C3.71505 15.987 3.06635 14.174 3.00482 12.2945C2.94329 10.415 3.47203 8.56344 4.51677 6.99987C5.56152 5.4363 7.06979 4.23925 8.82975 3.57685C10.5897 2.91444 12.513 2.81996 14.3294 3.30667"
                  stroke="#185ADB"
                  stroke-width="1.2"
                  stroke-linecap="round"
                />
              </svg>
            </div>
            <div class="col-4 text-end">Sold: {sell} </div>
          </div>
        </li>
        <li className="list-group-item">
          <div class="row justify-content-between">
            <div class="col-4">
              <svg
                width="25"
                height="23"
                viewBox="0 0 44 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.82284 1.11786C7.04866 0.779139 7.42882 0.575684 7.83591 0.575684H36.6959C37.1029 0.575684 37.483 0.779065 37.7088 1.11769L43.4817 9.77373C43.6151 9.97377 43.6863 10.2088 43.6863 10.4493V16.3174C43.6863 16.6403 43.558 16.95 43.3297 17.1783C39.4117 21.0963 33.2185 21.3543 29.0009 17.9523C25.0806 21.1145 19.4534 21.1145 15.5331 17.9523C11.3154 21.3543 5.12228 21.0963 1.20427 17.1783C0.975935 16.95 0.847656 16.6403 0.847656 16.3174V10.4493C0.847656 10.2089 0.918808 9.97391 1.05215 9.77391L6.82284 1.11786ZM8.48753 3.0108L3.28278 10.8179V15.7929C6.54411 18.6955 11.5452 18.5833 14.6721 15.4564C15.1476 14.981 15.9185 14.981 16.394 15.4564C19.6372 18.6997 24.8967 18.6997 28.1399 15.4564C28.6154 14.981 29.3864 14.981 29.8618 15.4564C32.9887 18.5833 37.9898 18.6955 41.2512 15.7929V10.818L36.0444 3.0108H8.48753ZM4.95056 23.6606C5.623 23.6606 6.16812 24.2057 6.16812 24.8782V32.8113C6.16812 35.7255 8.53 38.0874 11.4442 38.0874H29.7076V27.7635C29.7076 27.0911 30.2527 26.546 30.9252 26.546C31.5976 26.546 32.1427 27.0911 32.1427 27.7635V38.0874H33.0897C36.004 38.0874 38.3658 35.7255 38.3658 32.8113V24.8782C38.3658 24.2057 38.9109 23.6606 39.5834 23.6606C40.2558 23.6606 40.8009 24.2057 40.8009 24.8782V32.8113C40.8009 37.0704 37.3488 40.5225 33.0897 40.5225H11.4442C7.18512 40.5225 3.733 37.0704 3.733 32.8113V24.8782C3.733 24.2057 4.27812 23.6606 4.95056 23.6606ZM13.6088 24.7104C14.2812 24.7104 14.8263 25.2556 14.8263 25.928V28.8133C14.8263 29.4858 14.2812 30.0309 13.6088 30.0309C12.9363 30.0309 12.3912 29.4858 12.3912 28.8133V25.928C12.3912 25.2556 12.9363 24.7104 13.6088 24.7104ZM22.267 24.7104C22.9394 24.7104 23.4845 25.2556 23.4845 25.928V28.8133C23.4845 29.4858 22.9394 30.0309 22.267 30.0309C21.5945 30.0309 21.0494 29.4858 21.0494 28.8133V25.928C21.0494 25.2556 21.5945 24.7104 22.267 24.7104Z"
                  fill="#185ADB"
                />
              </svg>
            </div>
            <div class="col-4 text-end">Stock: {stock} </div>
          </div>
        </li>
      </ul>
      <div className="card-body btn-group-custom mt-2">
        <div style={{ cursor: "pointer" }} className="mx-2" onClick={toggle}>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.41999 18.579C1.13948 18.5785 0.872062 18.4603 0.682993 18.253C0.490439 18.0475 0.394758 17.7695 0.419993 17.489L0.664993 14.795L11.983 3.48103L15.52 7.01703L4.20499 18.33L1.51099 18.575C1.47999 18.578 1.44899 18.579 1.41999 18.579ZM16.226 6.31003L12.69 2.77403L14.811 0.653028C14.9986 0.465251 15.2531 0.359741 15.5185 0.359741C15.7839 0.359741 16.0384 0.465251 16.226 0.653028L18.347 2.77403C18.5348 2.9616 18.6403 3.21612 18.6403 3.48153C18.6403 3.74694 18.5348 4.00146 18.347 4.18903L16.227 6.30903L16.226 6.31003Z"
              fill="#7E869E"
            />
          </svg>
        </div>
        <div style={{ cursor: "pointer" }} className="mx-2">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 21C7.34711 21.0024 4.80218 19.9496 2.9263 18.0737C1.05042 16.1978 -0.00238272 13.6529 4.04939e-06 11V10.8C0.0817921 6.79223 2.5478 3.22016 6.26637 1.72307C9.98493 0.225973 14.2381 1.0929 17.074 3.92601C19.9365 6.78609 20.7932 11.0893 19.2443 14.8276C17.6955 18.5659 14.0465 21.0024 10 21ZM10 12.41L12.59 15L14 13.59L11.41 11L14 8.41001L12.59 7.00001L10 9.59001L7.41001 7.00001L6.00001 8.41001L8.59001 11L6.00001 13.59L7.41001 15L10 12.411V12.41Z"
              fill="red"
            />
          </svg>
        </div>
        <div style={{ cursor: "pointer" }} className="mx-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20.7703 12C20.7703 11.6412 20.5762 11.4056 20.188 10.9343C18.768 9.21014 15.6357 6 12 6C8.36428 6 5.23207 9.21014 3.81198 10.9343C3.42382 11.4056 3.22974 11.6412 3.22974 12C3.22974 12.3588 3.42382 12.5944 3.81198 13.0657C5.23207 14.7899 8.36428 18 12 18C15.6357 18 18.768 14.7899 20.188 13.0657C20.5762 12.5944 20.7703 12.3588 20.7703 12ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3432 9 9.00002 10.3431 9.00002 12C9.00002 13.6569 10.3432 15 12 15Z"
              fill="#7E869E"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
UserPost.propTypes = {
  post: PropTypes.object,
};
export default UserPost;
