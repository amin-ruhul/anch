import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import NextIcon from "@/icons/Next.svg";
import PrevIcon from "@/icons/Prev.svg";

type PropTypes = {
  totalPage: number;
  initialPage: number;
  getPaginateData: (val: number) => {};
};

function Pagination({
  totalPage = 1,
  initialPage,
  getPaginateData,
}: PropTypes) {
  const [pageRange, setPageRange] = useState(5);
  const [activePage, setActivePage] = useState(() =>
    initialPage ? initialPage : 0
  );

  useEffect(() => {
    setActivePage(initialPage);
  }, [initialPage]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    getPaginateData(selected);
    setActivePage(selected);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel={
          <div className="rounded-[0.5rem] border w-[1.8rem] sm:h-[2rem] sm:w-[2rem] border-gray-400 flex items-center justify-center">
            <PrevIcon />
          </div>
        }
        nextLabel={
          <div className="rounded-[0.5rem] border w-[1.8rem] sm:h-[2rem] sm:w-[2rem] border-gray-400 flex items-center justify-center">
            <NextIcon />
          </div>
        }
        pageRangeDisplayed={pageRange}
        marginPagesDisplayed={1}
        pageCount={totalPage}
        onPageChange={handlePageChange}
        className="my-8 flex items-center"
        pageClassName="h-[1.8rem] w-[1.8rem] sm:h-[2rem] sm:w-[2rem] rounded-[0.5rem] flex items-center justify-center border border-gray-400 ml-2"
        activeClassName="bg-primary text-white"
        previousClassName="mr-[1.5rem]"
        nextClassName="ml-[1.5rem]"
        forcePage={activePage}
      />
    </div>
  );
}

export default Pagination;
