module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-desktop': "url(./assets/home/background-home-desktop.jpg)",
        'home-mobile': "url(./assets/home/background-home-mobile.jpg)",
        'destination-desktop': "url(./assets/destination/background-destination-desktop.jpg)",
        'destination-mobile': "url(./assets/destination/background-destination-mobile.jpg)",
      })
    },
    fontFamily: {
      'bellefair': ['Bellefair', 'serif'],
      'barlowCon': ['Barlow Condensed', 'sans-serif']
    }
  },
  plugins: [],
}