<script>
  /*   import Counter from "./lib/Counter.svelte";
   */ import { get, post } from "./services";
  import TodoItem from "./TodoItem.svelte";
  let newToDo = "";
  const addtoDo = () => {
    post("http://localhost:3000/todos", {
      userId: 1,
      title: newToDo,
      completed: false,
    }).then((r) => {
      get("http://localhost:3000/todos");
    });
  };

  /* var todoItems = [
    { content: "todo1", edit: false, status: false },
    { content: "todo2", edit: false, status: false },
  ];
  let content = "";
  function addtoDo() {
    if (!content) return;

    todoItems = [
      ...todoItems,
      { content: content, edit: false, status: false },
    ];
    content = "";
  }
  function deleteme(i) {
    todoItems.splice(i, 1);
    todoItems = todoItems;
  }
  function editme(i) {
    todoItems[i].edit = !todoItems[i].edit;
  } */
</script>

<!-- <div class="container">
  <ul>
    {#each todoItems as todoItem, index}
      <li>
        <input bind:checked={todoItem.status} type="checkbox" />
        <input
          class={todoItem.status ? "checked" : ""}
          disabled={!todoItem.edit}
          type="text"
          value={todoItem.content}
        />
        <button on:click={() => editme(index)}>düzenle</button>
        <button on:click={() => deleteme(index)}>sil</button>
      </li>
    {/each}
  </ul>
  <input type="text" bind:value={content} />
  <button on:click={addtoDo} class="buttonTolga">ekle</button>
</div> -->
<div>
  <input type="text" bind:value={newToDo} />
  <button on:click={addtoDo}>Add</button>
</div>
{#await get("http://localhost:3000/todos")}
  <h1>Loading.</h1>
{:then todos}
  {#each todos as todo}
    <TodoItem title={todo.title} completed={todo.completed} />
  {/each}
{/await}

<style>
  .buttonTolga:hover {
    background-color: rgb(38, 119, 200);
  }
  .checked {
    text-decoration: line-through;
  }
  .container {
    background-image: url("https://m.media-amazon.com/images/I/517COM4H9mL._AC_SY350_.jpg");
  }
</style>
