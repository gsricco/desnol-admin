import React from 'react';
import {PageNumber, PageNumbers} from "@/features/requests/Requests.styled";
import {PaginationPropsType} from "@/common/components/Pagination/types";


export const Pagination = ({totalPages, currentPage, handlePageChange}: PaginationPropsType) => {
  return (
    <PageNumbers>
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <PageNumber
            key={pageNumber}
            isActive={pageNumber === currentPage}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </PageNumber>
        );
      })}
    </PageNumbers>
  );
};

