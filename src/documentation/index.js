import React from "react";

const index = () => {
  return (
    <div className="body_wrapper sticky_menu">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg menu_one menu_logo_change">
        <div className="container-fluid pl-60 pr-60">
          <a className="navbar-brand" href="index.html">
            <img className="logo" src="img/logo.svg" alt="logo" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="menu_toggle">
              <span className="hamburger">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span className="hamburger-cross">
                <span></span>
                <span></span>
              </span>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="ml-auto navbar-nav menu">
              <li className="nav-item">
                <a
                  href="https://themeforest.net/user/ib-themes/portfolio"
                  target="_blank"
                  className="nav-link dropdown-toggle"
                >
                  Awesome templates
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://themeforest.net/item/educrat-online-courses-education-nextjs-template/46903172"
                  target="_blank"
                  className="nav-link dropdown-toggle"
                >
                  Purchase
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://themeforest.net/user/ib-themes/portfolio"
                  target="_blank"
                  className="action_btn btn_small_two"
                >
                  Buy More Template <i className="arrow_right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Documentation Section */}
      <section className="doc_documentation_area onepage_doc_area" id="sticky_doc">
        <div className="overlay_bg"></div>
        <div className="container-fluid pl-60 pr-60">
          <div className="row doc-container">
            <div className="col-lg-2 doc_mobile_menu doc-sidebar display_none">
              {/* Start Asid area */}
              <aside className="doc_left_sidebarlist">
                <h3 className="nav_title">Doc NAVIGATION</h3>
                <div className="scroll">
                  <ul className="list-unstyled nav-sidebar doc-nav">
                    <li className="nav-item">
                      <a href="#getting_started" className="nav-link">
                        <img src="img/onepage-icon/smiles-icon.png" alt="" />
                        Getting Started
                      </a>
                      <ul className="list-unstyled dropdown_nav">
                        <li className="nav-item">
                          <a href="#requirements" className="nav-link">
                            Requirements
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#whats_included" className="nav-link">
                            What's Included
                          </a>
                        </li>
                      </ul>
                      <span className="icon">
                        <i className="icon_plus"></i>
                        <i className="icon_minus-06"></i>
                      </span>
                    </li>
                    <li className="nav-item">
                      <a href="#React_installation" className="nav-link">
                        <img src="img/side-nav/cmm4.png" alt="Educrat" />
                        Next Installation
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#basic_site_setting" className="nav-link">
                        <img src="img/side-nav/rc12.png" alt="Educrat" />
                        Basic Site Setting
                      </a>
                      <ul className="list-unstyled dropdown_nav">
                        <li className="nav-item">
                          <a href="#change_site_title_and_favicon" className="nav-link">
                            Change Site Title and Favicon
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#change_logo" className="nav-link">
                            Change Logo
                          </a>
                        </li>
                      </ul>
                      <span className="icon">
                        <i className="icon_plus"></i>
                        <i className="icon_minus-06"></i>
                      </span>
                    </li>
                    <li className="nav-item">
                      <a href="#template_options" className="nav-link">
                        <img src="img/side-nav/gear.png" alt="Educrat" />
                        Template Options
                      </a>
                      <ul className="list-unstyled dropdown_nav">
                        <li className="nav-item">
                          <a href="#header" className="nav-link">
                            Header
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#hero" className="nav-link">
                            Hero Section
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#homepages" className="nav-link">
                            Homepages
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#listing" className="nav-link">
                            Listing
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#blog" className="nav-link">
                            Blog
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#contact" className="nav-link">
                            Contact
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#copy-right" className="nav-link">
                            Footer
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#all-data" className="nav-link">
                            All Data
                          </a>
                        </li>
                        <li className="nav-item">
                          <a href="#error" className="nav-link">
                            404
                          </a>
                        </li>
                      </ul>
                      <span className="icon">
                        <i className="icon_plus"></i>
                        <i className="icon_minus-06"></i>
                      </span>
                    </li>
                    <li className="nav-item">
                      <a href="#global-color" className="nav-link">
                        <img src="img/side-nav/color-palette.png" alt="Educrat" />
                        Global Color
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#change-log" className="nav-link">
                        <img src="img/side-nav/document2.png" alt="Educrat" />
                        Change Log
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
              {/* End Asid area */}
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="documentation_info" id="post">
                <article className="pt-0 documentation_body doc-section" id="getting_started">
                  <div className="shortcode_title">
                    <h1>Getting Started</h1>
                    <p>
                      Welcome to
                      <strong>Educrat - Professional LMS Online Education Course NextJS Template.</strong>
                      We would like to thank you for choosing our template -
                      <strong>Educrat</strong>.
                    </p>
                    <p>
                      It’s built with the most modern tools <strong>React NextJS + Bootstrap 5</strong>. it’s a
                      high-Quality and well organized React NextJS Template specially designed to fit all the needs of
                      a Real Estate Business. With a wide variety of custom pages, 10 completely different
                      Homepages and endless design possibilities.
                    </p>
                    <p>
                      it’s a very complete and highly customizable React NextJS template that will help you build
                      your own website layouts. It's Simple, elegant, extensive, professional..
                    </p>
                  </div>
                  <div className="shortcode_title" id="requirements">
                    <h2>Requirements</h2>
                    <p>
                      There are system requirements in order to install and setup this template and its components
                      properly. Make sure that you alredy installed <strong>Node.js </strong> and
                      <strong>Yarn</strong> in your pc
                    </p>
                  </div>
                  <h3 className="c_head load-order-2" id="php-configuration-limits">
                    Recommended node and yarn
                  </h3>
                  <img className="w-100 img-thumbnail" src="img/educrat/installation/1.png" alt="installation" />
                  <br />
                  <br />
                  <img className="w-100 img-thumbnail" src="img/educrat/installation/2.png" alt="installation" />
                  <br />
                  <br />
                  <h4 className="c_head load-order-2" id="php-configuration-limits">
                    Install Yarn
                  </h4>
                  <img className="w-100 img-thumbnail" src="img/educrat/installation/3.png" alt="installation" />
                  <br />
                  <br />
                  <div className="shortcode_title" id="whats_included">
                    <h2>What's Included</h2>
                    <p>
                      After purchasing Educrat template on themeforest.net with your envato account, go to your
                      download page. You can choose to download Educrat template only (Installable React template)
                      or the entire Educrat template.After extract the package you will find following this files:
                    </p>
                    <img
                      className="w-100 img-thumbnail"
                      src="img/educrat/included/1.png"
                      alt="whats-included"
                    />
                  </div>

                  <h3 className="c_head load-order-2" id="template-package">
                    You can get the following items after purchasing our template from themeforest
                  </h3>
                  <div className="steps-panel">
                    <ul className="ordered-list">
                      <li>
                        <strong>Educrat</strong> - An Installable React template zip file. this file you need to
                        upload
                      </li>
                      <li>
                        <strong>License</strong> - This folder contains the terms and conditions of the license.
                      </li>
                      <li>
                        <strong>Documentation</strong> - This folder contains what you are reading now :)
                      </li>
                    </ul>
                  </div>
                </article>
                <article className="documentation_body doc-section" id="React_installation">
                  <div className="shortcode_title">
                    <h2>Next Installation</h2>
                    <p>
                      Please follow the instructions in the video to see how you can install React on your hosting:
                    </p>
                  </div>
                  <div className="steps-panel">
                    <ol className="ordered-list">
                      <li>
                        <strong>For local host</strong> -
                        <ol className="ordered-list">
                          <li>Open you command prompt</li>
                          <li>yarn install</li>
                          <li>
                            yarn dev (will start the dev server at http://loaclhost:3000)
                          </li>
                        </ol>
                      </li>
                      <li>
                        <strong>Deploying to Netlify</strong> -{" "}
                        <a href="https://www.youtube.com/watch?v=TbQ4kWX29lQ">
                          https://www.youtube.com/watch?v=TbQ4kWX29lQ
                        </a>
                      </li>
                    </ol>
                    <br />
                    <br />

                    <ol className="ordered-list">
                      <li>
                        <strong>For locally build</strong> -
                        <ol className="ordered-list">
                          <li>Open you command prompt</li>
                          <li>yarn build (will build locally and generate public directory)</li>
                          <li>
                            yarn start (will start the locally build server at
                            <strong>http://loaclhost:3000</strong>)
                          </li>
                        </ol>
                      </li>
                      <li>
                        <strong>Deploying to Vercel</strong> -{" "}
                        <a href="https://www.youtube.com/watch?v=_8wkKL0LKks">
                          https://www.youtube.com/watch?v=_8wkKL0LKks
                        </a>
                      </li>
                    </ol>
                    <br />
                    <br />
                    <h5 className="ml-20">Other Scripts</h5>
                    <ol className="ordered-list">
                      <li>Open you command prompt</li>
                      <li>yarn lint:fix (This will format your code and fix auto fixable eslint error)</li>
                    </ol>
                  </div>
                </article>
                <article className="documentation_body doc-section" id="basic_site_setting">
                  <div className="shortcode_title" id="change_site_title_and_favicon">
                    <h2 className="load-order-2">Change Site Title and Favicon</h2>
                    <p>
                      To change your Site title and Favicon open the Educrat in your editor and go to the location
                      by following screenshot which are given bellow.
                    </p>

                    <figure>
                      <img
                        className="w-100 img-thumbnail"
                        src="img/educrat/basic-setting/faviocn.png"
                        alt="go to Appearance -> Import Demo Data"
                      />
                      <figcaption className="text-center">
                        By folllowing this screenshot you can change favicon image
                      </figcaption>
                    </figure>
                    <figure>
                      <img
                        className="w-100 img-thumbnail"
                        src="img/educrat/basic-setting/2.png"
                        alt="go to Appearance -> Import Demo Data"
                      />
                      <figcaption className="text-center">
                        By folllowing this screenshot you can change favicon image
                      </figcaption>
                    </figure>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer or other components can go here */}
      {/* Include CSS files */}
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-select.min.css" />
      {/* icon css */}
      <link rel="stylesheet" href="assets/elagent-icon/style.css" />
      <link rel="stylesheet" href="assets/font-awesome/css/all.css" />
      <link rel="stylesheet" href="assets/niceselectpicker/nice-select.css" />
      <link rel="stylesheet" href="assets/font-size/css/rvfs.css" />
      <link rel="stylesheet" href="assets/animation/animate.css" />
      <link rel="stylesheet" href="assets/video/video-js.css" />
      <link rel="stylesheet" href="assets/tooltipster/css/tooltipster.bundle.css" />
      <link rel="stylesheet" href="assets/prism/prism.css" />
      <link rel="stylesheet" href="assets/prism/prism-coy.css" />
      <link rel="stylesheet" href="assets/magnify-pop/magnific-popup.css" />
      <link rel="stylesheet" href="assets/mcustomscrollbar/jquery.mCustomScrollbar.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/responsive.css" />
    </div>
  );
};

export default index;
