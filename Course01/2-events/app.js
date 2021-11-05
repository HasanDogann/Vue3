const app = Vue.createApp({
  data() {
    return {
      fullName: "Hasan",
    };
  },
  methods: {
    updateValue(event) {
      this.fullName = event.target.value;
    },
  },
}).mount("#app");
