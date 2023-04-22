import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { BiPencil } from "react-icons/bi";

function Header() {
  return (
    <div className="header-box">
      <div className="header-container">
        <div className="left-container">
          <div className="profile-box">
            {/* <img src={logo} alt="" srcset="" width={70} height={70} /> */}
          </div>
          <div className="profile-pencil">
            <BiPencil className="pencil" />
          </div>
        </div>
        <div className="right-container">
          <div className="detail-container">
            <div className="greeting">Hello,</div>
            <h5 className="user-name">Harsh Gami</h5>
            <div className="user-email">harshgami39@gmail.com</div>
          </div>
          <div className="follower-container">
            <Link className="follower-count" to="/followers">0 Followers</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
