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
  };
  const reg = /[&<>"'/`=+;]/gi;
  return text.replace(reg, (match) => map[match]);
}

export const truncateText = (
  text: string | undefined,
  maxLength: number
): string => {
  if (!text) return "";
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};
