/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx,html}", // Add specific extensions
    "!./src/**/node_modules/**",       // Explicitly exclude node_modules
    './components/**/*.{js,jsx,ts,tsx,html,css}',
    './modules/**/*.{js,jsx,ts,tsx,html,css}',
    './templates/**/*.{js,jsx,ts,tsx,html,css}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here that work with HubSpot theme settings
        primary: {
          light: 'var(--primary-light)',
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)'
        },
        secondary: {
          light: 'var(--secondary-light)',
          DEFAULT: 'var(--secondary)',
          dark: 'var(--secondary-dark)'
        },
      },
    },
  },
  plugins: [],
}
