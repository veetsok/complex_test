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

  const totalPages = products?.total ? Math.ceil(products.total / 21) : 0;

  const handleGoToPage = (pageNumber: number) => setPage(pageNumber);

  return (
    <main className={`${globalContainer}`}>
      <ReviewsWidget isLoading={reviewsIsLoading} items={reviews} />
      <CartWidget />
      <ProductsWidget isLoading={productIsLoading} products={products} />
      <div className="flex gap-3 mt-10">
        {Array.from({ length: totalPages }, (_, index) => (
          <ButtonAtom
            key={index}
            type={ButtonAtomEnum.enum_buyButton}
            onClick={() => handleGoToPage(index + 1)}
            disabled={page === index + 1}
            className="max-w-[100px]"
          >
            {index + 1}
          </ButtonAtom>
        ))}
      </div>
    </main>
  );
}
