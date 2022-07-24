<script>
   export let icon;
   export let label;
   export let color;
   export let name;
   export let value;
   export let tags;

   const onClick = () => {
      if (tags.includes(value)) {
         tags = tags.filter((elem) => elem != value);
      } else {
         tags = [...tags, value];
      }
   };

   console.log(color);
</script>

<div
   style={"background-color: " + color}
   class="tag"
   class:selected={tags.includes(value)}
   on:click={onClick}
>
   <input type="checkbox" bind:group={tags} {name} {value} />
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
      /* border: 1px solid white; */
      align-items: center;
      justify-content: left;
      border-radius: 5px;
      border-radius: 10px 2px 10px 2px;
      cursor: pointer;
      margin: 0.25em 0.25em;
      user-select: none;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   }
   .selected {
      border-width: 3x;
   }
   .tab:hover {
   }
</style>
