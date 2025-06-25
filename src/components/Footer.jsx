import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 text-center border-t border-gray-800">
      <div className="flex justify-center space-x-6 mb-3">
        <a
          href="https://github.com/Shaikkhasimpeera143"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-purple-500 transition"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/shaik-khasim-peera-284761266/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <p className="text-sm text-gray-500">
        © 2025 <span className="text-purple-400 font-semibold">Shaik Khasim Peera</span> | Built with 💜 | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
