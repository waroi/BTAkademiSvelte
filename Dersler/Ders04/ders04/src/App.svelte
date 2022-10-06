<script>
  // let name = "";
  // let isDone = false;
  let menu = ["portakal suyu", "kahve", "mocha"];
  let siparisler = [];
  let text = "";
</script>

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

<h1>Menu</h1>
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

<p>{text}</p>
