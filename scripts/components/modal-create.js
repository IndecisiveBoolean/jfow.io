Vue.component("modal-create", {
  props: ["content"],
  template: `
    <div class="myModal modal" :id="content.id">      
      <div class="tech-used-modal modal-content">
        <h4 class="technologies-header-modal">Technologies Used<span class="close-button close" v-on:click="modalClose()">&times;</span></h4>
        <li><img class="tech-img" :src="content.technologiesImages[0]"></li>
        <li><img class="tech-img" :src="content.technologiesImages[1]"></li>
        <li><img class="tech-img" :src="content.technologiesImages[2]"></li>
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