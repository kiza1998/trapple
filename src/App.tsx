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
import { Toaster } from 'react-hot-toast';

// Admin imports
import { AdminLayout } from './layouts/AdminLayout';
import { Login } from './pages/admin/Login';
import { Dashboard } from './pages/admin/Dashboard';
import { AdminProducts } from './pages/admin/Products';
import { AdminOrders } from './pages/admin/Orders';
import { AdminReviews } from './pages/admin/Reviews';
import { AdminDelivery } from './pages/admin/Delivery';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <CartProvider>
          <Toaster position="top-right" />
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="reviews" element={<AdminReviews />} />
              <Route path="delivery" element={<AdminDelivery />} />
            </Route>

            {/* Public Routes */}
            <Route
              path="/"
              element={
                <div className="min-h-screen bg-white dark:bg-dark-bg dark:text-dark-text">
                  <BackgroundDecoration />
                  <FallingElements />
                  <div className="relative z-10 bg-transparent">
                    <TopBar />
                    <Navbar />
                    <Cart />
                    <Hero />
                    <Products />
                    <Footer />
                  </div>
                </div>
              }
            />
            <Route
              path="/*"
              element={
                <div className="min-h-screen bg-white dark:bg-dark-bg dark:text-dark-text">
                  <BackgroundDecoration />
                  <FallingElements />
                  <div className="relative z-10 bg-transparent">
                    <TopBar />
                    <Navbar />
                    <Cart />
                    <Routes>
                      <Route path="about" element={<About />} />
                      <Route path="contacts" element={<Contacts />} />
                      <Route path="delivery" element={<Delivery />} />
                      <Route path="reviews" element={<Reviews />} />
                      <Route path="menu/:category" element={<MenuCategory />} />
                    </Routes>
                    <Footer />
                  </div>
                </div>
              }
            />
          </Routes>
        </CartProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;