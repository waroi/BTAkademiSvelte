<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let list;
  export let completed = false;

  const deleteTodo = (id) => {
    list = list.filter((todo) => todo.id !== id);
  };

  const editTodo = (item) => {
    list.forEach((todo) => {
      if (todo === item) {
        todo.item = item.item;
        todo.edit = false;
      }
    });

    list = list;
  };
</script>

{#if list.length > 0}
  <ul>
    {#each list as todo (todo.id)}
      {#if completed}
        <li>{todo.item}</li>
      {/if}
      {#if !completed && !todo.done}
        <div class="container">
          {#if todo.edit}
            <input bind:value={todo.item} />
          {:else}
            <button class="radio-btn" on:click={() => (todo.done = true)} />
            <li>{todo.item}</li>
          {/if}
          <div class="btn-container">
            <button
              on:click={() => (todo.edit ? editTodo(todo) : (todo.edit = true))}
              >{todo.edit ? "Tamam" : "Düzenle"}</button
            >
            <button on:click={() => deleteTodo(todo.id)}>Sil</button>
          </div>
        </div>
      {/if}
    {/each}
  </ul>
{:else}
  <p>Madde yok.</p>
{/if}
