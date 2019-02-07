const techImagesSource = {
  html: "../images/technology_images/html-5.svg",
  css: "../images/technology_images/css-3.svg",
  javascript: "../images/technology_images/javascript.svg",
  mongodb: "../images/technology_images/mongodb.svg",
  mongolab: "../images/technology_images/mongolab.svg",
  nodejs: "../images/technology_images/nodejs.svg",
  vuejs: "../images/technology_images/vue.svg",
  heroku: "../images/technology_images/heroku-icon.svg"
};

const projectContentObject = [{
    id: 1,
    title: "Nepbot",
    projectDescription: "NepBot is Built to increase activity in chat through a plethora of interactive commands. Profiles that are created on an opt-in basis allow server members to gain XP, levels, currency, and more.",
    projectImageURL: "../images/showcase_images/nepbot-showcase-overlay.gif",
    projectSourceURL: "https://github.com/IndecisiveBoolean/nepbot",
    technologiesImages: [techImagesSource.javascript, techImagesSource.mongodb, techImagesSource.nodejs, techImagesSource.heroku],

  },
  {
    id: 2,
    title: "Indecisive Hunter",
    projectDescription: "Can't decide on what to hunt in Monster Hunter World? Let Indecisive Hunter make that decision for you!",
    projectImageURL: "../images/showcase_images/indec-hunter-proj-thumbnail.jpg",
    projectSourceURL: "https://indecisiveboolean.github.io/indecisivehunter/",
    technologiesImages: [techImagesSource.html, techImagesSource.css, techImagesSource.javascript],

  },
  {
    id: 3,
    title: "Your Weather",
    projectDescription: "Using OpenWeatherMap's API get your current local weather conditions instantly! Or search for the current conditions elsewhere via Zipcode. This simply weather condition displaying webapp is built using plain ol' JavaScript, HTML, and CSS.",
    projectImageURL: "../images/showcase_images/weather-proj-thumbnail.jpg",
    projectSourceURL: "https://indecisiveboolean.github.io/yourweather/",
    technologiesImages: [techImagesSource.html, techImagesSource.css, techImagesSource.javascript],

  },
  {
    id: 4,
    title: "To Do",
    projectDescription: "This simple To Do list was one of my first projects and attempts at building something using JavaScript and DOM manipulation. It's extremely simple but it does what it was designed to do, keep track of tasks. I'm currently working on a rebuild using Vue.",
    projectImageURL: "../images/showcase_images/todo-proj-thumbnail.jpg",
    projectSourceURL: "https://codepen.io/IndecisiveBoolean/full/GdpBgz",
    technologiesImages: [techImagesSource.html, techImagesSource.css, techImagesSource.javascript],
  }
];