import React from "react";

const techEmojis = ["💻", "📱", "🖥️", "🧠", "⚙️", "🌐", "📡", "💾"];

const getRandomPosition = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${5 + Math.random() * 5}s`,
});

const FlyingObjects = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {techEmojis.map((emoji, index) => {
        const style = getRandomPosition();
        return (
          <div
            key={index}
            className="absolute text-3xl animate-float-slow"
            style={{
              top: style.top,
              left: style.left,
              animationDuration: style.animationDuration,
              opacity: 0.3,
            }}
          >
            {emoji}
          </div>
        );
      })}
    </div>
  );
};

export default FlyingObjects;
