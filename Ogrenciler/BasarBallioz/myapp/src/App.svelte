<script>
  import { Router, Route } from "svelte-navigator";
  import Header from "./Header.svelte";
  import Cart from "./Cart.svelte";
  import CartSummary from "./CartSummary.svelte";
  import ListContainer from "./ListContainer.svelte";
  import ItemDetail from "./ItemDetail.svelte";
  import Item from "./Item.svelte";
  import { items } from "./store";
</script>

<Router>
  <main>
    <Route path="/">
      <Header>
        <Cart />
      </Header>

      <ListContainer>
        {#each $items as item (item.id)}
          <Item {item} />
        {/each}
      </ListContainer>
    </Route>

    <Route path="cart">
      <Header>
        <CartSummary />
      </Header>
    </Route>

    <Route path="product/:productId" let:params={productId} component={ItemDetail} />
  </main>
</Router>
