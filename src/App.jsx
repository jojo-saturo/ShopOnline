import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import productList from "./components/data";

function App() {
  const [productId, setProductId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {
    const filteredObject = productList.filter(
      (product) => product.id == productId,
    );
    setCartAllProduct([...cartAllProduct, ...filteredObject]);
  }, [productId]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home setProductId={setProductId} />}
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartAllProduct={cartAllProduct}
                setCartAllProduct={setCartAllProduct}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
