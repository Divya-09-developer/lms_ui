import React from "react";
import { footerLinks } from "./data2"; // Import your data

export const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        {footerLinks.map((section, index) => (
          <div key={index} className="footer-section">
            <h4>{section.title}</h4>
            <ul>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};


