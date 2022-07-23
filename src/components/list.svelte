<script>
   import { bookmarks } from "../stores";
   import Bookmark from "./bookmark.svelte";
</script>

<div class="list">
   {#each $bookmarks as { icon, label, link } (label)}
      <Bookmark {icon} {label} {link} />
   {/each}
</div>

<style>
   .list {
      border: 2px solid white;
      display: flex;
      flex-wrap: wrap;
      padding: 1em;
      border-radius: 15px;
      width: fit-content;  
      max-width: 600px;
      justify-content: space-around;
   }
</style>
