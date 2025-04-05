import React from 'react';

// Social Media Links Data
export const socialMediaLinks = [
  { id: 1, href: "#", iconClassName: "icon-facebook" },
  { id: 2, href: "#", iconClassName: "icon-twitter" },
  { id: 3, href: "#", iconClassName: "icon-instagram" },
  { id: 4, href: "#", iconClassName: "icon-linkedin" },
];

// Social Media Links Component
const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      {socialMediaLinks.map(link => (
        <a key={link.id} href={link.href} className={link.iconClassName} target="_blank" rel="noopener noreferrer">
          <i className={link.iconClassName}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;