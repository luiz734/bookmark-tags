<script>
   import BookmarkList from "./components/bookmarkList.svelte";
   import TagList from "./components/tagList.svelte";
   import Search from "./components/search.svelte";
</script>

<main>
   <div class="container">
      <h1>Texto Foda</h1>

      <Search />
      <TagList />
      <BookmarkList />
   </div>
</main>

<style>
   .container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      min-height: 90vh;
   }
   h1 {
      letter-spacing: 5px;
   }
</style>
