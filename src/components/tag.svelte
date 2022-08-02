<script>
   import { searchQueue } from "../stores/state";
   import { tags, selectedTags } from "../stores/tags";

   export let icon;
   export let label;
   export let color;
   export let name;
   export let value;

   const onDoubleClick = (e) => {
      searchQueue.clear();
      selectedTags.unselectAll();
      selectedTags.select(value);
   };
   const onClick = (e) => {
      searchQueue.clear();
      selectedTags.toggleSelect(value);
   };
</script>

<div
   style="--background-color: #211f1f;"
   class="tag"
   class:selected={$selectedTags.includes(value)}
   on:click={onDoubleClick}
   on:dblclick={onDoubleClick}
>
   <input type="checkbox" bind:group={$selectedTags} {name} {value} />
   <!-- <div class="icon">{icon}</div> -->
   <div class="label">{label}</div>
   <div class:hidde-border={$selectedTags.includes(value)}></div>
</div>

<style>
   .icon {
      font-size: 1em;
      margin: 0 0.5em;
   }
   .hidde-border {
      position: absolute;
      width: 100%;
      /* width: 50px; */
      background-color: #211f1f;
      height: 2px;
      bottom: -2px;
   }
   .label {
      /* margin: 0 0.5em 0 0; */
      padding: 0px 20px;
   }
   .tag {
      position: relative;
      align-items: center;
      /* background-color: #2e2b2b; */
      /* background-color: #131212; */
      background-color: transparent;
      /* border-radius: 10px 2px 10px 2px; */
      /* border: 1px solid transparent; */
      /* box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.3); */
      color: #ddd;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      justify-content: left;
      margin: 0em 0.2em 0 0.2em;
      user-select: none;
      height: 100%;
      /* border-bottom: 2px solid #ddd; */
   }
   .selected {
      color: #eee;
      font-weight: 800;
      background-color: var(--background-color);
      border: 2px solid #444;
      border-bottom: none;
      /* border-radius: 15px 15px 0px 0px; */
   }
   .tag:hover {
      font-weight: bold;
   }
   /* removes default style */
   input[type="checkbox"] {
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      -webkit-appearance: none;
      appearance: none;
   }
</style>
