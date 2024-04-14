import React, { useMemo } from "react";
import ReviewBlock from "../../UI_KIT/Organisms/ReviewBlock.organisms";
import heightChild from "./styled/styles.module.css";
import { ReviewsWidgetProps } from "./type";

const ReviewsWidget: React.FC<ReviewsWidgetProps> = (props) => {
  const { items } = props;
  const memoizedItems = useMemo(() => {
    return items?.map((item, index) => (
      <ReviewBlock key={index} text={item.text} />
    ));
  }, [items]);

  return (
    <div
      className={`grid grid-cols-3 gap-7 mb-[50px] ${heightChild.height_rowCustom}`}
    >
      {memoizedItems}
    </div>
  );
};
export default React.memo(ReviewsWidget);
