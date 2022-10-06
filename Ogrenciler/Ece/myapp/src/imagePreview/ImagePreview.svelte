<script>
  import { imagePreview } from "./utils";

  let image;

  const handleChange = async (e) => {
    image = await imagePreview(e.target.files[0]);
  };
</script>

<input type="file" accept="image/*" on:change={handleChange} />

{#if image}
  <img src={image} alt="lol" />
{/if}
