import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ToggleTheme from "../ToggleTheme";
import { RiLogoutBoxRLine, RiAccountCircleFill } from "react-icons/ri";
import MobileSidebarButton from "../MobileSidebarButton";

function Navigation({ logout, name }) {
  return (
    <nav className="container mx-auto flex justify-between items-center px-4">
      <div className="flex items-center gap-4 md:gap-0">
        <MobileSidebarButton />
        <Link to="/" className="text-3xl font-bold flex items-center gap-2">
          <img src="/logo.png" className="h-10" alt="" />
          <span className="hidden md:block">Notes App</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <ToggleTheme />
        <Link to="/" className="flex items-center gap-2">
          <RiAccountCircleFill size={20} />
          {name}
        </Link>
        <button onClick={logout} className="flex items-center gap-2">
          <RiLogoutBoxRLine size={20} />{" "}
          <span className="hidden md:block">Logout</span>
        </button>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Navigation;
