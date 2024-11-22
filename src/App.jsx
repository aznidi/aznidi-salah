import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import "./index.css"; // Fichier CSS global
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      
      <Navbar />
      <Hero />
      <Slider />
      <About />
      <Contact />
    </>
  );
}

export default App;
