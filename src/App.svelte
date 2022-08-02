<script>
   import { searchQueue } from "./stores/state";
   import { tags } from "./stores/tags";
   import BookmarkList from "./components/bookmarkList.svelte";
   import TagList from "./components/tagList.svelte";
   import Search from "./components/search.svelte";
   import ResultList from "./components/resultList.svelte";
   import AddBookmark from "./components/addBookmark.svelte";

   tags.insertFromBookmarks();
</script>

<main>
   <AddBookmark />
   <!-- <div class="container">
      <Search />
      {#if $searchQueue.length > 0}
         <ResultList />
      {:else}
         <TagList />
         <BookmarkList />
      {/if}
   </div> -->
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
