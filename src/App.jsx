import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners"; // Importer le spinner
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CvVideo from "./components/CvVideo";
import "./index.css"; // Fichier CSS global

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false); // Le chargement est terminé, on cache le loader
    };
  }, []);

  return (
    <>
      {loading ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
        >
          <ClipLoader size={50} color={"#fbbf24"} loading={loading} />
        </div>
      ) : (
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
      )}
    </>
  );
}

export default App;
