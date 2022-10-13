<script>
  import { basket, productsList, products } from "./store";

  let basketItems = [];

  const resetBasket = () => {
    products.set(JSON.parse(JSON.stringify(productsList)));
    basket.set(0);
  };
  const showBasket = () => {
    basketItems = [...basketItems];
  };
</script>

<div>
  <button disabled={!$basket} on:click={resetBasket}>Sıfırla</button>
  <img
    class="png-background"
    src="https://icon-library.com/images/cart-icon-png-white/cart-icon-png-white-24.jpg"
    alt="basket"
    on:click={showBasket}
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
  .png-background {
    padding: 4px;
    border-radius: 4px;
    background-color: rgb(200, 26, 159);
    cursor: pointer;
  }
</style>
