import React, { useEffect, useState } from "react";
import "./web.css";
import { RiLinkedinBoxFill } from "react-icons/ri";
import {
  BsFacebook,
  BsGithub,
  BsGlobe2,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { BiPencil } from "react-icons/bi";

function Web() {
  const dabled = "disabled";
  const [pen, setpen] = useState(0);
  const [btn, setbtn] = useState("Edit");
  const [disabled, setdisabled] = useState(dabled);
  const [links, setlinks] = useState({
    linkedin: "",
    github: "",
    facebook: "",
    twitter: "",
    insta: "",
    website: "",
  });

  useEffect(()=>{
    async function getlinks(){
      const res = await fetch(process.env.REACT_APP_GETLINKS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "harshgami39@gmail.com",
        }),
      });
      const data = await res.json();
      setlinks(data.links);
    }

    getlinks();
  },[])

  async function makechanges(e) {
    e.preventDefault();

    pen ? setpen(0) : setpen(1);
    pen ? setbtn("Edit") : setbtn("Save");
    pen ? setdisabled(dabled) : setdisabled(!dabled);

    if (pen === 1) {
      const res = await fetch(process.env.REACT_APP_ADDLINKS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "harshgami39@gmail.com",
          links,
        }),
      });
      const data = await res.json();
      console.log(data.message);
    }
  }

  return (
    <div className="web-container">
      <div className="web-links">
        <div class="left-header">On the web</div>
        <div class="right-header" onClick={makechanges}>
          {btn}
        </div>
      </div>
      <div className="links-box">
        <div className="link">
          <div className="title">LinkedIn</div>
          <div className="input-link">
            <span className="input-icon">
              <RiLinkedinBoxFill className="web-link-image" />
            </span>
            <input
              type="text"
              name=""
              id=""
              value={links.linkedin}
              onChange={e=>{setlinks({...links,linkedin:e.target.value})}}
              className="link-text"
              disabled={disabled}
              placeholder=" LinkedIn"
            />
            {pen === 1 && (
              <div className="pen-container">
                <BiPencil className="pencil" />
              </div>
            )}
          </div>
        </div>
        <div className="link">
          <div className="title">Github</div>
          <div className="input-link">
            <span className="input-icon">
              <BsGithub className="web-link-image"/>
            </span>
            <input
              type="text"
              name=""
              id=""
              value={links.github}
              onChange={e=>setlinks({...links,github:e.target.value})}
              className="link-text"
              disabled={disabled}
              placeholder=" Github"
            />
            {pen === 1 && (
              <div className="pen-container">
                <BiPencil className="pencil" />
              </div>
            )}
          </div>
        </div>
        <div className="link">
          <div className="title">Facebook</div>
          <div className="input-link">
            <span className="input-icon">
              <BsFacebook className="web-link-image"/>
            </span>
            <input
              type="text"
              name=""
              id=""
              value={links.facebook}
              onChange={e=>setlinks({...links,facebook:e.terget.value})}
              className="link-text"
              disabled={disabled}
              placeholder=" Facebook"
            />
            {pen === 1 && (
              <div className="pen-container">
                <BiPencil className="pencil" />
              </div>
            )}
          </div>
        </div>
        <div className="link">
          <div className="title">Twitter</div>
          <div className="input-link">
            <span className="input-icon">
              <BsTwitter className="web-link-image"/>
            </span>
            <input
              type="text"
              name=""
              id=""
              value={links.twitter}
              onChange={e=>setlinks({...links,twitter:e.target.value})}
              className="link-text"
              disabled={disabled}
              placeholder=" Twitter"
            />
            {pen === 1 && (
              <div className="pen-container">
                <BiPencil className="pencil" />
              </div>
            )}
          </div>
        </div>
        <div className="link">
          <div className="title">Instagram</div>
          <div className="input-link">
            <span className="input-icon">
              <BsInstagram className="web-link-image"/>
            </span>
            <input
              type="text"
              name=""
              id=""
              value={links.insta}
              onChange={e=>setlinks({...links,insta:e.target.value})}
              className="link-text"
              disabled={disabled}
              placeholder=" Instagram"
            />
            {pen === 1 && (
              <div className="pen-container">
                <BiPencil className="pencil" />
              </div>
            )}
          </div>
        </div>
        <div className="link">
          <div className="title">Website</div>
          <div className="input-link">
            <span className="input-icon">
              <BsGlobe2 className="web-link-image"/>
            </span>
            <input
              type="text"
              name=""
              id=""
              value={links.website}
              onChange={e=>setlinks({...links,website:e.target.value})}
              className="link-text"
              disabled={disabled}
              placeholder=" Your Website"
            />
            {pen === 1 && (
              <div className="pen-container">
                <BiPencil className="pencil" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web;
