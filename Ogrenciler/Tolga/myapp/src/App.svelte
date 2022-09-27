<script>
  //import Result from "./Result.svelte";
  //let number = 0;
  //$: count = number * 2;

  import Counter from "./lib/Counter.svelte";

  //const handleClick =() => (number += 1);
let image = {
  src:  "http://localhost:5173/src/assets/svelte.svg",
  alt: "Svelte",
  title: "Svelte Logo",
}
</script>

<img {...image} />

<style>
  img {height: 200px;}
</style>
