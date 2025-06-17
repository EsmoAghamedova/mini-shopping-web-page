import React from 'react';
import { useCart } from '../context/CartContext';
import type { Product } from '../context/CartContext';

const products: Product[] = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 20 },
    { id: 3, name: 'Product C', price: 30 },
    { id: 4, name: 'Product D', price: 40 },
    { id: 5, name: 'Product E', price: 50 },
    { id: 6, name: 'Product F', price: 60 },
    { id: 7, name: 'Product G', price: 70 },
    { id: 8, name: 'Product H', price: 80 },
];

const MainContent: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Shop Now!!! 🛍️</h1>
      <p className="text-lg mb-4">Explore our latest products and enjoy shopping!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <p className="text-lg font-bold">${p.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(p)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;

