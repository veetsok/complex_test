import { useProducts } from "@/business.InterfaceLayer/hooks/store/useProducts";
import { useReviews } from "@/business.InterfaceLayer/hooks/store/useReviews";
import CartWidget from "@/user.InterfaceLayer/Libraries/Widgets/Cart.widget";
import { globalContainer } from "@/user.InterfaceLayer/constants/styles/CommonStyles";
import ProductsWidget from "@/user.InterfaceLayer/Libraries/Widgets/Products.widget";
import ReviewsWidget from "@/user.InterfaceLayer/Libraries/Widgets/Reviews.widget";
import Pagination from "@/user.InterfaceLayer/Libraries/Widgets/Pagination.widget";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import EmptyBlock from "@/user.InterfaceLayer/Libraries/Widgets/EmptyBlock.widget";

export default function Home() {
  const router = useRouter();
  const { page } = router.query;
  const pageNumber = Number(page) || 1;
  const [currentPage, setCurrentPage] = useState(pageNumber);

  const {
    products,
    isLoading: productIsLoading,
    isError: productIsError,
  } = useProducts(pageNumber, 21);

  const {
    reviews,
    isLoading: reviewsIsLoading,
    isError: reviewsError,
  } = useReviews();

  useEffect(() => {
    setCurrentPage(pageNumber);
  }, [pageNumber]);

  const handlePageChange = (pageNumber: number) => {
    router.push(`/?page=${pageNumber}`);
    setCurrentPage(pageNumber);
  };

  const hasError = productIsError && reviewsError;
  const isDataLoaded = !productIsLoading && !reviewsIsLoading;

  return (
    <main className={`${globalContainer}`}>
      {hasError || !isDataLoaded ? (
        <EmptyBlock />
      ) : (
        <>
          <ReviewsWidget isLoading={reviewsIsLoading} items={reviews} />
          <CartWidget />
          <ProductsWidget isLoading={productIsLoading} products={products} />
          <Pagination
            currentPage={currentPage}
            totalPages={products?.total ? Math.ceil(products.total / 21) : 0}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </main>
  );
}
