<script>
  import { count } from "../store";

  const decrement = () => {
    count.update((value) => (value ? value - 1 : value));
  };
</script>

<button on:click={decrement}>-</button>
