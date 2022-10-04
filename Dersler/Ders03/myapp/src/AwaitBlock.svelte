<script>
  import request, { post, get } from "./request";
</script>

{#await get("http://localhost:3000/todos")}
  <p>Veriler yolda...</p>
{:then data}
  {#each data as post (post.id)}
    <div>
      <h2>{post.title}</h2>
      {#if post.completed}
        <p>yapıldı</p>
      {:else}
        <p>yapılmadı</p>
      {/if}
    </div>
  {/each}
{:catch err}
  <p>Hata: {err}</p>
{/await}
