<script>
   import { userConfig } from "../stores/state";
   import { tags } from "../stores/tags";
   import Tag from "./tag.svelte";
   import { getRandomColor } from "../util";

   // tags.insertFromBookmarks();
</script>

<div class="list">
   {#each $tags as t}
      <Tag
         color={getRandomColor($userConfig.tagColors)}
         icon={"~"}
         label={t}
         name={"tags"}
         value={t}
      />
   {/each}
</div>

<style>
   .list {
      /* background-color: #131212; */
      background-color: #211f1f;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      width: 100%;
      border-bottom: 2px solid #444;
      margin: 0 0 0 -0.5em;
      /* border-radius: 10px 10px 10px 10px; */
      /* border: 1px solid transparent; */
      /* box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.3); */
      /* max-height: calc(90px + 2px + 2em); */
      /* max-height: calc(1em + 0.5 + 23px); */
      height: 35px;
      /* padding: 0.5em; */
   }
</style>
