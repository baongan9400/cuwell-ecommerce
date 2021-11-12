import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import "./Search.scss";
import logo from "assets/images/logo.png";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  // const { t, handleChangeLang, trans } = props;
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    if (lang === "en") {
      i18n.changeLanguage("en");
      setTrans("en");
    } else if (lang === "vi") {
      i18n.changeLanguage("vi");
      setTrans("vi");
    } else {
      localStorage.setItem("lang", "en");
      setTrans("en");
    }
    // 👆 false parameter is required for react project
  }, []);
  const [trans, setTrans] = useState("");
  const handleChangeLang = () => {
    const lang = localStorage.getItem("lang");
    console.log(lang);
    if (lang === "en") {
      console.log(true);
      localStorage.setItem("lang", "vi");
      i18n.changeLanguage("vi");
      setTrans("vi");
    } else if (lang === "vi") {
      localStorage.setItem("lang", "en");
      i18n.changeLanguage("en");
      setTrans("en");
    }
  };
  const dropdownSearchValue = t("header.all.food");
  const [dropdownValue, setDropdown] = useState(dropdownSearchValue);

  return (
    <div className="NavBar">
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
                            onClick={() => setDropdown(dropdownValue)}
                          >
                            {dropdownValue}
                          </li>
                          <li
                            className="dropdown-item"
                            onClick={() => setDropdown(t("header.all.food"))}
                          >
                            {t("header.all.food")}
                          </li>
                          <li
                            className="dropdown-item"
                            onClick={() => setDropdown("Food")}
                          >
                            Plants
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
                          placeholder={t("header.search")}
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
                    href="/home"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fas fa-sign-out-alt">
                      <i className="sr-only">Logout</i>
                    </span>
                  </a>
                  <a
                    href="/home"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-bell">
                      <i className="sr-only">Noti</i>
                    </span>
                  </a>
                  <a
                    href="/home"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-comments">
                      <i className="sr-only">Chat</i>
                    </span>
                  </a>
                  <a
                    href="/home"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className="fa fa-shopping-cart">
                      <i className="sr-only">Shopping Cart</i>
                    </span>
                  </a>
                  <div className="switch-ctn">
                    <div className="jumbotron">
                      <div className="df-switch">
                        <button
                          type="button"
                          className={
                            trans === "en"
                              ? "btn btn-lg btn-toggle"
                              : "btn btn-lg btn-toggle active"
                          }
                          data-bs-toggle="button"
                          aria-pressed={trans === "en" ? true : false}
                          autocomplete="off"
                          onClick={() => handleChangeLang()}
                        >
                          <div className="inner-handle"></div>
                          <div className="handle"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light"
          id="ftco-navbar"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="/homeftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                  <a href="/home" className="nav-link">
                    {t("header.home")}
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("header.category")}
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <a className="dropdown-item" href="/">
                      {t("header.category")} 1
                    </a>
                    <a className="dropdown-item" href="/home">
                      {t("header.category")} 2
                    </a>
                    <a className="dropdown-item" href="/home">
                      {t("header.category")} 3
                    </a>
                    <a className="dropdown-item" href="/home">
                      {t("header.category")} 4
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a href="/create-post" className="nav-link">
                    {t("header.post")}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/profile" className="nav-link">
                    {t("header.profile")}
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/login" className="nav-link">
                    {t("header.login")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END nav */}
      </section>
    </div>
  );
};

export default NavBar;
