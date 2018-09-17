const modal = document.querySelector(".myModal");
const modalButton = document.querySelectorAll(".modal-btn");
const closemodal = document.querySelector(".close-button");
const viewportWidth = window.matchMedia("(max-width: 1178px)");
let modalDescription = document.querySelector(".project-desc-modal");
let modalTechUsedImages = document.querySelector(".tech-imgs-modal-ul");


function windowScroll() {
  let projectContainer = document.querySelector(".project-spotlight-container");
  
  projectContainer.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}


function getViewportWidth(width) {
  let projectImage = document.querySelectorAll(".project-image");
  
  if (width.matches) { // adds modal-btn class to all project images if viewport width matches the max-width set by viewportWidth listener which is passed to getViewportWidth as an argument.
      for (let i = 0; i < projectImage.length; i++) {
        projectImage[i].classList.add("modal-btn");
        }
      } else if (!width.matches) { // removes modal-btn class if viewport width does not match.
          for (let i = 0; i < projectImage.length; i++) {
          projectImage[i].classList.remove("modal-btn");
          }
        } 
}


function attachClick() { // Attaches click listener using event delegation targetting the project images themselves to generate modal windows.
  let projectContainer = document.querySelector(".project-spotlight-container");
  
  projectContainer.addEventListener('click', (event) => {
    let target = event.target;
    let projectDescription = target.previousElementSibling.innerHTML; // Obtains the description of the project that was clicked.
    let modalTechImages = target.nextElementSibling.childNodes[5]; // Contains reference to the proper node that contains a project's description.
    
    if (target.classList.contains("modal-btn") && window.innerWidth <= 1178) {
      let clonedNode = modalTechImages.cloneNode(true); // Clones the node containing a projects description and stores it to variable clonedNode.
      modal.childNodes[1].insertBefore(clonedNode, modal.childNodes[1].childNodes[4]).classList.add("modal-tech-imgs"); // Places the cloned node and adds the proper class to apply appropriate styling.
      modal.childNodes[1].childNodes[4].classList.remove("technologies-used-imgs"); // Removes the unneeded class from the cloned node that is now in the DOM.
      modalDescription.innerText = projectDescription; // Inserts the previously gotten project description into the generated Modal.
      modal.style.display = "block";   
    } else {
      return;
    }
  });   
  
}

closemodal.onclick = function() { // // Deletes the node that was cloned upon modal closure and sets the modal window display back to none.
  modal.childNodes[1].removeChild(modal.childNodes[1].childNodes[4]);
  modal.style.display = "none";
}

attachClick(); // see attachClick() for complete explanation.
viewportWidth.addListener(getViewportWidth); 
