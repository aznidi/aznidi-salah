import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div id="accueil" className="relative isolate px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-500 min-h-screen flex items-center">
      {/* Gradient de fond */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-500 to-gray-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Contenu central */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-poppins text-4xl font-extrabold tracking-tight sm:text-5xl text-yellow-500"
        >
          Créez l'extraordinaire !
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 font-poppins text-lg sm:text-lg text-yellow-300 leading-relaxed"
        >
          Des solutions sur-mesure pour concrétiser vos idées. Découvrez mes
          projets et compétences.
        </motion.p>

        {/* Boutons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="rounded-md font-poppins bg-yellow-500 px-6 py-3 text-lg font-bold text-gray-800 shadow-lg hover:bg-yellow-400 hover:shadow-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          >
            Explorez mon CV
          </a>

        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
