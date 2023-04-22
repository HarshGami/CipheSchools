import "../professional/professional.css";
import React from "react";

function Password() {
  return (
    <div className="password-container">
      <div class="top-row">
        <div class="left-header">Password &amp; Security</div>
        <div class="right-header">Change</div>
      </div>
      <div class="links-box">
        <div class="link">
          <div class="title">Password</div>
          <div class="input-link">
            <input
              type="password"
              class="link-text"
              placeholder="password"
              disabled
              value=".................."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password;
