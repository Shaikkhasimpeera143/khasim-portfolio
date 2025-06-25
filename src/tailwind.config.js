/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 4s ease-in-out infinite',
        'spin-slow': 'spin 10s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite', // ✅ added pulse
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        // pulse is already built-in in Tailwind — no need to redefine
      },
    },
  },
  plugins: [],
};
