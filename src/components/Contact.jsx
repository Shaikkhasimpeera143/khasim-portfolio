import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-gradient-to-br from-purple-800 via-purple-700 to-purple-900 flex flex-col items-center justify-center px-6 py-16 text-white overflow-hidden"
    >
      {/* 💡 Animated Glow Behind */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-400 rounded-full blur-3xl opacity-30 animate-pulse-slow transform -translate-x-1/2 -translate-y-1/2 z-0"></div>

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-10 z-10 relative drop-shadow-xl">
        📬 Let's Connect
      </h2>

      {/* 📝 Contact Form */}
      <form
        action="https://formspree.io/f/xjkrango"
        method="POST"
        className="relative z-10 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-full max-w-lg space-y-6 border border-white/10"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white outline-none focus:ring-2 focus:ring-cyan-300 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white outline-none focus:ring-2 focus:ring-cyan-300 transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white outline-none focus:ring-2 focus:ring-cyan-300 transition resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-white text-purple-800 font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-purple-200 transition"
        >
          Send Message 🚀
        </button>
      </form>

      {/* 📞 Contact Info */}
      <div className="mt-10 text-center text-white relative z-10 drop-shadow-lg">
        <p className="text-lg mb-2">
          or contact me 📧 Email:{" "}
          <span className="font-semibold">shaikkhasimpeera90144@gmail.com</span>
        </p>
        <p className="text-lg">
          📱 Phone: <span className="font-semibold">+91 9014473423</span>
        </p>
      </div>

      {/* 🌊 SVG Wave Background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-0">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#0ff"
            fillOpacity="0.1"
            d="M0,0 C480,100 960,0 1440,100 L1440,00 L0,0 Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Contact;
