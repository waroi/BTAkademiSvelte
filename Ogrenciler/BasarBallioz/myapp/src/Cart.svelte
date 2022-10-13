<script>
  import { basket, itemList, items } from "./store";
  import ResetCart from "./ResetCart.svelte";
  import CartButton from "./CartButton.svelte";
  import CartCounter from "./CartCounter.svelte";
  import CartSummary from "./CartSummary.svelte";

  $: isCartOpen = false;

  let basketItems = [];

  const resetBasket = () => {
    items.set(JSON.parse(JSON.stringify(itemList)));
    basket.set(0);
  };

  const showBasket = () => {
    basketItems = [...basketItems];
    isCartOpen = !isCartOpen;
  };
</script>

<div class="cart-area">
  <ResetCart {basket} on:click={resetBasket} />

  <div class="relative">
    <CartButton on:click={showBasket} />
    <CartCounter {basket} />
  </div>
</div>

<style>
  .cart-area {
    display: flex;
    justify-content: flex-end;
  }

  .relative {
    position: relative;
  }
</style>
