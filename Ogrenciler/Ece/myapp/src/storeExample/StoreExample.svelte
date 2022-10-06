<script>
  import { count } from "../store";
  import Increment from "./Increment.svelte";
  import Decrement from "./Decrement.svelte";
  import Reset from "./Reset.svelte";
</script>

<h2>Sayı</h2>

<Decrement />
<span>{$count}</span>
<Increment />
<br />
<br />
<Reset />

<style>
  span {
    margin: 0 10px;
  }
</style>
