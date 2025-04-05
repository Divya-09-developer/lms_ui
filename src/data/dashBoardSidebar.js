import React from "react";

// Exporting the sidebarItems array
export const sidebarItems = [
  {
    id: 5,
    href: "/dshb-listing",
    iconClass: "text-20 icon-list",
    text: "Create Course",
  },
];

// Example usage of sidebarItems in a React component
function Sidebar() {
  return (
    <div className="sidebar-container">
      {sidebarItems.map((item) => (
        <a key={item.id} href={item.href} className="sidebar-item">
          <i className={item.iconClass}></i>
          <span>{item.text}</span>
        </a>
      ))}
    </div>
  );
}

export default Sidebar;
