<script>
   import { tags, bookmarks, searchQueue } from "./stores";
   import { getAllTags } from "./util";

   import BookmarkList from "./components/bookmarkList.svelte";
   import TagList from "./components/tagList.svelte";
   import Search from "./components/search.svelte";
   import ResultList from "./components/resultList.svelte";

   $tags = getAllTags($bookmarks);
</script>

<main>
   <div class="container">
      <Search />
      {#if $searchQueue.length > 0}
         <ResultList />
      {:else}
         <TagList />
         <BookmarkList />
      {/if}
   </div>
</main>

<style>
   .container {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: start;
      min-height: 90vh;
   }
</style>
