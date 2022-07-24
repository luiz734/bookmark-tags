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
      /* border: 2px solid white; */
      display: flex;
      flex-wrap: wrap;
      padding: 1em;
      border-radius: 15px;
      width: fit-content;
      min-width: 300px;
      max-width: 80%;
      justify-content: left;
      flex: 0 0 60%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   }
</style>
