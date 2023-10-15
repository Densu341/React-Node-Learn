import { useState } from "react";
import logo from "../assets/react.svg";
import "./sidebar.css";

const navItems = ["Home", "About", "Contact"];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
            type="button"
          >
            <span>{isOpen ? "close" : "menu"}</span>
          </button>
          <img src={logo} alt="logo" className="sidebar-logo" />
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item) => (
            <button className="sidebar-button">
              <span>{item}</span>
              <p>{item}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
