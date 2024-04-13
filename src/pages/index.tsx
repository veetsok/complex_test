import { useProducts } from "@/business.InterfaceLayer/hooks/store/useProducts";
import { useReviews } from "@/business.InterfaceLayer/hooks/store/useReviews.ts";
import TextAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom";
import TextAtomEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Text.Atom/enum";
import CardBlock from "@/user.InterfaceLayer/Libraries/Widgets/CardBlock.widget";
import CartWidget from "@/user.InterfaceLayer/Libraries/Widgets/Cart.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";

export default function Home() {
  const { data: reviews, isLoading, isError } = useReviews();
  const {
    data: products,
    isLoading: ProductsLoading,
    isError: ProductsError,
  } = useProducts(1, 20);

  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  if (isError) {
    return <div>Error fetching reviews</div>;
  }

  console.log(reviews);
  // console.log(products);

  return (
    <main className={`${globalContainer}`}>
      <CartWidget />
      {reviews.map((review) => (
        <div key={review.id}>
          <h1>{review.text}</h1>
        </div>
      ))}
      <div className="grid grid-cols-3 gap-7 styles_height_rowCustom__l3FWB mt-10">
        <CardBlock />
      </div>
    </main>
  );
}
