<script>
   export let icon;
   export let label;
   export let link;

   const onClick = () => {
      window.open(link).focus();
   };
</script>

<div class="bookmark" on:click={onClick}>
   <div class="icon">{icon}</div>
   <div class="label">{label}</div>
</div>

<style>
   .icon {
      font-size: 2em;
      margin: 0 0.5em;
   }
   .label {
      margin: 0 1em 0 0;
   }
   .bookmark {
      display: flex;
      border: 1px solid white;
      align-items: center;
      justify-content: left;
      /* min-width: 150px; */
      flex: content;
      border-radius: 5px;
      cursor: pointer;
      margin: 0.25em 0.25em;
   }

   .bookmark:hover {
      background-color: #000000;
   }
</style>
