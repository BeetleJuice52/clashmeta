
import React from "react";

const Shop = ({ items }) => {
  if (!items || !items.length) return null;

  return (
    <div className="p-4 mt-8 border-t border-blue-500 text-white">
      <h2 className="text-xl font-semibold mb-2">🛒 Shop Offers</h2>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        {items.map((item, i) => (
          <li key={i}>
            <strong>{item.name}</strong>: {item.price} Gold
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;
