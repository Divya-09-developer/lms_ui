"use client";

import React, { useState, useEffect } from "react";

import MobileFooter from "./MobileFooter";

import { menuList } from "../data/menu";


export default function Menu({ allClasses, headerPosition }) {
  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");
  const pathname = window.location.pathname;
  useEffect(() => {
    menuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split('/')[1]  == pathname.split('/')[1] ) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.map((elm3) => {
            if (elm3.href?.split('/')[1]  == pathname.split('/')[1] ) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, []);

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        headerPosition ? headerPosition : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg"></div>

        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <a href="/login" className="text-dark-1">
            Log in
          </a>
          <a href="/signup" className="text-dark-1 ml-30">
            Sign Up
          </a>
        </div>

        <div className="menu js-navList">
          <ul className={`${allClasses ? allClasses : ""}`}>
            <li className="menu-item-has-children">
              <a
                data-barba
                href="#"
                className={menuItem == "Home" ? "activeMenu" : ""}
              >
                Home <i className="icon-chevron-right text-13 ml-10"></i>
              </a>

              <ul className="subnav">
                <li className="menu__backButton js-nav-list-back">
                  <a href="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> Home
                  </a>
                </li>

                {menuList[0].links.map((elm, i) => (
                  <li
                    key={i}
                    className={
                      pathname.split('/')[1] == elm.href.split('/')[1] ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    <a href={elm.href}>{elm.label}</a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="menu-item-has-children -has-mega-menu">
              <a
                data-barba
                href="#"
                className={menuItem == "Courses" ? "activeMenu" : ""}
              >
                Courses <i className="icon-chevron-right text-13 ml-10"></i>
              </a>

              <div className="mega xl:d-none">
                <div className="mega__menu">
                  <div className="row x-gap-40">
                    <div className="col">
                      <h4 className="text-17 fw-500 mb-20">
                        Course List Layouts
                      </h4>

                      <ul className="mega__list">
                        {menuList[1].links[0].links.map((elm, i) => (
                          <li
                            key={i}
                            className={
                              pathname.split('/')[1]  == elm.href.split('/')[1] 
                                ? "activeMenu"
                                : "inActiveMegaMenu"
                            }
                          >
                            <a data-barba href={elm.href}>
                              {elm.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    
                    <div className="col">
                      <h4 className="text-17 fw-500 mb-20">About Courses</h4>

                      <ul className="mega__list">
                        {menuList[1].links[2].links.map((elm, i) => (
                          <li
                            key={i}
                            className={
                              pathname.split('/')[1]  == elm.href.split('/')[1] 
                                ? "activeMenu"
                                : "inActiveMegaMenu"
                            }
                          >
                            <a data-barba href={elm.href}>
                              {elm.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col">
                      <h4 className="text-17 fw-500 mb-20">Dashboard Pages</h4>

                      <ul className="mega__list">
                        {menuList[1].links[3].links.map((elm, i) => (
                          <li
                            key={i}
                            className={
                              pathname.split('/')[1]  == elm.href.split('/')[1] 
                                ? "activeMenu"
                                : "inActiveMegaMenu"
                            }
                          >
                            <a data-barba href={elm.href}>
                              {elm.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col">
                      <h4 className="text-17 fw-500 mb-20">Popular Courses</h4>

                      <ul className="mega__list">
                        {menuList[1].links[4].links.map((elm, i) => (
                          <li
                            key={i}
                            className={
                              pathname.split('/')[1]  == elm.href.split('/')[1] 
                                ? "activeMenu"
                                : "inActiveMegaMenu"
                            }
                          >
                            <a data-barba href={elm.href}>
                              {elm.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mega-banner bg-purple-1 ml-40">
                    <div className="text-24 lh-15 text-white fw-700">
                      Join more than
                      <br />
                      <span className="text-green-1">8 million learners</span>
                      worldwide
                    </div>
                    <a
                      href="#"
                      className="button -md -green-1 text-dark-1 fw-500 col-12"
                    >
                      Start Learning For Free
                    </a>
                  </div>
                </div>
              </div>
            </li>

            <li className="menu-item-has-children">
              <a
                data-barba
                href="#"
                className={menuItem == "Events" ? "activeMenu" : ""}
              >
                Events <i className="icon-chevron-right text-13 ml-10"></i>
              </a>
              <ul className="subnav">
                <li className="menu__backButton js-nav-list-back">
                  <a href="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> Events
                  </a>
                </li>

                {menuList[2].links.map((elm, i) => (
                  <li
                    key={i}
                    className={
                      pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    <a data-barba href={elm.href}>
                      {elm.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="menu-item-has-children">
              <a
                data-barba
                href="#"
                className={menuItem == "Blogs" ? "activeMenu" : ""}
              >
                Blog <i className="icon-chevron-right text-13 ml-10"></i>
              </a>
              <ul className="subnav">
                <li className="menu__backButton js-nav-list-back">
                  <a href="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> Blog
                  </a>
                </li>

                {menuList[3].links.map((elm, i) => (
                  <li
                    key={i}
                    className={
                      pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    <a data-barba href={elm.href}>
                      {elm.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="menu-item-has-children">
              <a
                data-barba
                href="#"
                className={menuItem == "Pages" ? "activeMenu" : ""}
              >
                Pages <i className="icon-chevron-right text-13 ml-10"></i>
              </a>

              <ul className="subnav">
                <li className="menu__backButton js-nav-list-back">
                  <a href="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> Pages
                  </a>
                </li>
                <li className="menu-item-has-children">
                  <a
                    href="#"
                    className={
                      submenu == "About Us" ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    About Us<div className="icon-chevron-right text-11"></div>
                  </a>

                  <ul className="subnav">
                    <li className="menu__backButton js-nav-list-back">
                      <a href="#">
                        <i className="icon-chevron-left text-13 mr-10"></i>
                        About Us
                      </a>
                    </li>

                    {menuList[4].links[0].links.map((elm, i) => (
                      <li
                        key={i}
                        className={
                          pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                        }
                      >
                        <a key={i} data-barba href={elm.href}>
                          {elm.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a
                    href="#"
                    className={
                      submenu == "Contact" ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    Contact<div className="icon-chevron-right text-11"></div>
                  </a>
                  <ul className="subnav">
                    <li className="menu__backButton js-nav-list-back">
                      <a href="#">
                        <i className="icon-chevron-left text-13 mr-10"></i>
                        Contact
                      </a>
                    </li>

                    {menuList[4].links[1].links.map((elm, i) => (
                      <li
                        key={i}
                        className={
                          pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                        }
                      >
                        <a key={i} data-barba href={elm.href}>
                          {elm.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="menu-item-has-children">
                  <a
                    href="#"
                    className={
                      submenu == "Shop" ? "activeMenu" : "inActiveMenu"
                    }
                  >
                    Shop<div className="icon-chevron-right text-11"></div>
                  </a>
                  <ul className="subnav">
                    <li className="menu__backButton js-nav-list-back">
                      <a href="#">
                        <i className="icon-chevron-left text-13 mr-10"></i> Shop
                      </a>
                    </li>

                    {menuList[4].links[2].links.map((elm, i) => (
                      <li
                        key={i}
                        className={
                          pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                        }
                      >
                        <a key={i} data-barba href={elm.href}>
                          {elm.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                {menuList[4].links
                  .filter((el) => el.href)
                  .map((elm, i) => (
                    <li
                      key={i}
                      className={
                        pathname.split('/')[1]  == elm.href.split('/')[1]  ? "activeMenu" : "inActiveMenu"
                      }
                    >
                      <a key={i} data-barba href={elm.href}>
                        {elm.label}
                      </a>
                    </li>
                  ))}
              </ul>
            </li>

            <li
              
            >
              <a data-barba href="/contact-1"  className={
                pathname == "/contact-1" ? "activeMenu" : "inActiveMenuTwo"
              }>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* mobile footer start */}
        <MobileFooter />
        {/* mobile footer end */}
      </div>

      <div
        className="header-menu-close"
        data-el-toggle=".js-mobile-menu-toggle"
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>

      <div className="header-menu-bg"></div>
    </div>
  );
}
