import React from 'react';

// Menu List Data
export const menuList = [
  {
    title: "Home",
    links: [
      { href: "/", label: "Home 1" },
      { href: "/home-2", label: "Home 2" },
      { href: "/home-3", label: "Home 3" },
      { href: "/home-4", label: "Home 4" },
      { href: "/home-5", label: "Home 5" },
      { href: "/home-6", label: "Home 6" },
      { href: "/home-7", label: "Home 7" },
      { href: "/home-8", label: "Home 8" },
      { href: "/home-9", label: "Home 9" },
      { href: "/home-10", label: "Home 10" },
    ],
  },
  {
    title: "Courses",
    links: [
      {
        title: "Course List Layouts",
        links: [
          { href: "/courses-list-1", label: "Course List v1" },
        ],
      },
      {
        title: "Course Single Layouts",
        links: [
          { href: "/courses/3", label: "Course Single v1" },
        ],
      },
      {
        title: "About Courses",
        links: [
          { href: "/lesson-single-1", label: "Lesson Page v1" },
        ],
      },
      {
        title: "Dashboard Pages",
        links: [
          { href: "/dashboard", label: "Dashboard" },
          { href: "/dshb-courses", label: "My Courses" },
          { href: "/dshb-bookmarks", label: "Bookmarks" },
          { href: "/dshb-listing", label: "Add Listing2" },
        ],
      },
      {
        title: "Popular Courses",
        links: [
          { label: "Web Developer", href: "#" },
        ],
      },
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
          { href: "/about-2", label: "About 2" },
        ],
      },
      {
        title: "Contact",
        links: [
          { href: "/contact-1", label: "Contact 1" },
          { href: "/contact-2", label: "Contact 2" },
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
      { href: "/not-found", label: "404 Page" },
      { href: "/terms", label: "FAQs" },
      { href: "/help-center", label: "Help Center" },
      { href: "/login", label: "Login" },
      { href: "/signup", label: "Register" },
      { href: "/ui-elements", label: "UI Elements" },
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