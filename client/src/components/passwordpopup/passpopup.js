import React from "react";
import "./passpopup.css";

function Passpopup({ trigger, settrigger }) {
  return trigger ? (
    <div className="popup-container">
      <div className="popup">
        <div className="inner-popup">
          <div className="links-box">
            <div className="pop-link">
              <div className="pop-title">Current Password</div>
              <div className="pop-input-link">
                <input
                  type="password"
                  className="pop-link-text"
                  placeholder="Current Password"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="links-box">
            <div className="pop-link">
              <div className="pop-title">New Password</div>
              <div className="pop-input-link">
                <input
                  type="password"
                  className="pop-link-text"
                  placeholder="New Password"
                  value=""
                />
              </div>
            </div>
          </div>
          <div className="links-box">
            <div className="pop-link">
              <div className="pop-title">Confirm Password</div>
              <div className="pop-input-link">
                <input
                  type="password"
                  className="pop-link-text"
                  placeholder="Confirm Password"
                  value=""
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

export default Passpopup;
