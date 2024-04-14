// utils/sanitize.ts
export const sanitizeReview = (text: string | undefined): string => {
  if (!text) return "";

  const fragment = document.createElement("div");
  fragment.innerHTML = text;

  const firstParagraph = fragment.querySelector("p");
  if (firstParagraph) {
    const firstParagraphText = firstParagraph.textContent || "";
    firstParagraph.textContent = firstParagraphText.substring(0, 10);
  }

  const secondParagraph = fragment.querySelector("p:last-child");
  if (secondParagraph) {
    const secondParagraphText = secondParagraph.textContent || "";
    secondParagraph.textContent = secondParagraphText.substring(0, 120);
  }

  return fragment.innerHTML;
};
