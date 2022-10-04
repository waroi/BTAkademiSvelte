<script>
  export let title = "";
  export let completed = false;
</script>

<h3 class={completed ? "green" : "red"}>{title}</h3>

<style>
  h3 {
    text-transform: capitalize;
    text-align: left;
    padding-left: 6px;
  }
  .green {
    color: green;
  }
  .red {
    color: red;
  }
</style>
