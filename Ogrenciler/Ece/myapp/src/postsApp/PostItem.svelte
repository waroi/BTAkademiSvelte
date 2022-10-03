<script>
  import { apiService } from "./service";
  import { lazyLoad } from "./lazyLoad";
  import Comments from "./Comments.svelte";

  export let post;
</script>

<div class="post">
  <span>User {post.userId}</span>
  {#await apiService(`photos/${post.id}`)}
    <p>...waiting</p>
  {:then photo}
    <img use:lazyLoad={photo.url} alt={photo.title} />
  {/await}

  <h2>{post.title}</h2>
  <p>{post.body}</p>

  <Comments id={post.id} />
</div>

<style>
  .post {
    border: 1px solid #505050;
    border-radius: 3px;
    padding: 10px 20px;
  }

  .post img {
    opacity: 0;
    transition: all 1s ease;
    max-width: 100%;
  }

  .post span {
    display: block;
    text-align: left;
    margin-bottom: 5px;
  }
</style>
