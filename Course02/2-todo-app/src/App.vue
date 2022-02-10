<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <label for="todoText">Yapılacaklar</label>
    <input
      @keydown.enter="addnewTodo"
      type="text"
      id="todoText"
      placeholder="Yapılacak işleri yazınız...."
    />
    <ul>
      <li
        v-for="todoItem in todoList"
        :key="todoItem.id"
        class="d-flex justify-content-between align-items-center"
      >
        <span>{{ todoItem.text }}</span>
        <button @click="deleteItem(todoItem)" class="m red">-</button>
      </li>
    </ul>
    <small class="mt-2 d-flex justify-content-end green"
      >5 adet Todo vardır.</small
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      todoList: [
        { id: 1, text: "Bootcamp 2" },
        { id: 2, text: "Bootcamp 2.1" },
        { id: 3, text: "Bootcamp 2.2" },
        { id: 4, text: "Bootcamp 2.3" },
        { id: 5, text: "Bootcamp 2.4" },
        { id: 6, text: "Bootcamp 2.5" },
      ],
    };
  },
  methods: {
    deleteItem(todoItem) {
      // alert(todoItem.id);
      // console.log(todoItem);
      this.todoList = this.todoList.filter((t) => t !== todoItem);
    },
    addnewTodo(event) {
      // console.log(event.target.value);
      this.todoList.push({
        id: new Date().getTime(),
        text: event.target.value,
      });
    },
  },
};
</script>
<style></style>
