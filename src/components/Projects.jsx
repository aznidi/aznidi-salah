import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import portfolio from '../assets/portfolio.png'
import enote from '../assets/enote.png'
import isgihub from '../assets/isgihub.png'
import isgidocs from '../assets/isgidocs.png'

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

const ProjectCard = ({ title, description, image, liveLink, githubLink }) => {
  const isLiveLinkAvailable = Boolean(liveLink);
  const lines = Array.from({ length: 3 }).map(() => generateRandomLineStyles()); // Trois lignes par carte

  return (
    <motion.div
      className={`rounded-lg shadow-md overflow-hidden transition-transform transform ${
        isLiveLinkAvailable ? "hover:scale-105" : "opacity-70"
      }`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <a
        href={isLiveLinkAvailable ? liveLink : "#"}
        target={isLiveLinkAvailable ? "_blank" : ""}
        rel={isLiveLinkAvailable ? "noopener noreferrer" : ""}
        className={`block ${isLiveLinkAvailable ? "cursor-pointer" : "cursor-not-allowed"}`}
      >
        {/* Image Section */}
        <motion.div
          className="relative group"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-52 object-cover md:h-64 lg:h-72"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <p className="text-yellow-500 text-lg font-bold">
              {isLiveLinkAvailable ? "Consultez le projet" : "Lien indisponible"}
            </p>
          </div>
        </motion.div>
      </a>

      {/* Description Section */}
      <div className="p-4 flex flex-col justify-between bg-gray-800 relative">
        {/* Decorative lines */}
        {lines.map((lineStyle, index) => (
          <div
            key={index}
            className="absolute bg-yellow-500"
            style={lineStyle}
          />
        ))}

        <h3 className="text-xl font-bold text-yellow-500 mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>

        {/* GitHub Button */}
        <div className="flex justify-center">
          <a
            href={githubLink || "#"}
            target={githubLink ? "_blank" : ""}
            rel={githubLink ? "noopener noreferrer" : ""}
            className={`flex items-center gap-2 text-sm px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              githubLink
                ? "bg-yellow-500 text-gray-800 hover:bg-yellow-400 hover:scale-105"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FaGithub className="text-lg" />
            {githubLink
              ? "Explorez le code source sur GitHub"
              : "Lien GitHub indisponible"}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjetSection = () => {
  const projects = [
    {
      title: "Portfolio Moderne",
      description: "Un portfolio interactif utilisant React et Tailwind CSS.",
      image: portfolio,
      liveLink: window.location.href,
      githubLink: "https://github.com/sasswinss/aznidi-salah",
    },
    {
      title: "E-Note",
      description: "Une plateforme dédiée aux formateurs pour la gestion des séances et le suivi des formations",
      image: enote,
      liveLink: null,
      githubLink: null,
    },
    {
      title: "ISGIHub",
      description: "Une plateforme communautaire pour faciliter l'échange de documents entre les stagiaires.",
      image: isgihub,
      liveLink: "https://spontaneous-fox-1e53d6.netlify.app/",
      githubLink: "https://github.com/aznidi/isgihub-front",
    },
    {
      title: "ISGIDocs",
      description: "Une plateforme web qui permet aux stagiaires et étudiants de trouver facilement les ressources et documents pédagogiques liés à l'établissement,",
      image: isgidocs,
      liveLink: "https://docsisgi.vercel.app/",
      githubLink: "https://github.com/aznidi/docs-isgi-frontend",
    }

  ];

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          liveLink={project.liveLink}
          githubLink={project.githubLink}
        />
      ))}
    </motion.div>
  );
};

function Projects() {
  return (
    <section
      id="projets"
      className="font-poppins px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-500 min-h-screen flex flex-col items-center"
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12 mt-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projets réalisés
      </motion.h2>

      <ProjetSection />
    </section>
  );
}

export default Projects;
