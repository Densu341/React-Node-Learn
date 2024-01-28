import React from "react";
import { Link } from "react-router-dom";
import ToggleTheme from "../ToggleTheme";
import { RiLogoutBoxRLine, RiAccountCircleFill } from "react-icons/ri";

function Navigation({ logout, name }) {
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">Notes App</h1>
      <div className="flex items-center gap-4">
        <ToggleTheme />
        <Link to="/" className="flex items-center gap-2">
          <RiAccountCircleFill />
          {name}
        </Link>
        <button onClick={logout} className="flex items-center gap-2">
          <RiLogoutBoxRLine /> Logout
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
