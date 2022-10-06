<script>
  import Header from "./Header.svelte";
  import { basket, productsList, products } from "./store";

  const resetBasket = () => {
    products.set(JSON.parse(JSON.stringify(productsList)));
    basket.set(0);
  };
</script>

<div>
  <button disabled={!$basket} on:click={resetBasket}>Sıfırla</button>
  <img
    src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg"
    alt="basket"
  />
  <span>{$basket}</span>
</div>

<style>
  div {
    position: relative;
    display: flex;
    align-items: center;
  }
  button {
    margin-right: 10px;
  }
  img {
    width: 40px;
    height: 40px;
  }
  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -5px;
    right: -10px;
    background-color: #0082c3;
    color: white;
    border-radius: 50px;
    font-weight: bold;
    padding: 5px;
    width: 10px;
    height: 10px;
    font-size: 12px;
  }
</style>
