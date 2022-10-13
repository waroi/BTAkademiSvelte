<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let product;

  function addItem() {
    dispatch("click");
  }
</script>

<button disabled={product.stock === 0} on:click={addItem}>Sepete Ekle</button>

<style>
  button {
    background-color: #0082c3;
  }
</style>
