import React, { useState } from "react";
import "./NavBar.scss";
import "./Search.scss";
import logo from "assets/images/logo.png";

const NavBar = () => {
  const [dropdownValue, setDropdown] = useState("All");

  return (
    <section className="ftco-section">
      <div className="container-fluid px-md-5">
        <div className="row justify-content-between">
          <div className="col-md-8 order-md-last">
            <div className="row">
              <div className="col-md-6 text-center">
                <a className="navbar-brand-logo" href="/home">
                  <img classname="logo" src={logo} alt="" />
                </a>
              </div>
              <div className="col-md-6 d-md-flex justify-content-end mb-md-0 mb-3">
                <div className="search-wrapper">
                  <div className="search_box">
                    <div className="dropdown dropdown-search">
                      <div
                        className="default_option dropdown-toggle"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {dropdownValue}
                      </div>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li
                          className="dropdown-item"
                          onClick={() => setDropdown("All")}
                        >
                          All
                        </li>
                        <li
                          className="dropdown-item"
                          onClick={() => setDropdown("Cars")}
                        >
                          Cars
                        </li>
                        <li
                          className="dropdown-item"
                          onClick={() => setDropdown("Food")}
                        >
                          Food
                        </li>
                        <li
                          className="dropdown-item"
                          onClick={() => setDropdown("Clothes")}
                        >
                          Clothes
                        </li>
                      </ul>
                    </div>

                    <div className="search_field">
                      <input
                        type="text"
                        className="input"
                        placeholder="Search"
                      />
                      <i className="fas fa fa-search" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="social-media">
              <p className="mb-0 d-flex">
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="fas fa-sign-out-alt">
                    <i className="sr-only">Logout</i>
                  </span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-bell">
                    <i className="sr-only">Noti</i>
                  </span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-comments">
                    <i className="sr-only">Chat</i>
                  </span>
                </a>
                <a
                  href="#"
                  className="d-flex align-items-center justify-content-center"
                >
                  <span className="fa fa-shopping-cart">
                    <i className="sr-only">Shopping Cart</i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars" /> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdown04"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Category
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdown04">
                  <a className="dropdown-item" href="#">
                    Category 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Category 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Category 3
                  </a>
                  <a className="dropdown-item" href="#">
                    Category 4
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Post
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Sign in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* END nav */}
    </section>
  );
};

export default NavBar;
