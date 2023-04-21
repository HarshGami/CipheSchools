import React from "react";
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
            <div className="follower-count">0 Followers</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
