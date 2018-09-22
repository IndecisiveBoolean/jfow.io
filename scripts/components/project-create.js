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
                    <slot></slot>
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
      if (window.innerWidth <= 1799) {
        for (let i = 0; i < modalContainer.childNodes.length; i++) {
          if (modalContainer.childNodes[i].id == this.content.id) {
            modalContainer.childNodes[i].style.display = "block"
          }
        }        
      }
    }
  }
});