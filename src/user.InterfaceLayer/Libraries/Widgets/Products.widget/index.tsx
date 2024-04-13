import React, { useMemo } from "react";
import { ProductsWidgetProps } from "./type";
import CardBlockOrganisms from "../../UI_KIT/Organisms/CardBlock.organisms";

const ProductsWidget: React.FC<ProductsWidgetProps> = ({ products }) => {
  const memoizedProducts = useMemo(() => {
    return products?.products.map((product, index) => (
      <CardBlockOrganisms
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
