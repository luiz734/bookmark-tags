<script>
   import AddBookmark from "./components/addBookmark.svelte";
   import BookmarkList from "./components/bookmarkList.svelte";
   import TagList from "./components/tabList.svelte";
   import { tabs, selectedBookmarks, selectedTab } from "./stores/tabs";
</script>

<main>
   <AddBookmark />
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
