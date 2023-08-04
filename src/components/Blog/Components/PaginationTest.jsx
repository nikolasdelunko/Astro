import React from "react";
import Next from "../../Theme/icons/Next";

const PaginationTest = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <nav className="flex justify-center mt-4">
      <ul className="pagination flex gap-[8px] justify-center">
        {currentPage !== 1 && (
          <div
            style={{ transform: "rotate(180deg)" }}
            className="bg-[#C5C3C3] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer"
            onClick={() => handlePageChange(--currentPage)}
          >
            <div className="text-mainText text-[#433E3E] text-[32px]">
              <Next />
            </div>
          </div>
        )}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <li
              key={page}
              className={`page-item ${
                page === currentPage
                  ? "bg-main-color w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer"
                  : "bg-[#C5C3C3] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer"
              }`}
              onClick={() => handlePageChange(page)}
            >
              <a
                href="#"
                className={`page-item ${
                  page === currentPage
                    ? "text-mainText text-regular text-[32px]"
                    : "text-mainText text-[#433E3E] text-[32px]"
                }`}
              >
                {page}
              </a>
            </li>
          )
        )}
        {currentPage !== totalPages && (
          <div
            className="bg-[#C5C3C3] w-[64px] h-[64px] flex justify-center items-center rounded-[50%] cursor-pointer"
            onClick={() => handlePageChange(++currentPage)}
          >
            <div className="text-mainText text-[#433E3E] text-[32px]">
              <Next />
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default PaginationTest;
