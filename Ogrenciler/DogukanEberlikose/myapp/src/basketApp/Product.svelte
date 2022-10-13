<script>
  import { products, basket } from "./store";
  import AddToCartButton from "./AddToCartButton.svelte";

  export let product;

  const addToBasket = () => {
    let item = $products.filter((p) => p.id === product.id)[0];
    if (item.stock === 0) return;
    item.stock -= 1;
    let newProducts = $products.map((prod) =>
      prod.id === item.id ? item : prod
    );
    products.set(newProducts);
    basket.update((value) => value + 1);
  };
</script>

<div class="product-card">
  <img src={product.img} alt={product.name} />
  <div class="product-info">
    <div>
      <h3>{product.name}</h3>
      <span class:nostock={!product.stock}>Stok: {product.stock}</span>
    </div>

    <AddToCartButton on:click={addToBasket} {product} />
  </div>
</div>

<style>
  .product-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: 1px solid lightgray;
    text-align: left;
    border-radius: 5px;
  }
  .product-info {
    margin-top: 20px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    margin: 0 0 10px 0;
  }
  img {
    width: 300px;
    height: 300px;
    border-radius: 5px;
  }
  .nostock {
    color: red;
  }
</style>
