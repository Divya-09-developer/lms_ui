"use client";

import React from "react";
import FooterNine from "../../layout/footers/FooterNine";
import Media from "./Media";
import Curriculum from "./Curriculum";

export default function Listing() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Create New Course</h1>
           
          </div>
        </div>

        <div className="row y-gap-60">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Basic Information</h2>
              </div>

              <div className="py-30 px-30">
                <form
                  onSubmit={handleSubmit}
                  className="contact-form row y-gap-30"
                  action="#"
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Title*
                    </label>

                    <input
                      required
                      type="text"
                      placeholder="Learn Figma - UI/UX Design Essential Training"
                    />
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Short Description*
                    </label>

                    <textarea
                      required
                      placeholder="Description"
                      rows="2"
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Description*
                    </label>

                    <textarea
                      required
                      placeholder="Description"
                      rows="5"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      What will students learn in your course?*
                    </label>

                    <textarea
                      required
                      placeholder="Description"
                      rows="5"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Requirements*
                    </label>

                    <textarea
                      required
                      placeholder="Description"
                      rows="5"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Level*
                    </label>

                    <input required type="text" placeholder="Select" />
                  </div>

                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Audio Language*
                    </label>

                    <input required type="text" placeholder="Select" />
                  </div>

                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course Category*
                    </label>

                    <input required type="text" placeholder="Select" />
                  </div>

                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Sub Category*
                    </label>

                    <input required type="text" placeholder="Select" />
                  </div>

                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course Start date *
                    </label>

                    <input required type="text" placeholder="" />
                  </div>

                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course End date *
                    </label>

                    <input required type="text" placeholder="" />
                  </div>

                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Duration*
                    </label>
                    <input required type="text" placeholder="" />
                    </div>
                    <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Paid/Free*
                    </label>
                    <input required type="text" placeholder="Select" />
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Instructor
                    </label>
                    <input required type="text" placeholder="Select" />
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Course image Src
                    </label>
                    <input required type="text" placeholder="Select" />
                  </div>
                  
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Actual Price
                    </label>
                    <input required type="text" placeholder="Select" />
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                   Discounted Price
                    </label>
                    <input required type="text" placeholder="Select" />
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                   Tag
                    </label>
                    <input required type="text" placeholder="Tag" />
                  </div>
                </form>
                
              </div>
            </div>
          </div>
         
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Curriculum</h2>
              </div>

              <Curriculum />
            </div>
          </div>

          <Media />
        </div>
      </div>

      <FooterNine />
    </div>
  );
}
