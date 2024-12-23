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
  return "Urgent requirement</strong> - complete by EOD)";
}
export default { getFullYear, getFooterCopy, getLatestNotification };
