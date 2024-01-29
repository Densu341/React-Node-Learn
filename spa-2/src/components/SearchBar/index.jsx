import React from "react";
import PropType from "prop-types";

function SearchBar({ keyword, onKeywordChange }) {
  return (
    <input
      className="form-control w-full"
      type="search"
      placeholder="Cari Judul Catatan.."
      value={keyword}
      onChange={(event) => onKeywordChange(event.target.value)}
    ></input>
  );
}

SearchBar.propType = {
  keyword: PropType.string.isRequired,
  onKeywordChange: PropType.func.isRequired,
};

export default SearchBar;
