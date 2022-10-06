<script>
  import Header from "./Header.svelte";
  import Basket from "./Basket.svelte";
  import ProductLayout from "./ProductLayout.svelte";
  import Product from "./Product.svelte";
  import { products } from "./store";
</script>

<Header>
  <Basket />
</Header>

<ProductLayout>
  {#each $products as product (product.id)}
    <Product {product} />
  {/each}
</ProductLayout>
