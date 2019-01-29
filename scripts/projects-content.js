const techImagesSource = {
  html: "../images/technology-images/html-5.svg",
  css: "../images/technology-images/css-3.svg",
  javascript: "../images/technology-images/javascript.svg",
  mongodb: "../images/technology-images/mongodb.svg",
  mongolab: "../images/technology-images/mongolab.svg",
  nodejs: "../images/technology-images/nodejs.svg",
  vuejs: "../images/technology-images/vue.svg",
  heroku: "../images/technology-images/heroku-icon.svg"
};

const projectContentObject = [
  {
    id: 1,
    title: "Nepbot",
    projectDescription: "NepBot! The project I will never finish because I can't stop coming up with features to implement. Built to increase activity in chat with unique profiles that are strictly optional, Allowing you to gain XP, levels, currency, and more. With leaderboards that rank users by any stat available and a plethora of current commands and too many planned features that will utilize the currency system, it will never be done in my mind.",
    projectImageURL: "../images/nepbot-showcase-overlay.gif",
    projectSourceURL: "https://github.com/IndecisiveBoolean/nepbot",
    technologiesImages: [techImagesSource.javascript, techImagesSource.mongodb, techImagesSource.nodejs, techImagesSource.heroku],
    
  },
  {
    id: 2,
    title: "Indecisive Hunter",
    projectDescription: "Currently a simple site that will make the decision for you when you can't decide on what monster to hunt in Monster Hunter World. In the future the ability to have everything from specific monster types to armor chosen for you randomly will be available.",
    projectImageURL: "../images/indec-hunter-proj-thumbnail.jpg",
    projectSourceURL: "https://indecisiveboolean.github.io/indecisivehunter/",
    technologiesImages: [techImagesSource.html, techImagesSource.css, techImagesSource.javascript],
    
  },
  {
    id: 3,
    title: "Your Weather",
    projectDescription: "Using OpenWeatherMap's API get your current local weather conditions instantly! Or search for the current conditions elsewhere via Zipcode. This simply weather condition displaying webapp is built using plain ol' JavaScript, HTML, and CSS.",
    projectImageURL: "../images/weather-proj-thumbnail.jpg",
    projectSourceURL: "https://indecisiveboolean.github.io/yourweather/",
    technologiesImages: [techImagesSource.html, techImagesSource.css, techImagesSource.javascript],
    
  },
  {
    id: 4,
    title: "To Do",
    projectDescription: "This simple To Do list was one of my first projects and attempts at building something using JavaScript and DOM manipulation. It's extremely simple but it does what it was designed to do, keep track of tasks. I'm currently working on a rebuild using Vue.",
    projectImageURL: "../images/todo-proj-thumbnail.jpg",
    projectSourceURL: "https://codepen.io/IndecisiveBoolean/full/GdpBgz",
    technologiesImages: [techImagesSource.html, techImagesSource.css, techImagesSource.javascript],
  }
];