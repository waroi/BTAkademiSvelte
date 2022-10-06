<div class="products">
  <slot />
</div>

<style>
  .products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 20px;
  }
</style>
