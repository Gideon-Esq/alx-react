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

export default { getFullYear, getFooterCopy };
