import React from "react";
import { FiBold } from "react-icons/fi";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-purple-800 via-purple-600 to-purple-400 flex flex-col items-center justify-center px-6 py-12 text-white">
      <h2 className="text-4xl font-bold mb-8 drop-shadow-lg">📬 Let's Connect</h2>

      <form
        action="https://formspree.io/f/xjkrango"
        method="POST"
        className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-3xl shadow-xl w-full max-w-lg space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white outline-none focus:ring-2 focus:ring-white transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white outline-none focus:ring-2 focus:ring-white transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          className="w-full px-5 py-3 rounded-xl bg-white bg-opacity-20 text-white placeholder-white outline-none focus:ring-2 focus:ring-white transition resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-white text-purple-800 font-bold py-3 px-6 rounded-xl shadow-lg hover:bg-purple-100 transition"
        >
          Send Message 🚀
        </button>
      </form>

      {/* Email & Phone */}
      <div className="mt-10 text-center text-white drop-shadow-md">
        <p className="text-lg mb-2">or connect with <br></br>📧 Email: <span className="font-semibold">shaikkhasimpeera90144@gmail.com</span></p>
        <p className="text-lg">📱 Phone: <span className="font-semibold">+91 9014473423</span></p>
      </div>
    </section>
  );
};

export default Contact;
