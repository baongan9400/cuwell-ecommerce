import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import "./Search.scss";
import { useDispatch } from "react-redux";
import { searchLoading } from "redux/actions/posts/search.action";
import { Link } from "react-router-dom";

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
SearchForm.defaultProps = {
  onSubmit: null,
};
function SearchForm(props) {
  const { onSubmit, category, lang, dataSearch } = props;
  const [result, setResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownValue, setDropdown] = useState("All");
  const [searchCat, setSearchCat] = useState("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = async (e) => {
    const value = e.target.value;
    setResult([]);
    setLoading(true);
    setSearchTerm(value);
    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
        searchCategory: searchCat,
      };

      setResult(dataSearch);
      setLoading(false);
      onSubmit(formValues);
    }, 300);
  };

  const handleResultClick = (selectNumber) => {
    const params = {
      search: searchTerm,
      category: searchCat,
      page: 1,
      page_size: 12,
    };
    dispatch(searchLoading(params));
  };
  const listData = result?.map((element, index) => (
    <li key={index}>
      <Link
        to={{
          pathname: "/posts",
          state: {
            listItems: props.list,
          },
        }}
        onClick={handleResultClick}
      >
        {" "}
        {element}
      </Link>

      {/* <a className="" href="/posts" onClick={handleResultClick}>
        {element}
      </a> */}
    </li>
  ));

  return (
    <>
      <form action="" className="" style={{ position: "relative" }}>
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
                className="dropdown-menu category-search"
                aria-labelledby="dropdownMenuButton1"
              >
                <li
                  className="dropdown-item"
                  onClick={() => {
                    setDropdown("All");
                    setSearchCat("");
                  }}
                >
                  All
                </li>
                {category.length > 0 &&
                  category.map((item) => (
                    <li
                      className="dropdown-item"
                      onClick={() => {
                        setDropdown(item.name);
                        setSearchCat(item.id);
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="search_field">
              <input
                type="text"
                className="input"
                placeholder={lang("header.search")}
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
              <i className="fas fa fa-search" />
              <div
                className={
                  searchTerm === ""
                    ? `search-result d-none`
                    : `search-result d-block`
                }
              >
                {loading ? (
                  <ul className="" aria-labelledby="">
                    <img
                      src="http://www.buydiscount.in/wp-content/themes/medical/assets/images/preloader-gif-12.gif"
                      alt="loading"
                    />
                  </ul>
                ) : (
                  <ul className="" aria-labelledby="">
                    {listData && listData.length > 0 ? (
                      listData
                    ) : (
                      <img
                        src="https://cdn.dribbble.com/users/1883357/screenshots/6016190/search_no_result.png"
                        alt="No result"
                      />
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
