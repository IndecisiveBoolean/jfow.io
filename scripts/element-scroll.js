function windowScroll(event) {
  let projectContainer = document.querySelector(".project-spotlight-container");
  let footer = document.querySelector(".contact-info");
  let home = document.querySelector(".landing-header");
  switch(event) {
    case 1:
      home.scrollIntoView({ block: 'start',  behavior: 'smooth' });
      break;
    case 2:
      projectContainer.scrollIntoView({ block: 'start',  behavior: 'smooth' });
      break;
    case 3:
      footer.scrollIntoView({ block: 'start',  behavior: 'smooth' });
      break;
    }
}
