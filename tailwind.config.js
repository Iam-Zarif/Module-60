import daisyui from "daisyui"; // Import the module using ES6 import statement

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // Use the imported module directly
  daisyui: {
    themes: ["light"],
  },
};
