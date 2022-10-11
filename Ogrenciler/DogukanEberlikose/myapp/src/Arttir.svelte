<script>
  import { cardCount } from "./stores.js";

  function increment() {
    cardCount.update((n) => n + 1);
  }
</script>

<button on:click={increment}> + </button>
