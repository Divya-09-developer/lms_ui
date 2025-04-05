import React from "react";

// Data
export const sidebarItems = [
  {
    id: 1,
    href: "/dashboard",
    iconClass: "text-20 icon-discovery",
    text: "Admin",
  },
  {
    id: 2,
    href: "/profile",
    iconClass: "text-20 icon-user",
    text: "Profile",
  },
  {
    id: 3,
    href: "/settings",
    iconClass: "text-20 icon-settings",
    text: "Settings",
  },
];

// Component
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        {sidebarItems.map((item) => (
          <li key={item.id} className="sidebar-item">
            <a href={item.href} className={item.iconClass}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
