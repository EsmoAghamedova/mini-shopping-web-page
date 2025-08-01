import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Cart from './components/Cart'; 
import { ThemeContext } from './context/ThemeContext';

const App: React.FC = () => {
  const [background, setBackground] = useState<string>('white');
  const [textColor, setTextColor] = useState<string>('black');

  const toggleTheme = () => {
    if (background === 'white') {
      setBackground('#283036');
      setTextColor('white');
    } else {
      setBackground('white');
      setTextColor('black');
    }
  };

  return (
    <ThemeContext.Provider value={{ background, textColor, toggleTheme }}>
      <div style={{ backgroundColor: background, color: textColor, minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/my-cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
