<script>
  import { apiService } from "./service";

  export let id;
</script>

<h3>Yorumlar:</h3>
{#await apiService(`posts/${id}/comments`)}
  <p>...waiting</p>
{:then comments}
  {#each comments as comment (comment.id)}
    <div class="comment-container">
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
      <span>{comment.email}</span>
    </div>
  {/each}
{/await}

<style>
  .comment-container {
    text-align: left;
    border-bottom: 1px solid #505050;
    padding-bottom: 10px;
  }
</style>
