import { useProducts } from "@/business.InterfaceLayer/hooks/store/useProducts";
import CartWidget from "@/user.InterfaceLayer/Libraries/Widgets/Cart.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import heightChild from "../styles/styles.module.css";
import ProductsWidget from "@/user.InterfaceLayer/Libraries/Widgets/Products.widget";

export default function Home() {
  const { data: products, isLoading, isError } = useProducts(1, 20);

  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  if (isError) {
    return <div>Error fetching reviews</div>;
  }

  console.log(products);

  return (
    <main className={`${globalContainer}`}>
      <CartWidget />

      <div
        className={`grid grid-cols-3 gap-7 mt-10 ${heightChild.height_rowCustom}`}
      >
        <ProductsWidget products={products} />
      </div>
    </main>
  );
}
