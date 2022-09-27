<script>
  import Counter from "./lib/Counter.svelte";
  import Result from "./Result.svelte";

  let name = "Ece";
  let number = 0;
  $: count = number * 2;

  let image = {
    src: "https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0",
    alt: "Logo",
    title: "Logo",
  };
</script>

<main>
  <h1>{name}</h1>
  <button on:click={() => (number += 1)}>Click {number}</button>
  <Result {count} />
  <img {...image} />
</main>
