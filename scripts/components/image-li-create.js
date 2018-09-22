Vue.component("image-li-create", {
  props: ["content"],
  template: `
    <project-create>
      <li><img class="tech-img" :src="content.technologiesImages[0]"></li>
    </project-create>
  `,
});