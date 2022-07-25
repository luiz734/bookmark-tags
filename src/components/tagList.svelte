<script>
   import { tags, userConfig, selectedTags } from "../stores";
   import Tag from "./tag.svelte";
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
      />
   {/each}
</div>

<style>
   .list {
      /* border: 1px solid #1f1d1d; */
      background-color: #242222;
      /* box-shadow: 3px 2px 4px 0 rgba(0, 0, 0, 0.5); */
      display: flex;
      flex-wrap: wrap;
      padding: 1em;
      border-radius: 15px;
      max-width: 750px;
      max-height: calc(90px + 2px + 2em);
      justify-content: center;
      z-index: 10 !important;
      margin: 2em 0;
   }
</style>
