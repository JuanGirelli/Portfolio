import React from 'react';

import './App.css';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />

    </div>
  );
 
}

export default App;