import React from "react";
import "./follower.css";

function Followers() {
  return (
    <div className="follower-box">
      <div className="category-row">
        <div className="category-header">Users Following You</div>
        <div className="count">
          <h1 class="count-text">No One Following You</h1>
        </div>
      </div>
    </div>
  );
}

export default Followers;
