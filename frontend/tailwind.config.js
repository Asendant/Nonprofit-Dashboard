// tailwind.config.js (at project root)
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",     // covers your Login.tsx/tsx/jsx
  ],
  theme: {
    extend: {
      boxShadow: {
        // centered, even glow
        'center-shadow': '0 0 40px rgba(0, 0, 0, 0.40)',
        // optional: stronger outer glow
        // 'center-shadow-lg': '0 0 40px rgba(0,0,0,0.25)'
      },
    },
  },
  plugins: [],
};
