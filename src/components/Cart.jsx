import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
