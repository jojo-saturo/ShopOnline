import React, { useState } from "react";
import productList from "./data";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import useCartStore from "../store/cartStore";

const Home = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const productsPerPage = 10;

  // Filter products by brand or model
  const filteredProducts = productList.filter((product) => {
    const search = searchTerm.trim().toLowerCase();
    const brand = String(product?.brand ?? "").toLowerCase();
    const model = String(product?.model ?? "").toLowerCase();

    return brand.includes(search) || model.includes(search);
  });

  // Calculate pagination from filtered products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  // Reset to the first page whenever the search changes
  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handleAddToCart = (id) => {
    const product = productList.find((item) => item.id === id);

    if (product) {
      addToCart(product);
    }
  };

  return (
    <div className="container-fluid px-3 px-md-4 py-4">
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />

      {filteredProducts.length > 0 ? (
        <>
          <div className="row g-3 product-grid" aria-live="polite">
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

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
              handlePrevious={handlePrevious}
              handleNext={handleNext}
            />
          )}
        </>
      ) : (
        <div className="text-center py-5">
          <i className="fa-solid fa-magnifying-glass fa-2x mb-3"></i>
          <h5>No perfumes found</h5>
          <p className="text-muted">
            Try searching with another brand or perfume name.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
