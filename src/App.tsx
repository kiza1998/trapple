import React from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { FallingElements } from './components/FallingElements';
import { BackgroundDecoration } from './components/BackgroundDecoration';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <BackgroundDecoration />
      <FallingElements />
      <div className="relative z-10 bg-transparent">
        <TopBar />
        <Navbar />
        <Hero />
        <Products />
        <Footer />
      </div>
    </div>
  );
}

export default App;