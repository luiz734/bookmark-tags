<script>
   import { selectedTags } from "../stores";

   export let icon;
   export let label;
   export let color;
   export let name;
   export let value;

   const onClick = () => {
      if ($selectedTags.includes(value)) {
         $selectedTags = $selectedTags.filter((elem) => elem != value);
      } else {
         $selectedTags = [...$selectedTags, value];
      }
   };
</script>

<div
   style={"background-color: " + color}
   class="tag"
   class:selected={$selectedTags.includes(value)}
   on:click={onClick}
>
   <input type="checkbox" bind:group={$selectedTags} {name} {value} />
   <div class="icon">{icon}</div>
   <div class="label">{label}</div>
</div>

<style>
   input[type="checkbox"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      appearance: none;
   }
   .icon {
      font-size: 1em;
      margin: 0 0.5em;
   }
   .label {
      margin: 0 0.5em 0 0;
   }
   .tag {
      display: flex;
      align-items: center;
      justify-content: left;
      border-radius: 5px;
      border: 1px solid transparent;
      border-radius: 10px 2px 10px 2px;
      cursor: pointer;
      margin: 0.25em 0.25em;
      user-select: none;
      color: #ddd;
      background-color: none !important;
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.3);
   }
   .selected {
      color: #eee;
      font-weight: 800;
   }
   .tag:hover {
      font-weight: bold;
   }
</style>
