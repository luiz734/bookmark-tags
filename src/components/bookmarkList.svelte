<script>
   import { bookmarks, selectedBookmarks } from "../stores/bookmarks";
   import { selectedTags } from "../stores/tags";
   import Bookmark from "./bookmark.svelte";

   $: $selectedBookmarks = $bookmarks.filter((b) =>
      b.tags.some((t) => $selectedTags.includes(t))
   );
</script>

<div class="list">
   {#each $selectedBookmarks as { icon, label, url } (label)}
      <Bookmark {icon} {label} {url} />
   {/each}
</div>

<style>
   .list {
      border-radius: 15px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      display: flex;
      flex-wrap: wrap;
      height: calc((2em + 30px + 2em) * 3);
      justify-content: left;
      margin: 2em;
      overflow: scroll;
      padding: 1em;
      width: calc(750px + 30px + 2em + 8px);
   }

   /* -------------------------------- Scrollbar ------------------------------- */
   ::-webkit-scrollbar {
      width: 8px;
      border-radius: 5px;
      max-height: 100%;
   }
   ::-webkit-scrollbar-track {
      display: none;
   }
   ::-webkit-scrollbar-thumb {
      background: #333333;
      border-radius: 4px;
   }
   /* -------------------------------------------------------------------------- */
</style>
