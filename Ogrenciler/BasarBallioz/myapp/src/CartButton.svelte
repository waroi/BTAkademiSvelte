<script>
  import { Link } from "svelte-navigator";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<Link to="/cart"
  ><img
    class="png-background"
    src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg"
    alt="basket"
  /></Link
>

<style>
  .png-background {
    padding: 4px;
    border-radius: 4px;
    background-color: rgb(200, 26, 159);
    cursor: pointer;
  }
  img {
    width: 40px;
    height: 40px;
  }
</style>
