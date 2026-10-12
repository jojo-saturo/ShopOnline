import React from "react";
import productList from "./data";

const Home = ({ setProductId }) => {
  const handleAddToCart = (id) => {
    setProductId(id);
  };

  return (
    <div className="container-fluid px-5">
      <div className="row gap-4 justify-content-center">
        {productList?.map((product, index) => {
          return (
            <div className="col-2 border rounded mt-2" key={product?.id}>
              <div className="d-flex justify-content-center p-2">
                <img src={product?.img} alt="" className="product-size" />
              </div>
              <div className="py-2">
                <div className="d-flex justify-content-between px-2">
                  <p className="m-0 font-bold font-size-12">{product?.brand}</p>
                  <p className="m-0 font-bold font-size-12">{product?.model}</p>
                </div>
                <div className="px-2">
                  <p className="m-0 ">
                    <span className="font-bold">₦</span>
                    {product?.price}
                  </p>
                  <p className="m-0 text-hiding">{product?.quantity}</p>
                </div>
                <div className="px-2">
                  <button
                    className="btn btn-theme p-1 w-100"
                    onClick={() => handleAddToCart(product?.id)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
