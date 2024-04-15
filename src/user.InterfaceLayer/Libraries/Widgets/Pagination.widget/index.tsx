import React from "react";
import ButtonAtom from "../../UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "../../UI_KIT/Atoms/Button.Atom/enum";
import { ProductsResponse } from "@/business.InterfaceLayer/hooks/store/useProducts/type";

interface PaginationProps {
  products?: ProductsResponse;
  page?: number;
  setPage?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props) => {
  const { products, page, setPage } = props;

  const totalPages = products?.total ? Math.ceil(products.total / 21) : 0;

  const handleGoToPage = (pageNumber: number) =>
    setPage ? setPage(pageNumber) : undefined;

  return (
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
  );
};
export default React.memo(Pagination);
