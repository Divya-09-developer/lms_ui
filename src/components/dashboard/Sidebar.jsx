import React, { useState, useEffect } from "react";
import { sidebarItems } from "../data/dashBoardSidebar";

export default function Sidebar() {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname); // Get current URL path
  }, []);

  return (
    <div className="sidebar -dashboard">
      {sidebarItems.map((elm, i) => (
        <div
          key={i}
          className={`sidebar__item ${activePath === elm.href ? "-is-active" : ""}`}
        >
          <a href={elm.href} className="d-flex items-center text-17 lh-1 fw-500">
            <i className={`${elm.iconClass} mr-15`}></i>
            {elm.text}
          </a>
        </div>
      ))}
    </div>
  );
}
