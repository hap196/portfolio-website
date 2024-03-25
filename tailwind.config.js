/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      'navy': "#0D1639",
      'coral': "#F76C6C",
      'brighter-coral': '#fc5353',
      'light-blue': '#A8BAD8',
      'light-blue-2': '#c1d4f5',
      'dark-blue': '#1e2b57',
      'mustard': '#F8E9A1',
      'off-white':'#DEEAFF',
      'dark-coral': '#a84a4a',
      'off-black': '#161617',
      'darker-blue': '#1B2545',
      'lighter-blue':'#ebf1fc',
    },
  },
  plugins: [],
};
