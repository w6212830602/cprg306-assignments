"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1); 

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <main>

      <p>Quantity: {quantity}</p>

      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="bg-gray-500 text-white rounded px-2 py-1 mr-2 disabled:opacity-50"
      >
        -
      </button>

      <button
        onClick={increment}
        disabled={quantity === 20}
        className="bg-green-500 text-white rounded px-2 py-1 disabled:opacity-50"
      >
        +
      </button>
    </main>
  );
}
