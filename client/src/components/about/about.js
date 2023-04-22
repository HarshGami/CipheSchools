import "./about.css";
import React, { useEffect, useState } from "react";
import { BiPencil } from "react-icons/bi";

function About() {
  const dabled = "disabled";
  const [pen, setpen] = useState(0);
  const [btn, setbtn] = useState("Edit");
  const [disabled, setdisabled] = useState(dabled);
  const [about, setabout] = useState("");

  useEffect(() => {
    async function getabout() {
      const res = await fetch(process.env.REACT_APP_GETABOUT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "harshgami39@gmail.com",
        }),
      });
      const data = await res.json();
      setabout(data.about);
    }

    getabout();
  }, []);

  async function makechanges(e) {
    e.preventDefault();

    pen ? setpen(0) : setpen(1);
    pen ? setbtn("Edit") : setbtn("Save");
    pen ? setdisabled(dabled) : setdisabled(!dabled);

    if (pen === 1) {
      const res = await fetch(process.env.REACT_APP_ADDABOUT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "harshgami39@gmail.com",
          about: about,
        }),
      });
      const data = await res.json();
      console.log(data.message);
    }
  }

  return (
    <div className="about_container">
      <div className="header_container">
        <div className="left-header">ABOUT ME</div>
        <div className="right-header" onClick={makechanges}>
          {btn}
        </div>
      </div>
      <div className="input_container">
        <textarea
          className="about-text"
          name=""
          id=""
          value={about}
          rows="4"
          disabled={disabled}
          onChange={(e) => {
            setabout(e.target.value);
          }}
          placeholder="Add something about you."
        ></textarea>
        {pen === 1 && (
          <div className="pen-container">
            <BiPencil className="pencil" />
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
