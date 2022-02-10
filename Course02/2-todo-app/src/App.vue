<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <label for="todoText">Yapılacaklar</label>
    <input
      type="text"
      id="todoText"
      placeholder="Yapılacak işleri yazınız...."
    />
    <ul>
      <li
        v-for="i in 5"
        :key="i"
        class="d-flex justify-content-between align-items-center"
      >
        <span>Todo Item {{ i }}</span>
        <button class="sm red">Remove</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
