<script>
   import { selectedTags, searchQueue } from "../stores/state";
   import { selectedFags } from "../stores/tags";

   export let icon;
   export let label;
   export let color;
   export let name;
   export let value;

   const onDoubleClick = (e) => {
      $searchQueue = [];
      $selectedTags = [value];
      selectedFags.insert(value);
   };
   const onClick = (e) => {
      $searchQueue = [];
      if ($selectedTags.includes(value)) {
         $selectedTags = $selectedFags.filter((elem) => elem != value);
      } else {
         $selectedTags = [...$selectedTags, value];
         selectedFags.insert(value);
      }
   };
</script>

<div
   style="--background-color: {color}"
   class="tag"
   class:selected={$selectedTags.includes(value)}
   on:click={onClick}
   on:dblclick={onDoubleClick}
>
   <input type="checkbox" bind:group={$selectedTags} {name} {value} />
   <div class="icon">{icon}</div>
   <div class="label">{label}</div>
</div>

<style>
   .icon {
      font-size: 1em;
      margin: 0 0.5em;
   }
   .label {
      margin: 0 0.5em 0 0;
   }
   .tag {
      align-items: center;
      background-color: #2e2b2b;
      border-radius: 10px 2px 10px 2px;
      border: 1px solid transparent;
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.3);
      color: #ddd;
      cursor: pointer;
      display: flex;
      justify-content: left;
      margin: 0.25em 0.25em;
      user-select: none;
   }
   .selected {
      color: #eee;
      font-weight: 800;
      background-color: var(--background-color);
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
