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
    title: "Rural ISP Concept",
    projectDescription: "A fully responsive home page concept for a fake, rural focused Internet Service Provider called TIER ONE. As this was built with a smaller ISP in mind I focused on simplicity and prioritizing the information the user would want most.",
    projectImageURL: "../images/showcase_images/isp-concept-proj-thumbnail.jpg",
    projectSourceURL: "https://indecisiveboolean.github.io/local-isp-concept/",
    technologiesImages: [techImagesSource.html, techImagesSource.css, techImagesSource.javascript],

  },
  {
    id: 4,
    title: "Your Weather",
    projectDescription: "Using OpenWeatherMap's API get your current local weather conditions instantly! Or search for the current conditions elsewhere via Zipcode. This simply weather condition displaying webapp is built using plain ol' JavaScript, HTML, and CSS.",
    projectImageURL: "../images/showcase_images/weather-proj-thumbnail.jpg",
    projectSourceURL: "https://indecisiveboolean.github.io/yourweather/",
    technologiesImages: [techImagesSource.html, techImagesSource.css, techImagesSource.javascript],

  }
];