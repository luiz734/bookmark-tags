<script>
   import { tags, bookmarks } from "./stores";
   import { getAllTags } from "./util";

   import BookmarkList from "./components/bookmarkList.svelte";
   import TagList from "./components/tagList.svelte";
   import Search from "./components/search.svelte";

   $tags = getAllTags($bookmarks);

   
</script>

<main>
   <div class="container">
      <Search />
      <TagList />
      <BookmarkList />
   </div>
</main>

<style>
   .container {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      min-height: 90vh;
   }
   h1 {
      letter-spacing: 5px;
   }
</style>
