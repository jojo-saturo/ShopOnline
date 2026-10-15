import React, { useState } from "react";
import productList from "./data";
import Pagination from "./Pagination";
import useCartStore from "../store/cartStore";

const Home = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = Math.ceil(productList.length / productsPerPage);

  const indexOfLastPage = currentPage * productsPerPage;
  const indexOfFirstPage = indexOfLastPage - productsPerPage;
  const currentProducts = productList.slice(indexOfFirstPage, indexOfLastPage);

  const handlePrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleAddToCart = (id) => {
    const product = productList.find((item) => item.id === id);

    if (product) {
      addToCart(product);
    }
  };

  return (
    <div className="container-fluid px-3 px-md-4 py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold m-0">Recommended for you</h5>
      </div>

      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3">
        {currentProducts.map((product) => (
          <div
            className="col-6 col-sm-4 col-md-3 col-lg-custom"
            key={product?.id}
          >
            <div className="card product-card h-100 border-0 shadow-sm">
              <div className="product-image-wrapper">
                <img
                  src={product?.img}
                  alt={`${product?.brand} ${product?.model}`}
                  className="product-size"
                  loading="lazy"
                />
              </div>

              <div className="card-body p-2">
                <p className="text-muted small mb-1">{product?.brand}</p>

                <h6 className="product-title mb-2">{product?.model}</h6>

                <p className="product-price fw-bold mb-1">
                  ₦{Number(product?.price).toLocaleString("en-NG")}
                </p>

                <p className="product-description text-muted small mb-3">
                  {product?.quantity}
                </p>

                <button
                  className="btn btn-theme btn-sm w-100"
                  onClick={() => handleAddToCart(product?.id)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Home;
