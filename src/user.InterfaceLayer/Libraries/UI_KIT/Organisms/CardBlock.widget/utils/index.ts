// utils/sanitize.ts
export function sanitize(text: string | undefined | null): string {
  if (!text) return "";
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "/": "&#x2F;",
    "`": "&#x60;",
    "=": "&#x3D;",
    "+": "&#x2B;",
    ";": "&#x3B;",
    "(": "&#x28;",
    ")": "&#x29;",
    "{": "&#x7B;",
    "}": "&#x7D;",
  };
  const reg = /[&<>"'/`=+;(){}]/gi;
  return text.replace(reg, (match) => map[match]);
}

export const truncateText = (
  text: string | undefined,
  maxLength: number
): string => {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  // Find the last space before maxLength
  const lastSpaceIndex = text.lastIndexOf(" ", maxLength);
  const truncatedText =
    lastSpaceIndex !== -1
      ? text.substring(0, lastSpaceIndex)
      : text.substring(0, maxLength);
  return truncatedText + "...";
};
