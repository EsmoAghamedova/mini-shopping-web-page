import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

export type Product = {
  id: number;
  name: string;
  price: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  resetCart: () => void; // Add this
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const resetCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};