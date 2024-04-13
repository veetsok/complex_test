import { useProducts } from "@/business.InterfaceLayer/hooks/store/useProducts";
import CartWidget from "@/user.InterfaceLayer/Libraries/Widgets/Cart.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import heightChild from "../styles/styles.module.css";
import ProductsWidget from "@/user.InterfaceLayer/Libraries/Widgets/Products.widget";
import { useReviews } from "@/business.InterfaceLayer/hooks/store/useReviews.ts";
import ReviewsWidget from "@/user.InterfaceLayer/Libraries/Widgets/Reviews.widget";

export default function Home() {
  const {
    data: products,
    isLoading: productIsLoading,
    isError: productIsError,
  } = useProducts(1, 20);
  const {
    reviews,
    isLoading: reviewsIsLoading,
    isError: reviewsError,
  } = useReviews();

  if (productIsLoading) {
    return <div>Loading reviews...</div>;
  }

  if (productIsError) {
    return <div>Error fetching reviews</div>;
  }

  console.log(reviews);

  return (
    <main className={`${globalContainer}`}>
      <ReviewsWidget items={reviews} />
      <CartWidget />
      <div
        className={`grid grid-cols-3 gap-7 mt-10 ${heightChild.height_rowCustom}`}
      >
        <ProductsWidget products={products} />
      </div>
    </main>
  );
}
