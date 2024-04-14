import React from "react";
import { sanitizeReview } from "./utils";
import rewiewStyle from "./styled/styles.module.css";
interface ReviewBlockProps {
  text?: string;
  id?: number;
}

const ReviewBlock: React.FC<ReviewBlockProps> = (props) => {
  const { text, id } = props;

  if (!text) return "Demo";
  const sanitizedText = sanitizeReview(text);

  return (
    <>
      <div
        className={`grid grid-cols-[minmax(0,auto)] grid-rows-[auto auto auto minmax(0,100%)] py-[15px] px-[25px] flex flex-col bg-bgCard roundex-[15px] ${rewiewStyle.rewiew}`}
        key={id}
        dangerouslySetInnerHTML={{ __html: sanitizedText }}
      />
    </>
  );
};
export default ReviewBlock;
