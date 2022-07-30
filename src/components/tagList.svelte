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
      background-color: #242222;
      border-radius: 15px;
      /* box-shadow: 3px 2px 4px 0 rgba(0, 0, 0, 0.5); */
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 2em 0;
      max-height: calc(90px + 2px + 2em);
      max-width: 1000px;
      padding: 1em;
   }
</style>
