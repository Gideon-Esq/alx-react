import React from "react";

function getFullYear(date) {
  return new Date(date).getFullYear();
}

function getFooterCopy(isIndex) {
  if (isIndex) {
    return "ALX";
  } else {
    return "ALX main dashboard";
  }
}

function getLatestNotification() {
  return (
    <span>
      <strong>Urgent requirement</strong> - complete by EOD
    </span>
  );
}
export default { getFullYear, getFooterCopy, getLatestNotification };
