<script>
  import { basketItems } from "./store";

  console.log("slmmm:");
</script>

<div class="summary-container">
  <div class="summary-title"><p>SEPET ÖZETİ</p></div>
  <div class="summary">
    {#each $basketItems as item (item.id)}
      <p>{item.name}</p>
    {:else}
      <p>Sepette ürün bulunmamaktadır</p>
    {/each}
  </div>
</div>

<style>
  .summary-container {
    position: absolute;
    top: 50px;
    right: 0;
    background-color: whitesmoke;
    width: 300px;
    border-radius: 3px;
    overflow: hidden;
  }
  p {
    margin: 0;
  }
  .summary-title {
    background-color: #0082c3;
    padding: 5px;
  }

  .summary-title p {
    font-weight: bold;
    font-size: 18px;
  }

  .summary {
    background-color: whitesmoke;
  }
  .summary p {
    color: black;
    margin: 10px 0;
  }
</style>
