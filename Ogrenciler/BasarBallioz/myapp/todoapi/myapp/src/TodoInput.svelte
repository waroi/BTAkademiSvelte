<script>
  import request from "./Request";
  let todo;

  async function submitTodo() {
    let todo1 = {
      userId: 1,
      title: todo,
      completed: false,
    };
    await request("http://localhost:3000/todos", "POST", todo1);
  }
</script>

<div class="to-do-container">
  <input bind:value={todo} type="text" placeholder="Add your new to-do" />
  <button on:click={submitTodo}>+</button>
</div>

<style>
  input {
    padding: 12px 20px;
  }
  button {
    background-color: purple;
    color: white;
  }
  .to-do-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
