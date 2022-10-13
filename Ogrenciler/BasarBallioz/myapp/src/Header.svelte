<script>
  import { Link } from "svelte-navigator";
</script>

<div>
  <Link to="/">
    <h1>Decathlon</h1>
  </Link>
  <slot />
</div>

<style>
  h1 {
    color: #0082c3;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 32px;
    -webkit-text-fill-color: #0082c3;
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: white;
  }
</style>
