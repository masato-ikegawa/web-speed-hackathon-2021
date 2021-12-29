module.exports = {
  darkMode: false,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{js,jsx,ts,tsx,html}",
  ],}
};
