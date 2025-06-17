"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; 

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const item = {
      id: uuidv4(),
      name,
      quantity,
      category,
    };

    onAddItem(item); 
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

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
    <main className="p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-bold">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border rounded px-2 py-1 w-64"
          />
        </div>

        <div>
          <label className="block mb-1 font-bold">Quantity:</label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className="bg-gray-500 text-white rounded px-2 py-1 mr-2 disabled:opacity-50"
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className="bg-green-500 text-white rounded px-2 py-1 ml-2 disabled:opacity-50 hover:bg-green-600"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-bold">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border rounded px-2 py-1 w-64"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
