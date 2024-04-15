import React, { useMemo } from "react";
import ReviewBlock from "../../UI_KIT/Organisms/ReviewBlock.organisms";
import heightChild from "./styled/styles.module.css";
import { ReviewsWidgetProps } from "./type";

const ReviewsWidget: React.FC<ReviewsWidgetProps> = (props) => {
  const { items, isLoading } = props;

  const loadingCards = useMemo(
    () =>
      isLoading &&
      Array.from({ length: 3 }).map((_, index) => (
        <ReviewBlock key={index} isLoading={isLoading} />
      )),
    [isLoading]
  );

  const memoizedItems = useMemo(() => {
    return items?.map((item, index) => (
      <ReviewBlock key={index} text={item.text} />
    ));
  }, [items]);

  return (
    <div
      className={`grid 2sm:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 grid-flow-row gap-7 mb-[50px] ${heightChild.height_rowCustom}`}
    >
      {loadingCards}
      {memoizedItems}
    </div>
  );
};
export default React.memo(ReviewsWidget);
