import React from "react";
import "./web.css";
import { RiLinkedinBoxFill } from "react-icons/ri";
import {
  BsFacebook,
  BsGithub,
  BsGlobe2,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

function Web() {
  return (
    <div className="web-container">
      <div className="web-links">
        <div class="left-header">On the web</div>
        <div class="right-header">Edit</div>
      </div>
      <div className="links-box">
        <div className="link">
          <div className="title">LinkedIn</div>
          <div className="input-link">
            <span className="input-icon">
              <RiLinkedinBoxFill />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="link-text"
              disabled
              placeholder=" LinkedIn"
            />
          </div>
        </div>
        <div className="link">
          <div className="title">Github</div>
          <div className="input-link">
            <span className="input-icon">
              <BsGithub />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="link-text"
              disabled
              placeholder=" Github"
            />
          </div>
        </div>
        <div className="link">
          <div className="title">Facebook</div>
          <div className="input-link">
            <span className="input-icon">
              <BsFacebook />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="link-text"
              disabled
              placeholder=" Facebook"
            />
          </div>
        </div>
        <div className="link">
          <div className="title">Twitter</div>
          <div className="input-link">
            <span className="input-icon">
              <BsTwitter />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="link-text"
              disabled
              placeholder=" Twitter"
            />
          </div>
        </div>
        <div className="link">
          <div className="title">Instagram</div>
          <div className="input-link">
            <span className="input-icon">
              <BsInstagram />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="link-text"
              disabled
              placeholder=" Instagram"
            />
          </div>
        </div>
        <div className="link">
          <div className="title">Website</div>
          <div className="input-link">
            <span className="input-icon">
              <BsGlobe2 />
            </span>
            <input
              type="text"
              name=""
              id=""
              className="link-text"
              disabled
              placeholder=" Your Website"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web;
