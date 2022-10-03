<script>
  import PostItem from "./PostItem.svelte";

  export let data;

  //bind nedir, neden kullanılır?
</script>

<div class="post-container">
  {#each data as post (post.id)}
    <PostItem bind:post />
  {/each}
</div>

<style>
  .post-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
</style>
