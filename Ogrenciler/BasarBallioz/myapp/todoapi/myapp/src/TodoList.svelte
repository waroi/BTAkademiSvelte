<script>
  import TodoItem from "./TodoItem.svelte";
  import TodoInput from "./TodoInput.svelte";

  export let data;
</script>

<div class="container">
  <h2>TO-DO APP</h2>
  <TodoInput />
  {#each data as todo (todo.id)}
    <TodoItem title={todo.title} completed={todo.completed} />
  {/each}
</div>

<style>
  .container {
    background-color: white;
    padding: 13px;
    border-radius: 7px;
  }
</style>
