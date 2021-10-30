import React from "react";
import "./Banner.scss";

function Banner(props) {
  return (
    <div className="banner-wrapper">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div
            className="carousel-item-banner carousel-item active"
            data-bs-interval="1000"
          >
            <img
              src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h2>Make SECOND HAND</h2>
              <h5>become your FIRST CHOICE</h5>
            </div>
          </div>
          <div
            className="carousel-item-banner carousel-item"
            data-bs-interval="1000"
          >
            <img
              src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption phone d-none d-md-block">
              <h2 className="mt-5 text-light"></h2>
            </div>
          </div>
          <div
            className="carousel-item-banner carousel-item"
            data-bs-interval="2000"
          >
            <img
              src="https://images.pexels.com/photos/3747518/pexels-photo-3747518.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block banner-book">
              <h2>Buy Cheap Books Online at Cuwell</h2>
              <h5>Cheap prices on high quality gently used books </h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
//https://images.pexels.com/photos/7766375/pexels-photo-7766375.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
//https://images.pexels.com/photos/2946974/pexels-photo-2946974.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
export default Banner;
