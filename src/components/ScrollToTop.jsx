import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-400 to-blue-600 text-white p-4 rounded-full shadow-lg animate-pulse hover:scale-110 hover:shadow-cyan-500/50 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTop;
