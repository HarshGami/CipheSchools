import "../passwordpopup/passpopup.css";
import React from "react";

function Profilepopup({ trigger, settrigger }) {
  return trigger ? (
    <div className="popup-container">
      <div className="popup">
        <div className="inner-popup">
          <div className="links-box">
            <div className="pop-link">
              <div className="pop-title">First Name</div>
              <div className="pop-input-link">
                <input
                  type="text"
                  className="pop-link-text"
                  placeholder="First Name"
                  value="Harsh"
                />
              </div>
            </div>
          </div>
          <div className="links-box">
            <div className="pop-link">
              <div className="pop-title">Last Name</div>
              <div className="pop-input-link">
                <input
                  type="text"
                  className="pop-link-text"
                  placeholder="Last Name"
                  value="Gami"
                />
              </div>
            </div>
          </div>
          <div className="links-box">
            <div className="pop-link">
              <div className="pop-title">Email Address</div>
              <div className="pop-input-link">
                <input
                  type="text"
                  className="pop-link-text"
                  placeholder="Email Address"
                  disabled
                  value="harshgami39@gmail.com"
                />
              </div>
            </div>
          </div>
          <div className="btn-box">
            <button className="left-btn" onClick={(e) => settrigger(0)}>
              Cancel
            </button>
            <button className="right-btn" onClick={(e) => settrigger(0)}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Profilepopup;
