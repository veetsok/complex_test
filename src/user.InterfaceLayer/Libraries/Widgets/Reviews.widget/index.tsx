import React, { useMemo } from "react";
import ReviewBlock from "../../UI_KIT/Organisms/ReviewBlock.organisms";
import { Reviews } from "@/business.InterfaceLayer/hooks/store/useReviews.ts/type";

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

  return <>{memoizedItems}</>;
};
export default React.memo(ReviewsWidget);
