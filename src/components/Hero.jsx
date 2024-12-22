import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

gsap.registerPlugin(TextPlugin);

const generateRandomLineStyles = () => {
  const randomTop = Math.random() * 100 + "%";
  const randomLeft = Math.random() * 70 + "%";
  const randomRotation = Math.random() * 190 + "deg";
  const randomLength = Math.random() * 70 + "px";
  const randomWidth = Math.random() * 1 + "px"; // Thin lines
  return {
    top: randomTop,
    left: randomLeft,
    transform: `rotate(${randomRotation})`,
    width: randomLength,
    height: randomWidth,
  };
};

function Hero() {
  const changingTextRef = useRef(null);
  const lines = Array.from({ length: 15 }).map(() => generateRandomLineStyles());

  useEffect(() => {
    const texts = ["Je suis AZNIDI Salah", "Un Développeur Fullstack"];
    let currentIndex = 0;

    const changeText = () => {
      if (changingTextRef.current) {
        gsap.to(changingTextRef.current, {
          duration: 2,
          text: texts[currentIndex],
          ease: "power3.inOut",
          onComplete: () => {
            currentIndex = (currentIndex + 1) % texts.length;
            setTimeout(changeText, 1500);
          },
        });
      }
    };

    changeText();
  }, []);

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub size={28} />, link: "https://github.com/aznidi" },
    { name: "LinkedIn", icon: <FaLinkedin size={28} />, link: "https://www.linkedin.com/in/aznidi/" },
    { name: "Email", icon: <FaEnvelope size={28} />, link: "mailto:salahaznidi09@gmail.com" },
  ];

  return (
    <div
      id="accueil"
      className="relative isolate min-w-full min-h-screen flex items-center  justify-center
       bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-500 px-6 lg:px-8"
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

            {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mt-16">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start text-center
         lg:text-left space-y-6 lg:space-y-8 flex-[1] min-w-[300px]">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-poppins text-3xl md:text-4xl lg:text-5xl 
            xl:text-6xl font-extrabold tracking-tight text-yellow-500"
          >
            <span ref={changingTextRef}></span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-poppins text-lg sm:text-xl font-semibold
            lg:text-2xl max-w-2xl text-yellow-300 leading-relaxed"
          >
            À la recherche d'un <span className="font-bold uppercase text-xl tracking-tight">stage</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md font-poppins bg-yellow-500 px-6 py-3 text-lg font-bold text-gray-800 shadow-lg hover:bg-yellow-400 hover:shadow-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            >
              Explorez mon CV
            </a>
          </motion.div>
          <motion.hr initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }} className="w-60 text-yellow-300 bg-yellow-300"/>

          <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
           className="font-poppins mt-10 font-bold text-lg sm:text-xl lg:text-2xl max-w-2xl text-yellow-300 leading-relaxed">
            Get in Touch
          </motion.p>

          <motion.div className="flex gap-6" initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center 
                text-lg font-bold hover:shadow-yellow-500 hover:shadow-md rounded-md
                 transition-all duration-300 ease-in-out transform cursor-pointer bg-transparent"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right Section (Image) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="hidden lg:block lg:ml-8 flex-[1] z-10"
        >
          <img
            src="/hero.jpeg"
            alt="Hero"
            className="w-96 h-96 lg:w-96 lg:h-96 xl:w-96 xl:h-96 object-cover rounded-md shadow-md"
          />
        </motion.div>
      </div>

    </div>
  );
}

export default Hero;
