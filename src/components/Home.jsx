import React from "react";
import productList from "./data";

const Home = () => {
  const data = {
    id: 3,
    img: "https://fimgs.net/mdimg/perfume-thumbs/375x500.611.jpg",
    model: "Mademoiselle",
    brand: "Chanel",
    price: 285000,
    color: "Clear",
    quantity: "100ml",
    concentration: "Eau de Parfum",
    longetivity: "Long Lasting",
    count: 1,
    isAdded: false,
    isTrnding: true,
    type: "Perfume",
    gender: "Female",
    description: "A elegant feminine fragrance featuring citrus, rose, patchouli.vanilla and white musk."
  };
  return (
    <div className="container-fluid px-3">
      <div className="row gap-4 justify-content-center">
        {
          productList?.map((product, index) => {
            return (
              <div className="col-2 border rounded mt-2">
                <div className="d-flex justify-content-center p-2">
                  <img src={product?.img} alt="" className="product-size" />
                </div>
                <div className="py-2">
                  <div className="d-flex justify-content-between px-1">
                    <p className="m-0 font-bold">{product?.brand}</p>
                    <p className="m-0 font-bold">{product?.model}</p>
                  </div>
                  <div className="px-1">
                    <p className="m-0 "><span className="font-bold">₦</span>{product?.price}</p>
                    <p className="m-0 text-hiding">{product?.quantity}</p>
                  </div>
                  <div className="px-2">
                    <button className="btn btn-theme p-1 w-100">Add to cart</button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Home;
