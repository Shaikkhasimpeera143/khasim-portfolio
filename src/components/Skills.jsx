// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava,
  FaNodeJs, FaDatabase, FaGitAlt, FaCuttlefish,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "C", icon: <FaCuttlefish className="text-indigo-500" /> },
  { name: "C++", icon: <FaCuttlefish className="text-blue-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-purple-950 text-white px-6 py-20 text-center"
    >
      <motion.h2
        className="text-4xl font-bold text-pink-400 mb-8 drop-shadow-glow"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        🛠️ Skills & Technologies
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#2d0b48] p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300 hover:shadow-pink-500/40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-lg font-semibold text-pink-100">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
