<script>
   import { tabs } from "../stores/tabs";
   import Tab from "./tab.svelte";
</script>

<div class="list">
   {#each $tabs as t}
      <Tab icon={"~"} label={t.tabLabel} name={"tags"} value={t.tabLabel} />
   {/each}
</div>

<style>
   .list {
      background-color: #211f1f;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      width: 100%;
      border-bottom: 2px solid #444;
      margin: 0 0 0 -3px;
      height: 35px;
   }
</style>
