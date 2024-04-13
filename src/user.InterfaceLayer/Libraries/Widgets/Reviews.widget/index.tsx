import React, { useMemo } from "react";
import ReviewBlock from "../../UI_KIT/Organisms/ReviewBlock.organisms";
import { Reviews } from "@/business.InterfaceLayer/hooks/store/useReviews.ts/type";
import heightChild from "./styled/styles.module.css";

interface ReviewsWidgetProps {
  items?: Reviews[];
}

const ReviewsWidget: React.FC<ReviewsWidgetProps> = (props) => {
  const { items } = props;
  const memoizedItems = useMemo(() => {
    return items?.map((item, index) => (
      <ReviewBlock key={index} text={item.text} />
    ));
  }, [items]);

  return (
    <div
      className={`grid grid-cols-3 gap-7 mt-10 ${heightChild.height_rowCustom}`}
    >
      {memoizedItems}
    </div>
  );
};
export default React.memo(ReviewsWidget);
