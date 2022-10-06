<script>
  import { onMount } from "svelte";
  // let name = "";
  // let isDone = false;
  // let menu = ["portakal suyu", "kahve", "mocha"];
  // let siparisler = [];
  // let text = "";
  // import { count } from "./store";
  // import Artir from "./Artir.svelte";
  // let tab = "meyve";
  import Card from "./Card.svelte";
  let data = [];
  onMount(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
  });
</script>

<div>
  {#each data as d (d.id)}
    <p>{d.title}</p>
  {:else}
    deneme
  {/each}
</div>

<!-- <input type="text" bind:value={name} />

<h1>{name}</h1> -->

<!-- <label>
  <input type="checkbox" bind:checked={isDone} />
  <span class={isDone ? "done" : ""}>Deneme</span>
</label>

<style>
  .done {
    text-decoration: line-through;
  }
</style> -->

<!-- <h1>Menu</h1>
{#each menu as item (item)}
  <label>
    <input type="checkbox" name="item" value={item} bind:group={siparisler} />
    {item}
  </label>
{/each}

<h2>Siparişlerim</h2>
{#each siparisler as siparis (siparis)}
  <li>{siparis}</li>
{:else}
  <h4>Sipariş yok</h4>
{/each}

<textarea name="text" id="text" cols="30" rows="10" bind:value={text} />

<p>{text}</p> -->

<!-- <div>
  <p>Sayı: {$count}</p>
  <Artir />
</div> -->

<!-- <div>
  <span class:selected={tab === "meyve"} on:click={() => (tab = "meyve")}
    >Meyve Listesi</span
  >
  <span class:selected={tab === "sebze"} on:click={() => (tab = "sebze")}
    >Sebze Listesi</span
  >
</div>

<style>
  div {
    display: flex;
    padding: 40px;
    justify-content: space-between;
  }
  span {
    cursor: pointer;
    padding-left: 40px;
  }
  .selected {
    border-bottom: 2px solid orangered;
  }
</style> -->

<!-- <Card>
  <span slot="isim">Varol</span>
  <span slot="adres">İstanbul</span>
  <span>deneme</span>
</Card> -->

<Card />
