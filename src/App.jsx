import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Timeline from './components/Timeline';
import Services from './components/Services';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import FunFacts from './components/FunFacts';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Experience />
      <Skills />
      <TechStack />
      <Certifications />
      <Services />
      <Projects />
      <CaseStudies />
      <FunFacts />
      <Contact />
    </div>
  );
}

export default App;
