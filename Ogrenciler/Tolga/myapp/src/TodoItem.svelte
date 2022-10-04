<script>
  export let title;
  export let completed;
</script>

<div>
  <p class={`${completed ? "completed" : "notCompleted"}`}>{title}</p>
</div>

<style>
  .completed {
    color: green;
  }
  .notCompleted {
    color: red;
  }
</style>
