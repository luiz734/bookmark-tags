<script>
   import { selectedBookmarks, tabs, selectedTab } from "../stores/tabs";
   import { addBookmarkOverlay } from "../stores/state";
   import Bookmark from "./bookmark.svelte";

   $: $selectedBookmarks = $tabs.find(
      (t) => t.tabLabel == $selectedTab
   ).bookmarks;

   const onClickAddBtn = () => {
      $addBookmarkOverlay = true;
   };
</script>

<div class="add-btn" on:click={onClickAddBtn}> add bookmark</div>
<div class="list">
   {#each $selectedBookmarks as { icon, label, url }}
      <Bookmark {icon} {label} {url} />
   {/each}
</div>

<style>
   .add-btn {
      position: absolute;
      left: 15px;
      top: 50px;
      user-select: none;
      cursor: pointer;
      color: #444;
   }
   .add-btn:hover {
      color: #aaa;
   }
   .list {
      position: relative;
      border-radius: 15px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      display: flex;
      flex-wrap: wrap;
      /* flex-direction: column; */
      justify-content: start;
      align-items: center;
      overflow-y: scroll;
      max-width: calc((250px) * 4 + 14px + 8px);
      padding: 3px;
      max-height: 100%;
      min-height: 50px;
      min-width: 170px;
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
