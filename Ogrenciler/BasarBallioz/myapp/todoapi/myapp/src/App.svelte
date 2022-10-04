<script>
  import { get } from "./Request";
  import TodoList from "./TodoList.svelte";
</script>

{#await get("http://localhost:3000/todos")}
  <p>Yükleniyor...</p>
{:then data}
  <TodoList {data} />
{/await}
