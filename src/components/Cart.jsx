import React from "react";
import useCartStore from "../store/cartStore";

const Cart = () => {
  const { cartAllProduct, handleDecrement, handleIncrement, handleDeleteItem } =
    useCartStore();

  return (
    <div className="container-fluid">
      <div className="row p-3 gap-3">
        {cartAllProduct?.map((product) => (
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

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>

                  <span className="fs-4">{product?.count || 1}</span>

                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <p>{product?.description}</p>

                <button
                  type="button"
                  className="btn p-0"
                  aria-label={`Delete ${product?.model}`}
                  onClick={() => handleDeleteItem(product.id)}
                >
                  <i
                    className="fa-solid fa-trash"
                    style={{ color: "rgb(255, 212, 59)" }}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
