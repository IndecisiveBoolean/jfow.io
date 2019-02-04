function windowScroll(event) { //Handles all scroll events on the main page to replace instant page jumps with a smooth transition. Compares the passed integer value using a switch statement to select where to scroll.
  let projectContainer = document.querySelector(".project-spotlight-container");
  let footer = document.querySelector(".contact-info");
  let home = document.querySelector(".landing-header");
  let about = document.querySelector(".aboutme-section");
  switch (event) {
    case 1:
      home.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
      break;
    case 2:
      projectContainer.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
      break;
    case 3:
      footer.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
      break;
    case 4:
      about.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      });
  }
}