<script>
   import { searchQueue } from "../stores/state";
   import { bookmarks } from "../stores/bookmarks";
   import Result from "./result.svelte";

   const results = $bookmarks.filter((b) =>
      b.tags.some((t) => $searchQueue.includes(t))
   );
</script>

<div class="list">
   {#if results.length > 0}
      {#each results as { icon, label, url } (label)}
         <Result {url} />
      {/each}
   {:else}
      <div class="no-results">No results found</div>
   {/if}
</div>

<style>
   .list {
      border-radius: 15px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      height: calc(100px * 5);
      justify-content: left;
      margin: 3em 0 0 0;
      overflow: scroll;
      padding: 1em;
      width: calc(1000px + 30px + 2em + 8px);
   }
   .no-results {
      color: #757575;
      font-size: 1.5em;
      text-align: center;
      height: 100px;
      width: 100%;
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
