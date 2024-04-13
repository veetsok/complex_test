import { useProducts } from "@/business.InterfaceLayer/hooks/store/useProducts";
import CardBlock from "@/user.InterfaceLayer/Libraries/Widgets/CardBlock.widget";
import CartWidget from "@/user.InterfaceLayer/Libraries/Widgets/Cart.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import heightChild from "../styles/styles.module.css";

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
        {products?.products.map((e, index) => (
          <CardBlock
            key={index}
            image_url={e.image_url}
            title={e.title}
            description={e.description}
            price={e.price}
          />
        ))}
      </div>
    </main>
  );
}
