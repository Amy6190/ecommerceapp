import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart.jsx";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>E-Commerce Store</h1>
      <Cart cart={cart} />
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default App;
