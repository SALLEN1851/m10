/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // Add specific extensions
    "!./src/**/node_modules/**",       // Explicitly exclude node_modules
    "./components/**/*.{ts,tsx,js,jsx}",
    "./templates/**/*.{hubl,html}",
    "./styles/**/*.{css}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
