const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      counter2: 0,
    };
  },
  methods: {
    //     updateCounterPlus() {
    //       this.counter += 1;
    //     },
    //     updateCounterSub() {
    //       this.counter -= 1;
    //     },
    getCounterResult() {
      console.log("Counter 1");
      return this.counter > 5 ? "Higher than 5" : "Less than 5";
    },
    getCounterResult2() {
      console.log("Counter 2");
      return this.counter2 > 5 ? "Higher than 5" : "Less than 5";
    },
  },
}).mount("#app");
