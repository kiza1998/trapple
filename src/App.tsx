import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
}

export default App;