<script>

import {onMount} from 'svelte'
let posts = []


onMount (async()=>{
   const data=await fetch('https://jsonplaceholder.typicode.com/posts')
   posts=await data.json()


})



</script>

<div class="box-container">
{#each  posts as post (post.id)}
<div class="box">

    <div class="box-header">
        <div class="post-id">
            {post.id} 
        </div>
        <div class="post-title">
            {post.title}
        </div>
    </div>

   

    <div class="post-body">
        {post.body}
    </div>

   
</div>

{/each}
</div>

<style>
   

.box-container{
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-column-gap: 40px;
   grid-row-gap: 40px;
   }
.box{
 padding: 10px 15px 30px 15px;
 border: 1px solid grey;
 border-radius: 3px;
 background-color: #ededed;
}
.post-id{
    border: 2px solid black;
    border-radius: 25px;
    width: 22px;
    height: 22px;
    margin-bottom: 15px;
    font-size: 11px;
    font-weight:700;
    text-align:center;
}
.post-title{
    font-size: 11px;
    font-weight:700;
    text-transform: uppercase;
}
.post-body{
    font-size:11px;
    text-align:center;
}
.box-header{
padding-bottom: 15px;
}
</style>