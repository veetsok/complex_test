import React from "react";
import { sanitizeReview } from "./utils";
import rewiewStyle from "./styled/styles.module.css";
import { ReviewBlockProps } from "./type";
import SkeletonAtom from "../../Atoms/Skeleton.Atom";

const ReviewBlock: React.FC<ReviewBlockProps> = (props) => {
  const { text, isLoading } = props;

  if (!isLoading && !text) return "Demo";
  const sanitizedText = sanitizeReview(text);

  if (isLoading)
    return (
      <div
        className={`grid grid-cols-[minmax(0,auto)] grid-rows-[auto auto auto minmax(0,100%)] py-[15px] px-[25px] flex flex-col bg-bgCard roundex-[15px] ${rewiewStyle.rewiew}`}
      >
        <SkeletonAtom />
      </div>
    );

  return (
    <>
      <div
        className={`grid grid-cols-[minmax(0,auto)] grid-rows-[auto auto auto minmax(0,100%)] py-[15px] px-[25px] flex flex-col bg-bgCard roundex-[15px] ${rewiewStyle.rewiew}`}
        dangerouslySetInnerHTML={{ __html: sanitizedText }}
      />
    </>
  );
};
export default React.memo(ReviewBlock);
