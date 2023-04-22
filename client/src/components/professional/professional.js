import React, { useEffect, useState } from "react";
import "./professional.css";
import { MdArrowDropDown } from "react-icons/md";

function Professional() {
  const dabled = "disabled";
  const [pen, setpen] = useState(0);
  const [btn, setbtn] = useState("Edit");
  const [disabled, setdisabled] = useState(dabled);
  const [cuurent, setcurrent] = useState("");
  const [edu, setedu] = useState("");

  useEffect(()=>{
    async function addprofessional(){
      const res = await fetch("http://localhost:5000/api/profile/getprofessional", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "harshgami39@gmail.com",
        }),
      });
      const data = await res.json();
      setedu(data.edu);
      setcurrent(data.current);
    }

    addprofessional();
  },[])

  async function makechanges(e) {
    e.preventDefault();

    pen ? setpen(0) : setpen(1);
    pen ? setbtn("Edit") : setbtn("Save");
    pen ? setdisabled(dabled) : setdisabled(!dabled);

    if (pen === 1) {
      const res = await fetch("http://localhost:5000/api/profile/addprofessional", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "harshgami39@gmail.com",
          current: cuurent,
          edu: edu,
        }),
      });
      const data = await res.json();
      console.log(data.message);
    }
  }

  return (
    <div className="professional-container">
      <div class="top-row">
        <div class="left-header">Professional Information</div>
        <div class="right-header" onClick={makechanges}>
          {btn}
        </div>
      </div>
      <div className="prof-info-box">
        <div className="link">
          <div className="title">Highest education</div>
          <select
            className="input-link"
            disabled={disabled}
            onClick={(e) => setedu(e.target.value)}
          >
            <span className="link-text">Graduation</span>
            <span style={{ flex: "1 1 0%" }}></span>
            <MdArrowDropDown />
            {/* <div className="dropdown"> */}
            <option value={edu} class="option-block">
              {edu}
            </option>
            <option value="Primary" class="option-block">
              Primary
            </option>
            <option value="Secondary" class="option-block">
              Secondary
            </option>
            <option value="Higher Secondary" class="option-block">
              Higher Secondary
            </option>
            <option value="Graduation" class="option-block">
              Graduation
            </option>
            <option value="Post Graduation" class="option-block">
              Post Graduation
            </option>
            {/* </div> */}
          </select>
        </div>
        <div className="link">
          <div className="title">What do you do currently?</div>
          <select
            className="input-link"
            disabled={disabled}
            onClick={(e) => setcurrent(e.target.value)}
          >
            <span className="link-text">College Student</span>
            <span style={{ flex: "1 1 0%" }}></span>
            <MdArrowDropDown />
            {/* <div className="dropdown"> */}
            <option value={cuurent} class="option-block">
              {cuurent}
            </option>
            <option value="Schooling" class="option-block">
              Schooling
            </option>
            <option value="College Student" class="option-block">
              College Student
            </option>
            <option value="Teaching" class="option-block">
              Teaching
            </option>
            <option value="Job" class="option-block">
              Job
            </option>
            <option value="Freelancing" class="option-block">
              Freelancing
            </option>
            {/* </div> */}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Professional;
