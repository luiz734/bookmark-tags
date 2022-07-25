<script>
   import { bookmarks, selectedBookmarks, selectedTags } from "../stores";
   import Bookmark from "./bookmark.svelte";
   import { getBooksMarksWithTags } from "../util";

   $: $selectedBookmarks = getBooksMarksWithTags($bookmarks, $selectedTags);
</script>

<div class="list">
   {#each $selectedBookmarks as { icon, label, link } (label)}
      <Bookmark {icon} {label} {link} />
   {/each}
</div>

<style>
   /* width */
   ::-webkit-scrollbar {
      width: 8px;
      border-radius: 5px;
      max-height: 100%;
   }
   /* Track */
   ::-webkit-scrollbar-track {
      display: none;
   }
   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: #333333;
      border-radius: 4px;
   }
   .list {
      display: flex;
      flex-wrap: wrap;
      padding: 1em;
      border-radius: 15px;
      width: calc(750px + 30px + 2em + 8px);
      height: calc((2em + 30px + 2em) * 3);
      justify-content: left;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      margin: 4em;
      overflow: scroll;
   }
</style>
