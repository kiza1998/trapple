import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-zinc-800 bg-gray-50">
        <Navbar />
        <Hero />
        <Products />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;