import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

gsap.registerPlugin(TextPlugin);

function Hero() {
  const changingTextRef = useRef(null);

  useEffect(() => {
    const texts = ["Salah Aznidi", "SaS", "un Développeur Fullstack"];
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

  const technologies = [
    { name: "Docker", img: "/docker.svg" },
    { name: "JavaScript", img: "/python.svg" },
    { name: "Tailwind CSS", img: "/tailwind.svg" },
    { name: "CSS3", img: "/react.svg" },
    { name: "Laravel", img: "/laravel.svg" },
    { name: "Mysql", img: "/mysql.svg" },
    { name: "GIT", img: "/git.svg" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FaGithub size={28} />, link: "https://github.com/aznidi" },
    { name: "LinkedIn", icon: <FaLinkedin size={28} />, link: "https://www.linkedin.com/in/aznidi/" },
    { name: "Email", icon: <FaEnvelope size={28} />, link: "mailto:salahaznidi09@gmail.com" },
  ];

  return (
    <div
      id="accueil"
      className="relative isolate w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-500 px-6 lg:px-8"
    >
      {/* Background gradient */}
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
      <div className="flex flex-col items-center justify-center w-full max-w-3xl text-center">
        {/* Animated Text */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-poppins text-4xl md:text-5xl font-extrabold tracking-tight sm:text-6xl text-yellow-500"
        >
          Je suis <span ref={changingTextRef}></span>
        </motion.h1>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10"
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
      </div>

      {/* Social Links */}
      <div className="mt-6 flex flex-col items-center">
        <div className="flex gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center 
              text-lg font-bold  shadow-lg hover:shadow-yellow-500 rounded-md
              transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer bg-transparent"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-12 w-full flex flex-wrap justify-center gap-6 px-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="w-16 h-16 flex items-center justify-center overflow-hidden rounded-full bg-transparent transition-transform"
          >
            <img
              src={tech.img}
              alt={tech.name}
              className="object-contain w-14 h-14"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
