<template>
  <app-header />
  <div class="container">
    <h3>İlk Vue 3 CLI ugulamam</h3>
    <p>Component ve Vue CLI konuları</p>
  </div>
  <CounterItem></CounterItem>
  <ListItem />
</template>
<script>
import CounterItem from "@/components/CounterItem";
import ListItem from "@/components/ListItem";
export default {
  components: {
    CounterItem,
    ListItem,
  },
};
</script>
<style></style>
