<script>
  import { apiService } from "./service";
  import PostLayout from "./PostLayout.svelte";

  //await bloğu içinde "bind:" kullanılamıyor, neden?
</script>

{#await apiService("posts")}
  <p>...waiting</p>
{:then data}
  <PostLayout {data} />
{:catch error}
  <p>An error occurred!</p>
{/await}
