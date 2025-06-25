import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-black text-white text-center"
    >
      <motion.h2
        className="text-3xl sm:text-5xl font-bold text-purple-500 mb-6"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Resume
      </motion.h2>

      <motion.p
        className="max-w-xl text-gray-300 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I’m a self-taught developer with a strong grasp in frontend, backend, AI/ML, and DSA using Java.
        I’m passionate about solving real-world problems through code. You can check out my full resume below.
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4">
        {/* Download Button */}
        <motion.a
          href="/ShaikKhasimPeera_Resume.pdf"
          download
          className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⬇️ Download Resume
        </motion.a>

        {/* View Button */}
        <motion.a
          href="/ShaikKhasimPeera_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-indigo-600 hover:bg-indigo-800 px-6 py-3 rounded-full text-white font-semibold shadow-lg transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔎 View Resume in New Tab
      
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;
