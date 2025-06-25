import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FlyingObjects from "./components/FlyingObjects";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#1a1a40] text-white overflow-x-hidden">
      <FlyingObjects />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      <ScrollToTop />

    </div>
  );
}


export default App;