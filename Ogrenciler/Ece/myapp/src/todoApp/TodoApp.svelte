<script>
  import TodoList from "./TodoList.svelte";

  let name = "TODO";
  let todos = [
    {
      id: 0,
      item: "Svelte Öğren",
      done: false,
      edit: false,
    },
    {
      id: 1,
      item: "Kedi Sev",
      done: false,
      edit: false,
    },
    {
      id: 2,
      item: "Yemek Ye",
      done: false,
      edit: false,
    },
    {
      id: 3,
      item: "Tv İzle",
      done: false,
      edit: false,
    },
  ];

  let newTodo = "";

  const submit = (event) => {
    if (event.key === "Enter") addTodo();
  };

  const addTodo = () => {
    if (newTodo) {
      todos = [
        ...todos,
        {
          id: todos[todos.length - 1].id + 1,
          item: newTodo,
          done: false,
          edit: false,
        },
      ];
    }

    newTodo = "";
  };

  $: completedTodo = todos.filter((todo) => todo.done === true);
</script>

<h1>{name}</h1>
<div class="input-container">
  <input class="todo" bind:value={newTodo} on:keydown={submit} />
  <button on:click={addTodo}>Ekle</button>
</div>

<TodoList bind:list={todos} />

<h2>Tamamlandı</h2>

<TodoList bind:list={completedTodo} completed />
