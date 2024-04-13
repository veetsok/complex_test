import DOMPurify from "dompurify";
import React from "react";

interface ReviewBlockProps {
  text?: string;
  id?: number;
}

const ReviewBlock: React.FC<ReviewBlockProps> = (props) => {
  const { text, id } = props;

  if (!text) return "Demo";

  return (
    <>
      <div
        className="py-[15px] px-[25px] flex flex-col w-[468px] bg-bgCard roundex-[15px]"
        key={id}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </>
  );
};
export default ReviewBlock;
