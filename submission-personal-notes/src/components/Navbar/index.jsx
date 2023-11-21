import React, { useState } from "react";

function Navbar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    const keyword = e.target.value;
    setSearchText(keyword);
    onSearch(keyword);
  };
  return (
    <div className="navbar">
      <div className="brand">
        <h1>Notes App</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Cari catatan..."
          value={searchText}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default Navbar;
