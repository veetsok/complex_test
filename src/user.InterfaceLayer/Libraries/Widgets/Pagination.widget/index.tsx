import React, { useCallback } from "react";
import ButtonAtom from "../../UI_KIT/Atoms/Button.Atom";
import ButtonAtomEnum from "../../UI_KIT/Atoms/Button.Atom/enum";
import { PaginationProps } from "./type";

const Pagination: React.FC<PaginationProps> = (props) => {
  const { currentPage = 1, totalPages = 0, onPageChange } = props;
  const pageNumbersToShow = 5;

  const pageNumbers = Array.from(
    { length: Math.min(totalPages, pageNumbersToShow) },
    (_, index) => currentPage - Math.floor(pageNumbersToShow / 2) + index
  ).filter((pageNumber) => pageNumber > 0 && pageNumber <= totalPages);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      if (onPageChange) {
        onPageChange(pageNumber);
      }
    },
    [onPageChange]
  );

  return (
    <div className="flex gap-3 mt-10">
      {pageNumbers.map((pageNumber) => (
        <ButtonAtom
          key={pageNumber}
          type={ButtonAtomEnum.enum_buyButton}
          onClick={() => handlePageChange(pageNumber)}
          disabled={currentPage === pageNumber}
          className="max-w-[100px]"
        >
          {pageNumber}
        </ButtonAtom>
      ))}
    </div>
  );
};

export default React.memo(Pagination);
