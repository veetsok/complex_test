import { useProducts } from "@/business.InterfaceLayer/hooks/store/useProducts";
import { useReviews } from "@/business.InterfaceLayer/hooks/store/useReviews";
import CartWidget from "@/user.InterfaceLayer/Libraries/Widgets/Cart.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import ProductsWidget from "@/user.InterfaceLayer/Libraries/Widgets/Products.widget";
import ReviewsWidget from "@/user.InterfaceLayer/Libraries/Widgets/Reviews.widget";
import { useState } from "react";
import Pagination from "@/user.InterfaceLayer/Libraries/Widgets/Pagination.widget";

export default function Home() {
  const [page, setPage] = useState(1);
  const {
    products,
    isLoading: productIsLoading,
    isError: productIsError,
    isFetching: productIsFetching,
  } = useProducts(page, 21);
  const {
    reviews,
    isLoading: reviewsIsLoading,
    isError: reviewsError,
  } = useReviews();

  return (
    <main className={`${globalContainer}`}>
      <ReviewsWidget isLoading={reviewsIsLoading} items={reviews} />
      <CartWidget />
      <ProductsWidget isLoading={productIsLoading} products={products} />
      <Pagination />
    </main>
  );
}
