window.app.component("ls-u", {
  props: ['fontSize'],
  mounted() {
    // Initialize the list component
    this.$el.querySelectorAll("li").forEach((li) => {
      li.classList.add("fragment");
      li.style.fontSize = this.fontSize || "16px";
    });
  },
  /*html*/
  template: `
  <ul>
    <slot></slot>
  </ul>
        `,
});
