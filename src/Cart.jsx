/*import React from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">No products in cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="mb-4 border p-4 rounded shadow">
            <img src={item.image} alt={item.name} className="h-32 w-full object-cover mb-2" />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-700">₹{item.price}</p>
          </div>
        ))
      )}
    </div>n
  );
};

export default CartPage;*/
