import DOMPurify from "dompurify";
import React from "react";

interface ReviewBlockProps {
  text: string;
}

const ReviewBlock: React.FC<ReviewBlockProps> = (props) => {
  const { text } = props;
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(text),
  });

  return (
    <div className="p-[27px 15px] bg-bgCard">
      <div dangerouslySetInnerHTML={sanitizedData()} />
    </div>
  );
};
export default ReviewBlock;
