<template lang="">
  <div class="container">
    <p>{{ text }}</p>
    <input type="form" v-model="text" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>
