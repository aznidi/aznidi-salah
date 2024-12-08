import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecter le défilement et ajouter le flou
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`shadow-md p-4 bg-transparent text-yellow-500 fixed top-0 left-0 right-0 z-50 ${scrolled ? 'backdrop-blur-sm' : ''}`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Image de profil à gauche */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center"
          >
            <img
              src="/profilebg.png" // Assurez-vous que le fichier profile.png est bien dans le dossier public
              alt="Profile"
              className="w-10 h-10 rounded-full md:w-10 md:h-10 object-cover cursor-pointer "
            />
          </motion.div>

          {/* Menu hamburger pour mobile */}
          <button
            className="md:hidden text-yellow-500 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>

          {/* Liens de navigation pour desktop */}
          <div className="hidden md:flex md:items-center md:justify-end md:space-x-10 font-poppins">
            {["accueil", "projets", "contactez-moi"].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative block text-lg text-yellow-400 transition group"
              >
                {link}
                {/* Effet visuel du lien */}
                <span className="absolute left-0 bottom-0 h-[3px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Menu mobile */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className={`md:hidden fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-40 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="text-center text-yellow-500 space-y-6">
            {["accueil", "projets", "contactez-moi"].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-2xl font-bold transition-all duration-300 hover:text-yellow-400"
                onClick={() => setIsOpen(false)} // Ferme le menu lors du clic sur un lien
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </header>
  );
}

export default Navbar;
