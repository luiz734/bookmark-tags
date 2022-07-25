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
      margin: 0 0 0 0;
      font-size: 1.3em;
   }
   .bookmark {
      display: flex;
      align-items: center;
      justify-content: left;
      border-radius: 5px;
      width: 250px;
      max-height: 72px;
      cursor: pointer;
      margin: 0.25em 0.25em;
      padding: 15px;
      border: 1px solid transparent;
      user-select: none;
   }

   .bookmark:hover {
      border: 1px solid #777;
   }
</style>
