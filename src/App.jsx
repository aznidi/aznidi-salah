import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import "./index.css"; // Fichier CSS global
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CvVideo from "./components/CvVideo";

function App() {
  return (
    <>
      
      <Navbar />
      <Hero />
      <CvVideo />
      <Slider />
      <About />
      <Contact />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
