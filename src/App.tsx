import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { FallingElements } from './components/FallingElements';
import { BackgroundDecoration } from './components/BackgroundDecoration';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Delivery } from './pages/Delivery';
import { MenuCategory } from './pages/MenuCategory';
import { Reviews } from './pages/Reviews';
import { Cart } from './components/Cart';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          <div className="min-h-screen bg-white dark:bg-dark-bg dark:text-dark-text">
            <BackgroundDecoration />
            <FallingElements />
            <div className="relative z-10 bg-transparent">
              <TopBar />
              <Navbar />
              <Cart />
              <Routes>
                <Route path="/" element={
                  <>
                    <Hero />
                    <Products />
                  </>
                } />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/menu/:category" element={<MenuCategory />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;