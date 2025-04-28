module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E3A8A",
          secondary: "#4B5563",
        },
        fontFamily: {
          sans: ['"Roboto"', 'sans-serif'],
          mono: ['"Fira Code"', 'monospace'],
        },
      },
    },
    plugins: [],
  }
  