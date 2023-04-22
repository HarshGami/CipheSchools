import React from "react";
import "./professional.css";
import { MdArrowDropDown } from "react-icons/md";

function Professional() {
  return (
    <div className="professional-container">
      <div class="top-row">
        <div class="left-header">Professional Information</div>
        <div class="right-header">Edit</div>
      </div>
      <div className="prof-info-box">
        <div className="link">
          <div className="title">Highest education</div>
          <div className="input-link">
            <span className="link-text">Graduation</span>
            <span style={{ flex: "1 1 0%" }}></span>
            <MdArrowDropDown />
          </div>
        </div>
        <div className="link">
          <div className="title">What do you do currently?</div>
          <div className="input-link">
            <span className="link-text">College Student</span>
            <span style={{ flex: "1 1 0%" }}></span>
            <MdArrowDropDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professional;
