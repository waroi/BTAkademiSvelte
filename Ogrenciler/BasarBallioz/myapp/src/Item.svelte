<script>
  import { items, basket } from "./store";
  import { Link } from "svelte-navigator";
  import AddToCartButton from "./AddToCartButton.svelte";

  export let item;

  const addToBasket = () => {
    let meetEvent = $items.filter((p) => p.id === item.id)[0];
    if (meetEvent.stock === 0) return;
    meetEvent.stock -= 1;

    let newItems = $items.map((prod) =>
      prod.id === meetEvent.id ? meetEvent : prod
    );

    items.set(newItems);
    basket.update((value) => value + 1);
  };

  const getProductId = () => {
    let meetEvent = $items.filter((p) => p.id === item.id)[0];
    console.log(meetEvent.id);
  };
</script>

<Link to="/product">
  <div class="product-card" on:click={getProductId}>
    <img src={item.img} alt={item.name} />
    <div class="product-info">
      <div>
        <h3>{item.name}</h3>
        <span class:nostock={!item.stock}>Stok: {item.stock}</span>
      </div>

      <AddToCartButton on:click={addToBasket} {item} />
    </div>
  </div>
</Link>

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
    cursor: pointer;
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
