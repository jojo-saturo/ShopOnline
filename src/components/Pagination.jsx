import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  handlePrevious,
  handleNext,
}) => {
  return (
    <nav className="d-flex justify-content-center mt-4 mb-4 aria-label=Product pagination">
      <ul className="pagination flex-nowrap justify-content-center mb-o">
        <li className={`page-items $ {currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li
            className={`page-items ${currentPage === index + 1 ? "active" : ""}`}
            key={index + 1}
          >
            {" "}
            <button
              className="page-link"
              onClick={() => setCurrentPage(index + 1)}
              aria-current={currentPage === index + 1 ? "page" : undefined}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li
          className={`page-items ${currentPage === totalPages ? "disabled" : ""}`}
        >
          <button
            className="page-link"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
