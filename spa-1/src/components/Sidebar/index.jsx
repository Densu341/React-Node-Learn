import React, { useState, useEffect } from "react";
import { IoHome, IoArchive, IoAddCircle, IoSettings } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import LinkPages from "../LinkPages";

const Sidebar = () => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("Home");

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      setActiveMenu("Home");
    } else if (path === "/archived") {
      setActiveMenu("Archived");
    } else if (path === "/add") {
      setActiveMenu("Add Notes");
    } else if (path === "/404") {
      setActiveMenu("Settings");
    } else {
      setActiveMenu("");
    }
  }, [location.pathname]);

  const handleMenuClick = (label) => {
    setActiveMenu(label);
  };

  return (
    <div className="md:h-3/4 pt-4">
      <div className="w-48 border  rounded-lg bg-dark text-light h-full px-2">
        <LinkPages
          icon={<IoHome />}
          label="Home"
          path={"/"}
          active={activeMenu === "Home"}
          onClick={() => handleMenuClick("Home")}
        />
        <LinkPages
          icon={<IoArchive />}
          label="Archived"
          path={"/archived"}
          active={activeMenu === "Archived"}
          onClick={() => handleMenuClick("Archived")}
        />
        <LinkPages
          icon={<IoAddCircle />}
          label="Add Notes"
          path={"/add"}
          active={activeMenu === "Add Notes"}
          onClick={() => handleMenuClick("Add Notes")}
        />
        <LinkPages
          icon={<IoSettings />}
          label="Settings"
          path={"/404"}
          active={activeMenu === "Settings"}
          onClick={() => handleMenuClick("Settings")}
        />
      </div>
    </div>
  );
};

export default Sidebar;
