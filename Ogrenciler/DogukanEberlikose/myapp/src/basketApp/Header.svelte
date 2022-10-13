<div>
  <h1>Decathlon</h1>
  <slot />
</div>

<style>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: #0082c3;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 32px;
    -webkit-text-fill-color: #0082c3; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: white;
  }
</style>
