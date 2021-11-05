const app = Vue.createApp({
  data() {
    return {
      title: "Vue 3 class 1",
      description: "Lorem ipsum dolor sit amet",
      youtube: {
        title: "Click For Youtube",
        url: "https://youtube.com",
        target: "_blank",
        alt: "link-alt",
        name: "HasanD",
      },
      coords: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    changeTitle(n) {
      this.title = n;
    },
    updateCords(event, message) {
      //   console.log(message, event.x, event.y);

      this.changeTitle(`${event.x}, ${event.y}`);
      this.coords = {
        x: event.x,
        y: event.y,
      };
    },
  },
}).mount("#app");
