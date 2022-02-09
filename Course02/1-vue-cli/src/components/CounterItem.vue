<template lang="">
  <div class="container-sm" style="display: inline">
    <h3 class="mb-2">{{ result }}</h3>
    <button @click="result++" class="green sm">+</button>
    <button @click="result--" class="red sm">-</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      result: 0,
    };
  },
};
</script>
