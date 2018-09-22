const techImagesSource = {
  html: "../images/technology-images/html-5.svg",
  css: "../images/technology-images/css-3.svg",
  javascript: "../images/technology-images/javascript.svg",
  mongodb: "../images/technology-images/mongodb.svg",
  mongolab: "../images/technology-images/mongolab.svg",
  nodejs: "../images/technology-images/nodejs.svg",
  vuejs: "../images/technology-images/vue.svg"
};

const projectContentObject = [
  {
    id: 1,
    title: "Nepbot",
    projectDescription: "NepBot is built around the concept of increasing user interactivity within chat by allowing users to create personal, unique profiles. These profiles allow users to gain experience points by being active in chat and gain currency through the use of NepBot's commands and features. Commands range from simple image response commands which has NepBot posting images in chat to a leaderboard ranking system allowing the top 5 users to be ranked by total commands used, amount of currency, and level.",
    projectImageURL: "../images/nepbot-showcase-overlay.gif",
    projectSourceURL: "https://github.com/IndecisiveBoolean/nepbot",
    technologiesImages: [techImagesSource.javascript, techImagesSource.mongodb, techImagesSource.nodejs, techImagesSource.vuejs],
    
  },
  {
    id: 2,
    title: "Your Weather",
    projectDescription: "Using OpenWeatherMap's API get your current local weather conditions instantly! Or search for the current conditions elsewhere via Zipcode. This simply weather condition displaying webapp is built using plain ol' JavaScript, HTML, and CSS.",
    projectImageURL: "../images/weather-proj-thumbnail.PNG",
    projectSourceURL: "https://indecisiveboolean.github.io/yourweather/",
    technologiesImages: [techImagesSource.html, techImagesSource.css, techImagesSource.javascript],
    
  },
  {
    id: 3,
    title: "To Do",
    projectDescription: "This ToDo list using JavaScript to dynamically generate list items to help keep you organized and less forgetful. It's not the most complex but it gets the job done nonetheless.",
    projectImageURL: "../images/todo-proj-thumbnail.PNG",
    projectSourceURL: "https://codepen.io/IndecisiveBoolean/full/GdpBgz",
    technologiesImages: [techImagesSource.html, techImagesSource.css, techImagesSource.javascript],
    
  }
];