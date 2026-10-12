import React from "react";

const Cart = ({ cartAllProduct, setCartAllProduct }) => {
  console.log("cartAllProduct", cartAllProduct);

  const handleDecrement = () => {};
  const handleIncrement = () => {};
  const handleDeleteItem = () => {};
  return (
    <div className="container-fluid">
      <div className="row p-3 gap-3">
        {cartAllProduct?.map((product) => {
          return (
            <div key={product.id} className="col-8 border rounded d-flex gap-3">
              <div className="p-1">
                <img
                  src={product?.img}
                  alt={product?.model}
                  className="cart-product-size"
                />
              </div>
              <div className="p-1">
                <div>
                  <h3 className="text-hiding m-0">
                    {product?.model?.toUpperCase()}
                  </h3>
                  <p className="m-0 fs-5">
                    <span className="font-bold">₦</span>
                    {product?.price}
                  </p>
                  <p className="m-0 font-size-12 font-bold">
                    {product?.longetivity}
                  </p>
                  <p className="m-0 font-size-12 font-bold">
                    {product?.quantity}
                  </p>
                  <div>
                    <p
                      className="m-0 fs-4 border p-0 px-2 py-1 rounded pointer"
                      onClick={handleDecrement}
                    >
                      -
                    </p>
                    <p className="m-0 fs-4">{product?.count}</p>
                    <p
                      className="m-0 fs-4 border p-0 px-2 py-1 rounded pionter"
                      onClick={handleIncrement}
                    >
                      +
                    </p>
                  </div>
                </div>

                <div>
                  <p>{product?.description}</p>
                  <p onClick={handleDeleteItem}>
                    <i
                      className="fa-solid fa-trash"
                      style={{ color: "rgb(255, 212, 59)" }}
                    ></i>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
