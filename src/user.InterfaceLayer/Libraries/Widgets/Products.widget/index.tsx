import React, { useMemo } from "react";
import { ProductsWidgetProps } from "./type";
import CardBlockOrganisms from "../../UI_KIT/Organisms/CardBlock.organisms";
import heightChild from "./styled/styles.module.css";
import useCartStore from "@/business.InterfaceLayer/hooks/store/localstorage/useCartStore";

const ProductsWidget: React.FC<ProductsWidgetProps> = ({ products }) => {
  const memoizedProducts = useMemo(() => {
    return products?.products.map((product, index) => (
      <CardBlockOrganisms
        key={index}
        id={product.id}
        image_url={product.image_url}
        title={product.title}
        description={product.description}
        price={product.price}
      />
    ));
  }, [products?.products]);

  return (
    <div
      className={`grid grid-cols-3 gap-7 mt-10 ${heightChild.height_rowCustom}`}
    >
      {memoizedProducts}
    </div>
  );
};

export default React.memo(ProductsWidget);
