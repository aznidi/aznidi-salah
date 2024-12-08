import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiFile, FiHome, FiPhone } from "react-icons/fi";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
const generateRandomLineStyles = () => {
  const randomTop = Math.random() * 100 + "%";
  const randomLeft = Math.random() * 100 + "%";
  const randomRotation = Math.random() * 180 + "deg";
  const randomLength = Math.random() * 94 + "px";
  const randomWidth = Math.random() * 2 + "px"; // Thin lines
  return {
    top: randomTop,
    left: randomLeft,
    transform: `rotate(${randomRotation})`,
    width: randomLength,
    height: randomWidth,
  };
};


function Footer() {
  const lines = Array.from({ length: 15 }).map(() => generateRandomLineStyles());

  
  return (
    <section
      id="footer"
      className="relative font-poppins px-6 py-10 lg:px-12 bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-500 flex flex-col items-center"
    >
      {/* Background gradient and lines */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-500 to-gray-800 opacity-30 sm:w-[72.1875rem]"
        />
      </div>

      {/* Decorative lines */}
      {lines.map((lineStyle, index) => (
        <div
          key={index}
          className="absolute bg-yellow-500"
          style={lineStyle}
        />
      ))}

      {/* Title and Description */}
      <motion.div
        className="text-center mb-8 mt-36"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">AZNIDI SALAH</h2>
        <p className="text-lg text-gray-300 mt-2">
          Développeur Full Stack • Passionné par le backend
        </p>
        <p className="text-sm text-gray-400 mt-2 max-w-md mx-auto">
          Je suis un jeune développeur âgé de 19 ans, basé à Casablanca. J'aime
          travailler avec des bases de données et résoudre des problèmes
          complexes côté serveur.
        </p>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="flex flex-col md:flex-row md:justify-around w-full max-w-4xl text-sm text-gray-300 gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-start gap-4">
          <FaEnvelope className="text-yellow-500 text-lg" />
          <p>
            <a
              href="mailto:salahaznidi09@gmail.com"
              className="hover:underline hover:text-yellow-400 transition"
            >
              salahaznidi09@gmail.com
            </a>
          </p>
        </div>
        <div className="flex items-start gap-4">
          <FaPhoneAlt className="text-yellow-500 text-lg" />
          <p>
            <a
              href="tel:+212611385792"
              className="hover:underline hover:text-yellow-400 transition"
            >
              +212 6 11 38 57 92
            </a>
          </p>
        </div>
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-yellow-500 text-lg" />
          <p>19 Rue Ahmed Faris Mohamed Diouri, Casablanca</p>
        </div>
      </motion.div>

      {/* Professional Links */}
      <motion.div
        className="flex gap-6 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <a
          href="https://www.linkedin.com/in/salah-aznidi-96028530a/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition text-sm"
        >
          <FaLinkedin className="text-lg" />
          LinkedIn
        </a>
        <a
          href="https://github.com/sasswinss"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition text-sm"
        >
          <FaGithub className="text-lg" />
          GitHub
        </a>
      </motion.div>

      {/* Navigation Links */}
      <motion.div
        className="flex gap-6 mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <a
          href="#acceuil"
          className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"
        >
          <FiHome className="text-lg" />
          Accueil
        </a>
        <a
          href="#projets"
          className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"
        >
          <FiFile className="text-lg" />
          Projets
        </a>
        <a
          href="#contactez-moi"
          className="text-gray-300 hover:text-yellow-400 transition flex items-center gap-2"
        >
          <FiPhone className="text-lg" />
          Contactez-moi
        </a>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="mt-10 text-center text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p>© 2024 AZNIDI SALAH. Tous droits réservés.</p>
      </motion.div>
    </section>
  );
}

export default Footer;
