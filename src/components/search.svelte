<script>
   import { searchQueue } from "../stores/state";
   const SPACE_BAR = 32;
   const RETURN = 13;
   const ESCAPE = 27;

   $: focus = document.activeElement === textInput;
   let textInput;

   const onKeyPress = (e) => {
      const noFocus_Space = !focus && e.keyCode == SPACE_BAR;
      const queue_Escape = $searchQueue.length > 0 && e.keyCode == ESCAPE;
      const focus_Escape = focus && e.keyCode == ESCAPE;
      const focus_Return = focus && e.keyCode == RETURN;

      if (noFocus_Space) {
         textInput.placeholder = "start typing";
         textInput.focus();
         searchQueue.clear();
      } else if (focus_Escape) {
         textInput.placeholder = "press space to focus";
         textInput.value = "";
         textInput.blur();
         searchQueue.clear();
      } else if (focus_Return) {
         textInput.placeholder = "press space to focus";
         textInput.value
            .split(" ")
            .filter((str) => str.length > 0)
            .map((t) => {
               searchQueue.insert(t);
            });
         textInput.value = "";
         textInput.blur();
      } else if (queue_Escape) {
         searchQueue.clear();
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

      /* removes default style */
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      -webkit-appearance: none;
      appearance: none;
   }

   .search-bar {
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 2em 0;
      width: 80%;
   }
   .input {
      flex: 0 0 60%;
      height: 2.5em;
      min-width: 400px;
   }
</style>
