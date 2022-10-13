<script>
  import { createEventDispatcher } from "svelte";

  export let basket;

  const dispatch = createEventDispatcher();

  function resetBasket() {
    dispatch("click");
  }
</script>

<button disabled={!$basket} on:click={resetBasket}>Sıfırla</button>

<style>
  button {
    margin-right: 10px;
  }
</style>
