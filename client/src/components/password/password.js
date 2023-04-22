import "../professional/professional.css";
import React, { useState } from "react";
import Passpopup from "../passwordpopup/passpopup";

function Password() {
  const [trigger, settrigger] = useState(0);

  return (
    <>
      <div className="password-container">
        <Passpopup trigger={trigger} settrigger={settrigger}></Passpopup>
        <div className="top-row">
          <div className="left-header">Password &amp; Security</div>
          <div className="right-header" onClick={(e) => settrigger(1)}>
            Change
          </div>
        </div>
        <div className="links-box">
          <div className="link">
            <div className="title">Password</div>
            <div className="input-link">
              <input
                type="password"
                className="link-text"
                placeholder="password"
                disabled
                value=".................."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Password;
