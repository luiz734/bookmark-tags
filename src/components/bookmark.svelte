<script>
   export let icon;
   export let label;
   export let url;

   const onClick = (e) => {
      if (e.ctrlKey) {
         window.open(url).focus();
      } else {
         window.open(url, "_self");
      }
   };
</script>

<div class="bookmark" on:click={onClick}>
   <div class="icon">{icon}</div>
   <div class="label">{label}</div>
</div>

<style>
   .icon {
      font-size: 3em;
      margin: 0 0.5em;
   }
   .label {
      /* margin: 0; */
      font-size: 1.3em;
   }
   .bookmark {
      align-items: center;

      /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */
      background-color: #292626;
      border-radius: 5px;
      border: 2px solid transparent;
      cursor: pointer;
      display: flex;
      justify-content: left;
      margin: 1px 1px;
      height: 72px;
      padding: 5px;
      user-select: none;
      width: 250px;
      margin: 5px;
   }

   .bookmark:hover {
      border: 2px solid #444;

      /* box-shadow: 0 4px 8px 0 rgba(184, 184, 184, 0.342); */
   }
</style>
