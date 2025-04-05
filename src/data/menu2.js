import React from 'react';

// Menu List Data
export const menuList = [
  {
    title: "Home",
    links: [
      { href: "/", label: "Home 1" },
    ],
  },
  {
    title: "Dashboard Pages",
    links: [
      { href: "/dashboard", label: "Dashboard" },
      { href: "/dshb-dashboard", label: "Single Dashboard" },
      { href: "/dshb-courses", label: "My Courses" },
      { href: "/dshb-listing", label: "Create Course" },
    ],
  },
  {
    title: "Events",
    links: [
      { href: "/event-list-1", label: "Event List 1" },
      { href: "/event-list-2", label: "Event List 2" },
      { href: "/events/1", label: "Event Single" },
      { href: "/event-cart", label: "Event Cart" },
      { href: "/event-checkout", label: "Event Checkout" },
    ],
  },
  {
    title: "Blogs",
    links: [
      { href: "/blog-list-1", label: "Blog List 1" },
      { href: "/blog-list-2", label: "Blog List 2" },
      { href: "/blog-list-3", label: "Blog List 3" },
      { href: "/blogs/3", label: "Blog Single" },
    ],
  },
  {
    title: "Pages",
    links: [
      {
        title: "About Us",
        links: [
          { href: "/about-1", label: "About 1" },
        ],
      },
      {
        title: "Contact",
        links: [
          { href: "/contact-1", label: "Contact 1" },
        ],
      },
      {
        title: "Shop",
        links: [
          { href: "/shop-cart", label: "Shop Cart" },
          { href: "/shop-checkout", label: "Shop Checkout" },
          { href: "/shop-list", label: "Shop List" },
          { href: "/shop-order", label: "Shop Order" },
          { href: "/shop/3", label: "Shop Single" },
        ],
      },
      { href: "/pricing", label: "Membership plans" },
      { href: "/terms", label: "FAQs" },
      { href: "/help-center", label: "Help Center" },
      { href: "/login", label: "Login" },
      { href: "/signup", label: "Register" },
    ],
  },
];

// Menu Component
const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        {menuList.map((menuItem, index) => (
          <li key={index}>
            <h3>{menuItem.title}</h3>
            <ul>
              {menuItem.links.map((link, linkIndex) => (
                link.links ? (
                  <li key={linkIndex}>
                    <h4>{link.title}</h4>
                    <ul>
                      {link.links.map((subLink, subLinkIndex) => (
                        <li key={subLinkIndex}>
                          <a href={subLink.href}>{subLink.label}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                )
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;