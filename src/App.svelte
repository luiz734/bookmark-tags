<script>
   import { searchQueue } from "./stores/state";
   import { tags } from "./stores/tags";
   import BookmarkList from "./components/bookmarkList.svelte";
   import TagList from "./components/tagList.svelte";
   import AddBookmark from "./components/addBookmark.svelte";

   tags.insertFromBookmarks();
</script>

<main>
   <!-- <AddBookmark /> -->
   <TagList />
   <div class="container">
      <BookmarkList />
   </div>
</main>

<style>
   .container {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: calc(100vh - 35px);
   }
</style>
