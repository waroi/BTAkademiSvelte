<script>
  import App from "./App.svelte";
  import Counter from "./lib/Counter.svelte";

  export let src,
    alt = "deneme alt",
    title = "deneme title",
    height = 100;
</script>

<img {src} {alt} {title} {height} />
