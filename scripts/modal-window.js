const modal = document.querySelector(".myModal");
const modalButton = document.querySelectorAll(".modal-btn");
const closemodal = document.querySelector(".close-button");
const viewportWidth = window.matchMedia("(max-width: 1178px)");
let modalDescription = document.querySelector(".project-desc-modal");
let modalTechUsedImages = document.querySelector(".tech-imgs-modal-ul");

function getViewportWidth(width) {
  let projectImage = document.querySelectorAll(".project-image");
  
  if (width.matches) {
      for (let i = 0; i < projectImage.length; i++) {
        projectImage[i].classList.add("modal-btn");
        }
      } else if (!width.matches) {
          for (let i = 0; i < projectImage.length; i++) {
          projectImage[i].classList.remove("modal-btn");
          }
        } 
}


function attachClick() {
  let projectContainer = document.querySelector(".project-spotlight-container");
  
  projectContainer.addEventListener('click', (event) => {
    let target = event.target;
    let projectDescription = target.previousElementSibling.innerHTML;
    let modalTechImages = target.nextElementSibling.childNodes[5];
    
    if (target.classList.contains("modal-btn") && window.innerWidth <= 1178) {
      let clonedNode = modalTechImages.cloneNode(true);
      modal.childNodes[1].insertBefore(clonedNode, modal.childNodes[1].childNodes[4]).classList.add("modal-tech-imgs");
      modal.childNodes[1].childNodes[4].classList.remove("technologies-used-imgs");
      modalDescription.innerText = projectDescription;
      modal.style.display = "block";   
    } else {
      return;
    }
  });   
  
}

closemodal.onclick = function() {
  modal.childNodes[1].removeChild(modal.childNodes[1].childNodes[4]);
  modal.style.display = "none";
}

attachClick();
viewportWidth.addListener(getViewportWidth);
