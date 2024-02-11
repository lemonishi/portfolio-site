/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#243c5a",
        "sky-blue": "#2e9cca",
        "navy-blue": "#29648A",
      },
      padding: {
        "nav-content": "min(20vh, 6rem)",
      },
      zIndex: {
        100: "100",
      },
      height: {
        a4: "297mm",
      },
      width: {
        a4: "210mm",
      },
      backgroundImage: {
        cvProject: "url('src/assets/cv-preview.png')",
      },
    },
  },
  plugins: [],
};
