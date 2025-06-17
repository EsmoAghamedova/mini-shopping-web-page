import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { background, textColor, toggleTheme } = useTheme();
  const { cart } = useCart();

  return (
    <header
      className="flex items-center justify-between p-4 shadow-md"
      style={{ backgroundColor: background, color: textColor }}
    >
      <div className="logo">
        <img src="/logo-removebg-preview.png" alt="Logo" className="h-30 w-30" />
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li>
            <Link to="/my-cart" className="hover:underline">
              My Cart
              {cart.length > 0 && (
                <span style={{
                  marginLeft: 6,
                  background: 'red',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '2px 8px',
                  fontSize: '0.8em'
                }}>
                  {cart.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={background !== 'white'}
        />
        <span className="slider round"></span>
      </label>
    </header>
  );
};

export default Header;
