<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  export let item;

  let cartArray = [];

  function addItem() {
    dispatch("click");
    cartArray = [...cartArray, item];

    console.log(cartArray);
  }
</script>

<button disabled={item.stock === 0} on:click={addItem}>Sepete Ekle</button>

<style>
  button {
    background-color: #0082c3;
  }
</style>
