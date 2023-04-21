import React from "react";
import "./header.css";
import { BiPencil } from "react-icons/bi";


function Header() {
  return (
    <div className="header_box">
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
              <div>Hello,</div>
              <h3>Harsh Gami</h3>
              <div>harshgami39@gmail.com</div>
            </div>
            <div className="follower-container">0 Followers</div>
          </div>
      </div>
    </div>
  );
}

export default Header;
