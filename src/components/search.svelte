<script>
   let textInput;
   $: focus = false;

   const onKeyPress = (e) => {
      console.log(e.keyCode);
      if (e.keyCode == 32) {
         textInput.placeholder = "start typing";
         textInput.focus();
         focus = true;
      } else if (e.keyCode == 13) {
         textInput.placeholder = "press space to focus";
         textInput.value = "";
         focus = false;
      }
   };
</script>

<svelte:window on:keyup={onKeyPress} />

<div class="search-bar">
   <div class:focus class="input">
      <input
         class:focus
         bind:this={textInput}
         type="text"
         placeholder="press space to focus"
      />
   </div>
</div>

<style>
   .focus {
      background: aqua;
      background-color: #2e2b2b !important;
      color: #ddd !important;
   }
   input[type="text"] {
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      background-color: #211f1f;
      border-bottom: 1px solid #444 !important;
      border: none;
      caret-color: transparent;
      color: #aaa;

      font-size: 1em;
      height: 2.5em;
      letter-spacing: 2px;
      outline: none;
      padding: 0 0.5em;
      text-align: center;
      width: 100%;
   }

   .search-bar {
      display: flex;
      align-items: center;
      width: 80%;
      justify-content: center;
      margin: 2em 0;
   }
   .input {
      height: 2.5em;
      flex: 0 0 60%;
      min-width: 400px;
   }
</style>
