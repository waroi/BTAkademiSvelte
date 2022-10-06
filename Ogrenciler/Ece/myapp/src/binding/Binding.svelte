<script>
  import { count } from "../store";
  let menu = ["portakal", "kahve", "limonata"];
  let orders = [];
</script>

<h1>Menu</h1>

{#each menu as item (item)}
  <label>
    <input type="checkbox" name="item" value={item} bind:group={orders} />
    {item}
  </label>
{/each}

<h2>Order</h2>

{#each orders as order (order)}
  <li>{order}</li>
{:else}
  <p>Sipariş yok</p>
{/each}
