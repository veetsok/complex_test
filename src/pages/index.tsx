import { useProducts } from "@/business.InterfaceLayer/hooks/store/useProducts";
import CardBlock from "@/user.InterfaceLayer/Libraries/Widgets/CardBlock.widget";
import CartWidget from "@/user.InterfaceLayer/Libraries/Widgets/Cart.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";

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

      <div className="grid grid-cols-3 gap-7 styles_height_rowCustom__l3FWB mt-10">
        {products?.products.map((e, index) => (
          <CardBlock key={index} image_url={e.image_url} title={e.title} />
        ))}
      </div>
    </main>
  );
}
