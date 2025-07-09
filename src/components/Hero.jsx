import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-32 mx-auto rounded-full mb-6 shadow-lg border-4 border-white"
        />
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Ankit Kumar Singh
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl mb-6"
        >
          Front-End Developer | B.Tech CSE @ MAKAUT
        </motion.p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/Ankit24072002/Chakra" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-2xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ankit-kumar-singh-905109319" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 text-2xl">
            <FaLinkedin />
          </a>
          <a href="/resume.pdf" download className="ml-4 bg-white text-blue-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-100">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
