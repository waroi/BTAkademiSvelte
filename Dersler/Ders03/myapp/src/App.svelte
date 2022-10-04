<script>
  // import AwaitBlock from "./AwaitBlock.svelte";
  // const clickHandle = (e) => console.log(e.target.parentElement.textContent);
  import { imagePreview } from "./utils";

  let image;
  const changeHandle = async (e) => {
    image = await imagePreview(e.target.files[0]);
    console.log(e.target);
  };
</script>

<!-- <AwaitBlock /> -->
<!-- <div>
  deneme
  <button on:click|once={clickHandle}>Tıkla</button>
</div> -->
<!-- <form method="get" on:submit|preventDefault={(e) => console.log(e)}>
  <input type="text" name="name" placeholder="Ad-Soyad" /> <br />
  <button type="submit">Gönder</button>
</form> -->

<input type="file" accept="image/*" on:change={changeHandle} />

{#if image}
  <img src={image} alt="deneme" />
{/if}

<style>
</style>
