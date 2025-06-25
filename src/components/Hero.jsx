import React from "react";
import { useTypewriter } from "../hooks/useTypewriter";

const profileImg = "https://github.com/Shaikkhasimpeera143.png";

const Hero = () => {
  const roles = [
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Java DSA Practitioner",
  ];

  const quote =
    "Crafting vision-powered apps with real intelligence — one Java line at a time.";

  const text = useTypewriter(roles, 150, 1000);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <img
        src={profileImg}
        alt="Shaik Khasim Peera"
        className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg mb-6 object-cover"
        onError={(e) => {
          e.target.src = "https://avatars.githubusercontent.com/u/00000000";
        }}
      />

      <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-3">
        Shaik Khasim Peera
      </h1>

      <h2 className="text-xl sm:text-2xl text-purple-400 h-10 font-semibold transition-all duration-300">
        {text}
      </h2>

      <p className="mt-4 max-w-md text-gray-300 italic text-sm sm:text-base">
        “{quote}”
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="bg-purple-600 hover:bg-purple-800 text-white px-6 py-2 rounded-full shadow-md transition"
        >
          🚀 View Projects
        </a>
        <a
          href="#resume"
          className="bg-teal-600 hover:bg-teal-800 text-white px-6 py-2 rounded-full shadow-md transition"
        >
          📄 Download Resume
        </a>
        <a
          href="#contact"
          className="bg-indigo-600 hover:bg-indigo-800 text-white px-6 py-2 rounded-full shadow-md transition"
        >
          📬 Hire Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
