<script>
   import { selectedTab, tabs, selectedBookmarks } from "../stores/tabs";

   export let label;
   export let name;
   export let value;

   const onDoubleClick = (e) => {
      console.log("renaming " + label);
   };
   const onClick = (e) => {
      $selectedTab = label;
   };
</script>

<div
   style="--background-color: #211f1f;"
   class="tag"
   class:selected={$selectedTab == value}
   on:click={onClick}
   on:dblclick={onDoubleClick}
>
   <input type="radio" {name} {value} />
   <!-- <div class="icon">{icon}</div> -->
   <div class="label">{label}</div>
   <div class:hidde-border={$selectedTab == value} />
</div>

<style>
   .icon {
      font-size: 1em;
      margin: 0 0.5em;
   }
   .hidde-border {
      position: absolute;
      width: 100%;
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
      background-color: transparent;
      color: #ddd;
      font-size: 20px;
      cursor: pointer;
      display: flex;
      justify-content: left;
      margin: 0 3px 0 3px;
      user-select: none;
      height: 100%;
      border: 2px solid transparent;
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
   input[type="radio"] {
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      -webkit-appearance: none;
      appearance: none;
   }
</style>
