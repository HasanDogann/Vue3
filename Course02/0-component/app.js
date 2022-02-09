const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
});

app.component("counter-item", {
  data() {
    return {
      result: 0,
    };
  },
  template: `
  <div class="container-sm" style="display: inline">
  <h3 class="mb-2">{{result}}</h3>
  <button @click="result++" class="green sm">+</button>
  <button @click="result--" class="red sm">-</button> 
</div> `,
});
app.mount("#app");
