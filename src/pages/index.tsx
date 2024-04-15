import { useProducts } from "@/business.InterfaceLayer/hooks/store/useProducts";
import { useReviews } from "@/business.InterfaceLayer/hooks/store/useReviews";
import CartWidget from "@/user.InterfaceLayer/Libraries/Widgets/Cart.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import ProductsWidget from "@/user.InterfaceLayer/Libraries/Widgets/Products.widget";
import ReviewsWidget from "@/user.InterfaceLayer/Libraries/Widgets/Reviews.widget";
import { useState } from "react";
import ButtonAtom from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "@/user.InterfaceLayer/Libraries/UI_KIT/Atoms/Button.Atom/enum";

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

  const handleNextPage = () => setPage((prevPage) => prevPage + 1);
  const handlePrevPage = () => setPage((prevPage) => Math.max(prevPage - 1, 1));

  return (
    <main className={`${globalContainer}`}>
      <ReviewsWidget items={reviews} />
      <CartWidget />
      <ProductsWidget isLoading={productIsLoading} products={products} />
      <div className="flex gap-3 mt-10">
        <ButtonAtom
          type={ButtonAtomEnum.enum_buyButton}
          onClick={handlePrevPage}
          disabled={page === 1}
          className="max-w-[100px]"
        >
          Previous
        </ButtonAtom>
        <ButtonAtom
          type={ButtonAtomEnum.enum_buyButton}
          onClick={handleNextPage}
          className="max-w-[100px]"
        >
          Next
        </ButtonAtom>
      </div>
    </main>
  );
}
