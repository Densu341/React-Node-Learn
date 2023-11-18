import React, { useState } from "react";

function Navbar() {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <div className="navbar">
      <div className="brand">
        <h1>Notes App</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Telusuri catatan Anda"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Navbar;
