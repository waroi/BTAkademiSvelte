<script>
  import { count } from "./store";

  const sayiArtir = () => {
    count.update((value) => value + 1);
  };
</script>

<button on:click={sayiArtir}>Artır</button>
