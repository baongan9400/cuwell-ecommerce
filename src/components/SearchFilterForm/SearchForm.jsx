import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
SearchForm.defaultProps = {
  onSubmit: null,
};
function SearchForm(props) {
  const { onSubmit } = props;
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleSearchTermChange = async (e) => {
    const value = e.target.value;
    setData([]);
    setSearchTerm(value);
    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };

      setData(["1", "2", "3"]);
      onSubmit(formValues);
    }, 300);
  };

  const listData = data?.map((element, index) => (
    <li key={index}>
      <a className="" href="/#">
        {element}
      </a>
    </li>
  ));

  return (
    <>
      <form action="" className="" style={{ position: "relative" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <div
          style={{
            backgroundColor: "red",
            zIndex: "99999",
            height: "170px",
            position: "absolute",
            width: "150px",
          }}
          className={searchTerm === "" ? `d-none` : `d-block`}
        >
          <ul className="" aria-labelledby="">
            {listData}
          </ul>
        </div>
      </form>
    </>
  );
}

export default SearchForm;
