import React from 'react';
import { useCart } from '../context/CartContext';
import Footer from './Footer'; 

const Cart: React.FC = () => {
  const { cart, resetCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> ${total}</p>
            <button
            onClick={resetCart}
            style={{
              backgroundColor: '#ff4d4f',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '8px 16px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginTop: '10px'
            }}
            >
            Reset Cart
            </button>

            <Footer />
        </>
      )}
    </div>
  );
};

export default Cart;