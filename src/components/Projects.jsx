// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Offline AI ChatBot",
    description:
      "An offline LLM-powered chatbot that interacts intelligently without internet dependency. Built using Python, Transformers, and UI integration.",
    github: "https://github.com/Shaikkhasimpeera143/offline-chat-bot",
    live: "https://www.linkedin.com/posts/shaik-khasim-peera-284761266_ai-llm-offlineai-activity-7342166884261236737-Vf8n",
  },
  {
    title: "YOLO People Count Detection",
    description:
      "A real-time computer vision project using YOLOv8 for counting people accurately in live footage. Ideal for crowd analytics and automation.",
    github:
      "https://github.com/Shaikkhasimpeera143/people-count-detection-by-yolo-with-khasim",
    live: "https://www.linkedin.com/posts/shaik-khasim-peera-284761266_yolov8-computervision-peoplecounting-activity-7341772230290284545-SAzG",
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "A classic tic-tac-toe game built using HTML, CSS, and JavaScript. Designed with a clean UI and hosted via GitHub Pages.",
    github: "https://github.com/Shaikkhasimpeera143/tic-tac-toe-game",
    live: "https://shaikkhasimpeera143.github.io/tic-tac-toe-game/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      
      className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20 text-center"
    >
      <h2 className="text-4xl font-bold text-purple-400 mb-8">🚀 Projects</h2>

      <p className="text-gray-400 max-w-2xl mx-auto mb-10 italic">
        As a 3rd-year student, I’ve actively worked on real-world projects that
        reflect my interests in AI, Computer Vision, and Web Development. I
        consider these as the foundation of my developer journey, and I'm
        continuously working to expand this portfolio with more advanced
        creations in the coming months.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-purple-600 transition duration-300"
          >
            <h3 className="text-xl font-bold text-purple-300 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>
            <div className="flex justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full"
              >
                🔗 GitHub Repo
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-full"
              >
                🌐 Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
