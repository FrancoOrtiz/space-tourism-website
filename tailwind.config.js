module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-desktop': "url(./assets/home/background-home-desktop.jpg)",
      })
    },
  },
  plugins: [],
}