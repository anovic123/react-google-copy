import { FC } from 'react';
import { v1 } from 'uuid';

import { paginationData } from '../common/mocks';

import PAGINATION_LOGO from '../assets/google-pagination.png';

interface PaginationProps {
  startIndex: number;
  setStartIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: FC<PaginationProps> = ({ startIndex, setStartIndex }) => {
  const handleNextPage = (page: number) => {
    setStartIndex(page);
  };

  return (
    <div className="my-8 w-auto md:w-[624px] flex flex-col gap-3 items-center">
      <img src={PAGINATION_LOGO} alt="Pagination logo" width={300} />
      <div className="flex gap-3 items-center">
        {paginationData.map(({ page }) => {
          const paginationStyles = page === startIndex ? 'text-black font-bold' : 'text-[#1a0dab]';
          return (
            <span
              key={v1()}
              className={`text-[#1a0dab] ${paginationStyles} cursor-pointer`}
              onClick={() => handleNextPage(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
    </div>
  );
};
