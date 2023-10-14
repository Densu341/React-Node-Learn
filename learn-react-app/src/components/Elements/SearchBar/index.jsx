import React from "react";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="bg-white w-fit p-2 mx-auto  my-8 rounded-lg">
    <form onSubmit={formSubmit} className="flex items-center">
      <input
        type="text"
        placeholder="Search By Category"
        value={value}
        onChange={handleSearchKey}
        className="bg-white outline-none"
      />
      {value && (
        <span onClick={clearSearch} className="p-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      )}
      <button className="outline-none border-none px-2 py-2 rounded-md bg-blue-600 text-white">
        Go
      </button>
    </form>
  </div>
);

export default SearchBar;
