import React, { useEffect, useState } from "react";
import "./NavBar.scss";
import logo from "assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesRequestAction } from "redux/actions/category/category.action";
import { Link, useRouteMatch } from "react-router-dom";
import { logoutUserAction } from "redux/actions/login/authAction";
import SearchForm from "components/SearchFilterForm/SearchForm";
import { getSearchComplete } from "api/posts/search";
import CartBadge from "components/Cart/CartBadge";
const CategoryItem = ({ title, src, id }) => {
  // const photo = require(`images/${src}`).default;
  // const photo = "";

  const tryRequire = (src) => {
    try {
      return require(`images/${src}`).default;
    } catch (err) {
      return require(`images/0.svg`).default;
    }
  };
  return (
    <Link
      to={{ pathname: `/category/${id}`, state: " " }}
      className="dropdown-item"
      style={{ color: "black" }}
    >
      <span>
        <img
          className="img-responsive"
          width={20}
          height={20}
          src={tryRequire(src)}
          alt=""
        />
      </span>
      {title}
    </Link>
  );
};
const NavBar = () => {
  // const { t, handleChangeLang, trans } = props;
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.categoryReducer);
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const [result, setResult] = useState([]);

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
    dispatch(getAllCategoriesRequestAction());
  }, []);
  const [trans, setTrans] = useState("");
  const handleChangeLang = () => {
    const lang = localStorage.getItem("lang");
    if (lang === "en") {
      localStorage.setItem("lang", "vi");
      i18n.changeLanguage("vi");
      setTrans("vi");
    } else if (lang === "vi") {
      localStorage.setItem("lang", "en");
      i18n.changeLanguage("en");
      setTrans("en");
    }
  };
  function CustomLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact,
    });

    return (
      <li className={match ? "nav-item active" : "nav-item"}>
        <Link to={to} className="nav-link w-auto">
          {label}
        </Link>
      </li>
    );
  }
  const CustomLinkHasAction = ({
    label,
    to,
    activeOnlyWhenExact,
    handelClick,
  }) => {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact,
    });

    return (
      <li className={match ? "nav-item active" : "nav-item"}>
        <Link to={to} onClick={handelClick} className="nav-link">
          {label}
        </Link>
      </li>
    );
  };
  const handelLogout = () => {
    dispatch(logoutUserAction());
  };
  const fetchSearchAutoComplete = async (newFilter) => {
    try {
      const titleResult = await getSearchComplete(
        newFilter.searchTerm,
        newFilter.searchCategory
      );
      setResult(titleResult);
    } catch (error) {
      console.log("failed to fetch api", error);
    }
  };
  const handelFilterChange = (newFilter) => {
    fetchSearchAutoComplete(newFilter);
  };
  return (
    <div className="NavBar">
      <section className="ftco-section">
        <div className="container-fluid px-md-5">
          <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center pb-3">
            <div className="">
              <div className="social-media">
                <div className="d-flex align-items-center">
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
                  <div className="d-flex align-items-center justify-content-center btn-cart">
                    {/* <span className="fa fa-shopping-cart">
                      <i className="sr-only">Shopping Cart</i>
                    </span> */}
                    <CartBadge />
                  </div>
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
                          autoComplete="off"
                          onClick={() => handleChangeLang()}
                        >
                          <div className="inner-handle"></div>
                          <div className="handle"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="d-flex">
                <div className=" text-center">
                  <a className="navbar-brand-logo" href="/home">
                    <img className="logo" src={logo} alt="" />
                  </a>
                </div>
              </div>
            </div>
            {/* Start Search */}
            <div className="">
              <SearchForm
                onSubmit={handelFilterChange}
                category={data}
                lang={t}
                dataSearch={result}
              />
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
              data-bs-toggle="collapse"
              data-bs-target="#ftco-nav"
              aria-controls="ftco-nav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars" /> Menu
            </button>
            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav m-auto">
                <CustomLink to="/home" label={t("header.home")} />
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/category"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {t("header.category")}
                  </a>
                  <div
                    style={{ backgroundColor: "white" }}
                    className="dropdown-menu"
                    aria-labelledby="dropdown04"
                  >
                    {data.length > 0 &&
                      data.map((category, index) => (
                        // <a
                        //   className="dropdown-item"
                        //   style={{ color: "black" }}
                        //   href="/"
                        //   key={index}
                        // >
                        //   {category.name}
                        // </a>
                        <CategoryItem
                          title={category?.name}
                          src={`${category?.id}.svg`}
                          id={category?.id}
                        />
                      ))}
                  </div>
                </li>
                <CustomLink to="/create-post" label={t("header.post")} />
                {isLoggedIn ? (
                  <>
                    <CustomLink to="/profile" label={t("header.profile")} />
                    <CustomLinkHasAction
                      to="/login"
                      label="Logout"
                      handelClick={handelLogout}
                    />
                  </>
                ) : (
                  <li className="nav-item">
                    <a href="/login" className="nav-link">
                      {t("header.login")}
                    </a>
                  </li>
                )}
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
