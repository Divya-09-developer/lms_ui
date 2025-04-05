import React from 'react';

// Links Data
export const links = [
  { id: 1, href: "/help-center", label: "Help" },
  { id: 2, href: "/terms", label: "Privacy Policy" },
  { id: 3, href: "/terms", label: "Cookie Notice" },
  { id: 4, href: "/terms", label: "Security" },
  { id: 5, href: "/terms", label: "Terms of Use" },
];

// Links Component
const LinksList = () => {
  return (
    <div className="links-list">
      <h2>Useful Links</h2>
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksList;