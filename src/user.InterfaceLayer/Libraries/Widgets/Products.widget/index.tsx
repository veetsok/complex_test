import React, { useMemo } from "react";
import CardBlock from "../../UI_KIT/Organisms/CardBlock.widget";
import { ProductsWidgetProps } from "./type";

const ProductsWidget: React.FC<ProductsWidgetProps> = ({ products }) => {
  const memoizedProducts = useMemo(() => {
    return products?.products.map((product, index) => (
      <CardBlock
        key={index}
        image_url={product.image_url}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    ));
  }, [products]);

  return <>{memoizedProducts}</>;
};

export default React.memo(ProductsWidget);
