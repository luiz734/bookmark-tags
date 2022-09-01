<script>
   import { onMount } from "svelte";

   import BookmarkList from "./components/bookmarkList.svelte";
   import TabList from "./components/tabList.svelte";
   import { tabs } from "./stores/tabs";

   onMount(async () => {
      await tabs.pullData();
      console.log("mounted");
   });

   // chrome.bookmarks.onChanged.addListener(async (id, changeInfo) => {
   //    await tabs.pushData($tabs);
   // });
   // chrome.bookmarks.onCreated.addListener(async (id, bookmark) => {
   //    await tabs.pushData($tabs);
   // });
</script>

<svelte:head>
   <title>New Tab</title>
</svelte:head>
<main>
   <!-- <AddBookmark /> -->
   <TabList />
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
      font-size: 16px;
   }
</style>
