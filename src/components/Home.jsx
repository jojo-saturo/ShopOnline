import React from "react";
import productList from "./data";

const Home = ({ setProductId }) => {
  const handleAddToCart = (id) => {
    setProductId(id);
  };

  return (
    <div className="container-fluid px-3 px-md-4 py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold m-0">Recommended for you</h5>
      </div>

      <div className="row g-3">
        {productList?.map((product) => (
          <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={product?.id}>
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
    </div>
  );
};

export default Home;
