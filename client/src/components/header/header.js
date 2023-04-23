import React ,{useState} from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { BiPencil } from "react-icons/bi";
import logo from "../../assets/Icon.png";
import Profilepopup from "../profilepopup/profilepopup";

function Header() {
  const [trigger, settrigger] = useState(0);

  return (
    <div className="header-box">
      <Profilepopup trigger={trigger} settrigger={settrigger}></Profilepopup>
      <div className="header-container">
        <div className="left-container">
          <div className="profile-box">
            <img src={logo} alt="" className="profile-image"/>
          </div>
          <div className="profile-pencil" onClick={(e) => settrigger(1)}>
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
