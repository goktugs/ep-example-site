import { useState } from "react";
import AdCard from "./_adCard";

export default function PaginationAd() {
  const totalAds = 30;
  const adsPerPage = 8;
  const totalPages = Math.ceil(totalAds / adsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * adsPerPage;
  const endIndex = startIndex + adsPerPage;

  const adCards = [];
  for (let i = startIndex; i < endIndex && i < totalAds; i++) {
    adCards.push(<AdCard key={i} />);
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-2 ">
        {adCards}
      </div>
      <div className="mt-4 flex w-full items-center justify-center gap-6  ">
        <button
          className={` rounded-3xl bg-main-purple-dark px-5 py-2 ${
            currentPage === 1
              ? "hidden"
              : "cursor-pointer font-extralight text-main-text-smoke"
          }`}
          onClick={handlePreviousPage}
        >
          Önceki
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={` ${
              currentPage === index + 1
                ? "font-bold text-white"
                : "font-extralight text-main-text-smoke"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`  rounded-3xl bg-main-purple-dark px-5 py-2 ${
            currentPage === totalPages
              ? "hidden"
              : "cursor-pointer font-extralight text-main-text-smoke"
          }`}
          onClick={handleNextPage}
        >
          Sonraki
        </button>
      </div>
    </>
  );
}
