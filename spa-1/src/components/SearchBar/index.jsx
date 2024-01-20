import React from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onChange, value }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div>
      <input
        className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-rose-400"
        placeholder="Search..."
        type="text"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

export default SearchBar;
