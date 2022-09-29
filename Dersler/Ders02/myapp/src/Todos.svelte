<script>
  import TodoItem from "./TodoItem.svelte";
  let todos = [
    {
      id: 1,
      title: "todo 1",
    },
    {
      id: 2,
      title: "todo 2",
    },
    {
      id: 3,
      title: "todo 3",
    },
  ];
  const clickHandle = () => {
    todos = todos.slice(1);
  };
</script>

<ul>
  <button on:click={clickHandle}>İlk Elemanı Sil</button>
  {#each todos as todo, i (todo.id)}
    <TodoItem {todo} {i} />
  {/each}
</ul>
