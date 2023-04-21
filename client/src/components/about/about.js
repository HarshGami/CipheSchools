import "./about.css";
import React from "react";

function About() {
  return (
    <div className="about_container">
      <div className="header_container">
        <div className="left-header">ABOUT ME</div>
        <div className="right-header">Edit</div>
      </div>
      <div className="input_container">
        <textarea
          className="about-text"
          name=""
          id=""
          rows="4"
          disabled
          placeholder="Add something about you."
        ></textarea>
      </div>
    </div>
  );
}

export default About;
