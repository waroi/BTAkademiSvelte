<script>
  import Image from "./Image.svelte";
  // import Result from "./Result.svelte";
  // // let name = "Varol";
  // let number = 0;
  // $: count = number * 2;
  // const handleClick = () => (number += 1);

  import Counter from "./lib/Counter.svelte";

  let image = {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png",
    alt: "Facebook",
    title: "Facebook Logo",
    height: 200,
  };
</script>

<!-- <Result {count} /> -->
<!-- <h1>{name}</h1> -->

<!-- <button on:click={handleClick}>
  Bu butona {number} kez bastınız
</button>

<Result {count} />
<br /><br />
<Result /> -->

<Image {...image} />
<br />
<Image {...image} />
<br />
<Image src={image.src} />
<br />
<Image src={image.src} alt={image.alt} />

<style>
</style>
