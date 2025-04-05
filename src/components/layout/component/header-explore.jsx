"use client";

import React, { useState } from "react";

export const HeaderExplore = ({ allClasses }) => {
  const [exploreActive, setExploreActive] = useState(false);
  return (
    <>
      <div className={`${allClasses ? allClasses : ""}`}>
        <a
          href="#"
          onClick={() => setExploreActive((pre) => !pre)}
          className="d-flex items-center"
          data-el-toggle=".js-explore-toggle"
        >
          <i className="icon icon-explore mr-15"></i>
          Explore
        </a>

        <div
          className={`explore-content py-25 rounded-8 bg-white toggle-element js-explore-toggle ${
            exploreActive ? "-is-el-visible" : ""
          }`}
        >
          <div className="explore__item">
            <a
              href="#"
              className="d-flex items-center justify-between text-dark-1"
            >
              Architecture<div className="icon-chevron-right text-11"></div>
            </a>
            <div className="explore__subnav rounded-8">
              <a className="text-dark-1" href={`/courses/6`}>
                Web Design
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                Graphic Design
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                Design Tools
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                User Experience Design
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                Game Design
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                3D & Animation
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                Fashion Design
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                Interior Design
              </a>
            </div>
          </div>

          <div className="explore__item">
            <a
              href="#"
              className="d-flex items-center justify-between text-dark-1"
            >
              Business<div className="icon-chevron-right text-11"></div>
            </a>
            <div className="explore__subnav rounded-8">
              <a className="text-dark-1" href={`/courses/6}`}>
                Web Design
              </a>
              <a className="text-dark-1" href={`/courses/6}`}>
                Graphic Design
              </a>
              <a className="text-dark-1" href={`/courses/6}`}>
                Design Tools
              </a>
              <a className="text-dark-1" href={`/courses/6}`}>
                User Experience Design
              </a>
              <a className="text-dark-1" href={`/courses/6}`}>
                Game Design
              </a>
              <a className="text-dark-1" href={`/courses/6}`}>
                3D & Animation
              </a>
              <a className="text-dark-1" href={`/courses/6}`}>
                Fashion Design
              </a>
              <a className="text-dark-1" href={`/courses/6}`}>
                Interior Design
              </a>
            </div>
          </div>

          <div className="explore__item">
            <a href="#" className="text-dark-1">
              Computer Programming
            </a>
          </div>

          <div className="explore__item">
            <a href="#" className="text-dark-1">
              Data Analysis
            </a>
          </div>

          <div className="explore__item">
            <a
              href="#"
              className="d-flex items-center justify-between text-dark-1"
            >
              Design<div className="icon-chevron-right text-11"></div>
            </a>
            <div className="explore__subnav rounded-8">
              <a className="text-dark-1" href={`/courses/6`}>
                Web Design
              </a>
              <a className="text-dark-1" href="/courses-single-2/3">
                Graphic Design
              </a>
              <a className="text-dark-1" href="/courses-single-3/3">
                Design Tools
              </a>
              <a className="text-dark-1" href="/courses-single-4/3">
                User Experience Design
              </a>
              <a className="text-dark-1" href="/courses-single-5/3">
                Game Design
              </a>
              <a className="text-dark-1" href="/courses-single-6/3">
                3D & Animation
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                Fashion Design
              </a>
              <a className="text-dark-1" href="/courses-single-2/3">
                Interior Design
              </a>
            </div>
          </div>

          <div className="explore__item">
            <a href="/courses-single-6/3" className="text-dark-1">
              Education
            </a>
          </div>

          <div className="explore__item">
            <a
              href="#"
              className="d-flex items-center justify-between text-dark-1"
            >
              Electronics<div className="icon-chevron-right text-11"></div>
            </a>
            <div className="explore__subnav rounded-8">
              <a className="text-dark-1" href={`/courses/6`}>
                Web Design
              </a>
              <a className="text-dark-1" href="/courses-single-2/3">
                Graphic Design
              </a>
              <a className="text-dark-1" href="/courses-single-3/3">
                Design Tools
              </a>
              <a className="text-dark-1" href="/courses-single-4/3">
                User Experience Design
              </a>
              <a className="text-dark-1" href="/courses-single-5/3">
                Game Design
              </a>
              <a className="text-dark-1" href="/courses-single-6/3">
                3D & Animation
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                Fashion Design
              </a>
              <a className="text-dark-1" href="/courses-single-2/3">
                Interior Design
              </a>
            </div>
          </div>

          <div className="explore__item">
            <a
              href="#"
              className="d-flex items-center justify-between text-dark-1"
            >
              Language<div className="icon-chevron-right text-11"></div>
            </a>
            <div className="explore__subnav rounded-8">
              <a className="text-dark-1" href={`/courses/6`}>
                Web Design
              </a>
              <a className="text-dark-1" href="/courses-single-2/3">
                Graphic Design
              </a>
              <a className="text-dark-1" href="/courses-single-3/3">
                Design Tools
              </a>
              <a className="text-dark-1" href="/courses-single-4/3">
                User Experience Design
              </a>
              <a className="text-dark-1" href="/courses-single-5/3">
                Game Design
              </a>
              <a className="text-dark-1" href="/courses-single-6/3">
                3D & Animation
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                Fashion Design
              </a>
              <a className="text-dark-1" href="/courses-single-2/3">
                Interior Design
              </a>
            </div>
          </div>

          <div className="explore__item">
            <a
              href="#"
              className="d-flex items-center justify-between text-dark-1"
            >
              Marketing<div className="icon-chevron-right text-11"></div>
            </a>
            <div className="explore__subnav rounded-8">
              <a className="text-dark-1" href={`/courses/6`}>
                Web Design
              </a>
              <a className="text-dark-1" href="/courses-single-2/3">
                Graphic Design
              </a>
              <a className="text-dark-1" href="/courses-single-3/3">
                Design Tools
              </a>
              <a className="text-dark-1" href="/courses-single-4/3">
                User Experience Design
              </a>
              <a className="text-dark-1" href="/courses-single-5/3">
                Game Design
              </a>
              <a className="text-dark-1" href="/courses-single-6/3">
                3D & Animation
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                Fashion Design
              </a>
              <a className="text-dark-1" href="/courses-single-2/3">
                Interior Design
              </a>
            </div>
          </div>

          <div className="explore__item">
            <a href="#" className="text-dark-1">
              Music Arts
            </a>
          </div>

          <div className="explore__item">
            <a href="#" className="text-dark-1">
              Social Science
            </a>
          </div>

          <div className="explore__item">
            <a
              href="#"
              className="d-flex items-center justify-between text-dark-1"
            >
              Photography & Video
              <div className="icon-chevron-right text-11"></div>
            </a>
            <div className="explore__subnav rounded-8">
              <a className="text-dark-1" href={`/courses/6`}>
                Web Design
              </a>
              <a className="text-dark-1" href="/courses-single-2/3">
                Graphic Design
              </a>
              <a className="text-dark-1" href="/courses-single-3/3">
                Design Tools
              </a>
              <a className="text-dark-1" href="/courses-single-4/3">
                User Experience Design
              </a>
              <a className="text-dark-1" href="/courses-single-5/3">
                Game Design
              </a>
              <a className="text-dark-1" href="/courses-single-6/3">
                3D & Animation
              </a>
              <a className="text-dark-1" href={`/courses/6`}>
                Fashion Design
              </a>
              <a className="text-dark-1" href="/courses-single-2/3">
                Interior Design
              </a>
            </div>
          </div>

          <div className="explore__item">
            <a href={`/courses/6`} className="text-dark-1">
              IT & Software
            </a>
          </div>

          <div className="explore__item">
            <a
              href="/courses-single-2/3"
              className="text-purple-1 underline"
            >
              View All Courses
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
