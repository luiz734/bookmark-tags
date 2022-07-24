<script>
   import { tags, userConfig, bookmarks } from "../stores";
   import Tag from "./tag.svelte";
   import { getAllTags } from "../util";
   let selected = [];

   $tags = getAllTags($bookmarks);
</script>

<div class="list">
   {#each $tags as t}
      <Tag
         color={$userConfig.tagColors[
            Math.floor(Math.random() * $userConfig.tagColors.length)
         ]}
         icon={"~"}
         label={t}
         name={"tags"}
         value={t}
         bind:tags={selected}
      />
   {/each}
</div>

{#each selected as s}
   {s}
{/each}

<style>
   .list {
      border: 1px solid #444;
      display: flex;
      flex-wrap: wrap;
      padding: 1em;
      border-radius: 15px;
      max-width: 80%;
      justify-content: center;
      z-index: 10 !important;
      
   }
</style>
