import React from "react";
import "./Notifications.css";
import utils from "./utils.js";

function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li>{utils.getLatestNotification()}</li>
      </ul>
    </div>
  );
}

export default Notifications;
