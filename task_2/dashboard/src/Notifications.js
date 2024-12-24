import React from "react";
import "./Notifications.css";
import utils from "./utils.js";
import "./close-icon.png";

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={() => {
          console.log("Close button has been clicked");
        }}
      >
        <img src={require("./close-icon.png")} alt="Close" />
      </button>
      <p>
        <ul>
          <li data-priority="default" className="default">
            New course available
          </li>
          <li data-priority="urgent" className="urgent">
            New course available
          </li>
          <li>{utils.getLatestNotification()}</li>
        </ul>
      </p>
      <ul>
        <li>{utils.getLatestNotification()}</li>
      </ul>
    </div>
  );
}

export default Notifications;
