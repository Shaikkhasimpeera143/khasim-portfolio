import React from "react";

const About = () => {
  return (
    <section
      id="about"
        
      className="relative min-h-screen px-6 py-16 text-white bg-gradient-to-b from-[#0d0d25] to-[#090917] overflow-visible"
    >
      {/* Background Image with Parallax + Glow + Fit Image */}
      <div
        className="absolute inset-0 w-full h-full bg-contain bg-no-repeat bg-center opacity-20 transition duration-1000 ease-in-out hover:opacity-30 hover:brightness-125 animate-glow parallax-bg z-0"
        style={{
          backgroundImage: "url('/dev-khasim.jpg')",
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-purple-300 drop-shadow-glow">
          About Me 👨‍💻
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          I'm <strong className="text-white">Shaik Khasim Peera</strong>, I am a CSE (Data Science) student at{" "}
          <strong className="text-white">NRI Institute of Technology</strong>.
          <br /><br />
          A self-taught, passionate developer from a middle-class background who loves solving real-world problems through smart, clean code.
          <br /><br />
          💻 <strong>Interests</strong>: Web Development, AI/ML, and Java DSA. <br />
          🚀 Always learning and striving to build apps that blend logic with creativity.
        </p>
      </div>
    </section>
  );
};

export default About;
