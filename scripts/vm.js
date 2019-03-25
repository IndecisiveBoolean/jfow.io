Vue.component("project-create", { //Template for project containers and function for modal window trigger on smaller displays.
  props: ["content"],
  template: `
    <div class="project-div" :id="content.id" :content="content">
      <div class="project-contents-flex-container">
          <div class="title-desc-tech-flex-container">
            <a :href="content.projectSourceURL" target="_blank" class="project-link">{{ content.title }}</a>
            <p class="project-description">{{ content.projectDescription }}</p>
            <div class="technologies-used-container">
                <h4 class="technologies-used-header">How it was made</h4>
                <hr>
                <ul class="technologies-used-imgs">
                    <li v-for="(contents, index) in content.technologiesImages" v-bind:contents="contents.technologiesImages" ><img class="tech-img" :src="contents"></li>
                </ul> 
            </div>
          </div>
          <div class="project-image-frame">
            <img class="project-image modal-btn" :src="content.projectImageURL" alt="Preview image for this project." v-on:click="modalPopup(content.id)">
          </div>
      </div>
    </div>
  `,
  methods: {
    modalPopup: function () {
      const modalContainer = document.querySelector(".created-modal-container");
      if (window.innerWidth <= 1180) {
        for (let i = 0; i < modalContainer.childNodes.length; i++) { //Checks for a matching id attribute for both the modal and project to display the correct modal.
          if (modalContainer.childNodes[i].id == this.content.id) {
            modalContainer.childNodes[i].style.display = "block";
          }
        }
      }
    }
  }
});

Vue.component("modal-create", { //Template for modal window and function that that is called when modal window's X (close) is clicked to hide the modal.
  props: ["content"],
  template: `
    <div class="myModal modal" :id="content.id">      
      <div class="tech-used-modal modal-content">
        <h4 class="technologies-header-modal">How It's Made<span class="close-button close" v-on:click="modalClose()">&times;</span></h4>
        <ul class="technologies-used-imgs">
            <li v-for="(contents, index) in content.technologiesImages" v-bind:contents="contents.technologiesImages" ><img class="tech-img" :src="contents" alt="technology logo image displaying the used technology in this project."></li>
        </ul> 
        <hr class="modal-hr">
        <p class="project-desc-modal">{{ content.projectDescription }}</p>
      </div>
    </div>
  `,
  methods: {
    modalClose: function () {
      let modalContainer = document.querySelector(".created-modal-container");
      for (let i = 0; i < modalContainer.childNodes.length; i++) { //Loops through all modal elements that were generated and closes them. Should only close a single modal as only a single modal can be opened at once.
        modalContainer.childNodes[i].style.display = "";
      }
    }
  }
});

particlesJS.load('particles-js', 'particles.js-master/particles_config/particles.json', function () { //loads animated particles background and json config file.
  console.log('callback - particles.js config loaded');
});

const vm = new Vue({
  el: '#created-elements',
  data: {
    contents: projectContentObject
  },
});