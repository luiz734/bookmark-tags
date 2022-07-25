<script>
   export let icon;
   export let label;
   export let url;

   const onClick = () => {
      window.open(url).focus();
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
      align-items: center;
      border-radius: 5px;
      border: 1px solid transparent;
      cursor: pointer;
      display: flex;
      justify-content: left;
      margin: 0.25em 0.25em;
      max-height: 72px;
      padding: 15px;
      user-select: none;
      width: 250px;
   }

   .bookmark:hover {
      border: 1px solid #777;
   }
</style>
