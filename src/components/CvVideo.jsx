import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { motion } from "framer-motion";

function CvVideo({ onVideoLoad }) {
  const [isVideoInView, setIsVideoInView] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Valeur initiale du volume (max)
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0); // Pour la barre de progression
  const videoRef = useRef(null);

  // Handle video play when in view
  const handleScroll = () => {
    const videoElement = videoRef.current;
    const rect = videoElement.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVideoInView(true);
    } else {
      setIsVideoInView(false);
    }
  };

  // Scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Fonction pour gérer la lecture/pauses
  const togglePlayPause = () => {
    setPlaying(!playing);
  };

  // Fonction pour gérer le volume
  const toggleMute = () => {
    setMuted(!muted);
  };

  // Fonction pour gérer le changement de volume
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  // Fonction pour gérer la barre de progression
  const handleProgress = (state) => {
    setProgress(state.played * 100); // En pourcentage
  };

  // Fonction appelée lorsque la vidéo est complètement chargée
  const handleVideoLoad = () => {
    onVideoLoad(); // Appeler la fonction du parent pour mettre à jour l'état de chargement
  };

  return (
    <div
      id="accueil"
      className="relative isolate min-w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-yellow-500 px-6 lg:px-8"
    >
      {/* Video Section */}
      <div
        ref={videoRef}
        className="relative w-full h-[80vh] flex justify-center items-center overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isVideoInView ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="w-full h-full"
        >
          <ReactPlayer
            url="/cv.mp4"
            playing={playing}
            controls={false} // Désactive les contrôles par défaut
            volume={volume}
            muted={muted}
            width="100%"
            height="100%"
            className="object-cover rounded-xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            onProgress={handleProgress} // Mise à jour de la barre de progression
            onLoadedData={handleVideoLoad} // Appeler handleVideoLoad lorsque la vidéo est chargée
          />
        </motion.div>
      </div>

      {/* Custom Video Controls */}
      <div className="absolute bottom-10 w-full flex justify-center items-center space-x-4">
        <button
          onClick={togglePlayPause}
          className="bg-yellow-500 text-white p-3 rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
        >
          {playing ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
        <button
          onClick={toggleMute}
          className="bg-yellow-500 text-white p-3 rounded-full shadow-md hover:bg-yellow-600 transition duration-300"
        >
          {muted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
        </button>

        {/* Volume Slider */}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-32 h-2 bg-yellow-500 rounded-full cursor-pointer"
        />
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-5 w-full px-6">
        <div className="w-full bg-gray-700 h-2 rounded-full">
          <div
            style={{ width: `${progress}%` }}
            className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default CvVideo;
