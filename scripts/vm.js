

Vue.component("project-create", {
  props: ["content"],
  template: `
    <div class="project-div" :id="content.id" :content="content">
      <div class="project-contents-flex-container">
          <div class="title-desc-tech-flex-container">
            <a :href="content.projectSourceURL" target="_blank" class="project-link">{{ content.title }}</a>
            <p class="project-description">{{ content.projectDescription }}</p>
            <div class="technologies-used-container">
                <h4 class="technologies-used-header">Technologies Used</h4>
                <hr>
                <ul class="technologies-used-imgs">
                    <li v-for="(contents, index) in content.technologiesImages" v-bind:contents="contents.technologiesImages" ><img class="tech-img" :src="contents"></li>
                </ul> 
            </div>
          </div>
          <img class="project-image modal-btn" :src="content.projectImageURL" v-on:click="modalPopup(content.id)">
      </div>
    </div>
  `,
  methods: {
    modalPopup: function() {
      const modalContainer = document.querySelector(".created-modal-container");      
      if (window.innerWidth <= 880) {
        for (let i = 0; i < modalContainer.childNodes.length; i++) {
          if (modalContainer.childNodes[i].id == this.content.id) {
            modalContainer.childNodes[i].style.display = "block"
          }
        }        
      }
    }
  }
});

Vue.component("modal-create", {
  props: ["content"],
  template: `
    <div class="myModal modal" :id="content.id">      
      <div class="tech-used-modal modal-content">
        <h4 class="technologies-header-modal">Technologies Used<span class="close-button close" v-on:click="modalClose()">&times;</span></h4>
        <ul class="technologies-used-imgs">
            <li v-for="(contents, index) in content.technologiesImages" v-bind:contents="contents.technologiesImages" ><img class="tech-img" :src="contents"></li>
        </ul> 
        <hr class="modal-hr">
        <p class="project-desc-modal">{{ content.projectDescription }}</p>
      </div>
    </div>
  `,
  methods: {
    modalClose: function() {
      let modalContainer = document.querySelector(".created-modal-container");  
      for (let i = 0; i < modalContainer.childNodes.length; i++) {
        modalContainer.childNodes[i].style.display = "";   
      } 
    }
  }
});

const vm = new Vue({
  el: '#created-elements',
  data: {
    contents: projectContentObject
  },
  methods: {
    scrollTo: function windowScroll() {
  let projectContainer = document.querySelector(".project-div");
  
  projectContainer.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}
  }
});