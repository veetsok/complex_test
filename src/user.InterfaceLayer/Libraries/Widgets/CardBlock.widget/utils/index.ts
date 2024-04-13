// utils/sanitize.js
export function sanitize(text) {
  if (!text) return ""; // Add a check for undefined or null text
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
  };
  const reg = /[&<>"'/]/gi;
  return text.replace(reg, (match) => map[match]);
}
