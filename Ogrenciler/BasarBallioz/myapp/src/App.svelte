<script>
  import EditableText from "./EditableText.svelte";

  let list = [];

  $: toDoName = "";

  function addToList() {
    if (toDoName && toDoName !== "") {
      list = [...list, { text: toDoName, status: false }];
      console.log(list);
    }
  }

  function removeItem(index) {
    list.splice(index, 1);
    list = list;
  }
</script>

<br />
<div class="box">
  <input bind:value={toDoName} type="text" />
  <button on:click={addToList}>Add To List</button>
  <li class="list-of-fe">
    {#each list as item, index}
      <div class="flex">
        <input bind:checked={item.status} type="checkbox" />
        <div class:checked={item.status}>
          <EditableText bind:value={item.text} />
        </div>
        <button on:click={() => removeItem(index)}>X</button>
      </div>

      <br />
    {/each}
  </li>
</div>

<style>
  .list-of-fe {
    display: flex;
    font-size: 18px;
    flex-direction: column;
    text-align: left;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .box {
    background-color: #fff;
    border: 2px solid black;
    border-radius: 8px;
    padding: 30px;
  }
  .flex {
    display: flex;
    margin: 0 auto;
    align-items: center;
    gap: 10px;
  }
  .checked {
    color: red;
    text-decoration: line-through;
  }
</style>
