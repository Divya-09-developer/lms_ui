"use client";

import React, { useState, useEffect } from "react";
import CourseCard from "../courseCards/CourseCard"; // Ensure the import path is correct
import { coursesData } from "../../../data/courses"; // Assuming courseStates is not used in this component

export default function Courses() {
  const [filtered, setFiltered] = useState();
  const [category, setCategory] = useState("All Categories");

  // Define the categories array
  const categories = ["All Categories", "Design", "Programming", "Photography", "Art"]; // Add more categories as needed

  useEffect(() => {
    if (category === "All Categories") {
      setFiltered(); // Reset the filtered data
    } else {
      const filteredData = coursesData.filter(
        (elm) => elm.category === category
      );
      setFiltered(filteredData);
    }
  }, [category]);

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="row justify-center text-center">
        <div className="col-auto">
          <div className="sectionTitle ">
            <h2 className="sectionTitle__title sm:text-24">
              Our Most Popular Courses
            </h2>
            <p className="sectionTitle__text ">
              10,000+ unique online course list designs
            </p>
          </div>
        </div>
      </div>
      <div className="tabs__controls flex-wrap pt-50 d-flex justify-center x-gap-10 js-tabs-controls">
        {categories.map((elm, i) => (
          <div onClick={() => setCategory(elm)} key={i}>
            <button
              className={`tabs__button px-15 py-8 rounded-8 js-tabs-button ${
                category === elm ? "tabActive" : ""
              } `}
              data-tab-target=".-tab-item-2"
              type="button"
            >
              {elm}
            </button>
          </div>
        ))}
      </div>

      <div
        className="pt-60 m-auto row y-gap-30 container pl-0 pr-0"
        data-aos="fade-right"
        data-aos-offset="80"
        data-aos-duration={800}
      >
        {filtered
          ? filtered.map((elm, index) => (
              <CourseCard
                key={index}
                data={elm}
                index={index}
                data-aos="fade-right"
                data-aos-duration={(index + 1) * 300}
              />
            ))
          : coursesData
              .slice(0, 8)
              .map((elm, index) => <CourseCard key={index} data={elm} />)}
      </div>
    </section>
  );
}