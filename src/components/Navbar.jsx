import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];

  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        <h1
          className="text-xl sm:text-2xl font-bold cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          Shaik Khasim peera 💻
        </h1>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-6 font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-purple-400 transition"
              onClick={() => scrollToSection(link)}
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div
          className="sm:hidden cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "❌" : "☰"}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col bg-black px-6 py-4 space-y-4 text-white font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="cursor-pointer hover:text-purple-400 transition"
              onClick={() => scrollToSection(link)}
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
