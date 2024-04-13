import React, { useMemo } from "react";

interface ReviewsWidgetProps {
  items?: any;
}

const ReviewsWidget: React.FC<ReviewsWidgetProps> = (props) => {
  const { items } = props;
  const memoizedItems = useMemo(() => items, [items]);

  return <>{memoizedItems}</>;
};
export default React.memo(ReviewsWidget);
