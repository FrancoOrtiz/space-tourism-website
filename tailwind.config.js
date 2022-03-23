module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-desktop': "url(../public/assets/home/background-home-desktop.jpg)",
        'home-mobile': "url(../public/assets/home/background-home-mobile.jpg)",
        'destination-desktop': "url(../public/assets/destination/background-destination-desktop.jpg)",
        'destination-mobile': "url(../public/assets/destination/background-destination-mobile.jpg)",
        'crew-desktop': "url(../public/assets/crew/background-crew-desktop.jpg)",
        'crew-mobile': "url(../public/assets/crew/background-crew-mobile.jpg)",
        'technology-desktop': "url(../public/assets/technology/background-technology-desktop.jpg)",
        'technology-mobile': "url(../public/assets/technology/background-technology-mobile.jpg)",
        'launch-desktop': "url(../public/assets/technology/image-launch-vehicle-portrait.jpg)",
        'launch-mobile': "url(../public/assets/technology/image-launch-vehicle-landscape.jpg)",
        'capsule-desktop': "url(../public/assets/technology/image-space-capsule-portrait.jpg)",
        'capsule-mobile': "url(../public/assets/technology/image-space-capsule-landscape.jpg)",
        'spaceport-desktop': "url(../public/assets/technology/image-spaceport-portrait.jpg)",
        'spaceport-mobile': "url(../public/assets/technology/image-spaceport-landscape.jpg)",
      }),
      colors: {
        gray: {
          light: '#D0D6F9',
        }
      }
    },
    fontFamily: {
      'bellefair': ['Bellefair', 'serif'],
      'barlowCon': ['Barlow Condensed', 'sans-serif']
    },
    
  },
  plugins: [],
}