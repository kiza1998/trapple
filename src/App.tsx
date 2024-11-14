import React from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { FallingElements } from './components/FallingElements';

export function App() {
  return (
    <div className="min-h-screen bg-[#AA9FCD]">
      <FallingElements />
      <TopBar />
      <Navbar />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App;