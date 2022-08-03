<script>
   import { tabs, selectedTab } from "../stores/tabs";
   import { addBookmarkOverlay } from "../stores/state";
   import { onMount } from "svelte";

   let icon = "";
   let label = "";
   let url = "";

   let DOM_icon;

   const onSubmit = () => {
      tabs.insert($selectedTab, icon, label, url);
      console.log(`inserted in {$selectedTabs} `);
      icon = label = url = "";
      DOM_icon.focus();
   };
   const onClose = () => {
      $addBookmarkOverlay = false;
   };
</script>

<div class="overlay" class:hidden={!$addBookmarkOverlay}>
   <form on:submit|preventDefault={onSubmit}>
      <div class="close-btn" on:click={onClose}></div>
      <div class="item">
         <label for="icon" bind:this={DOM_icon}>Icon</label>
         <input type="text" id="icon" bind:value={icon} />
      </div>
      <div class="item">
         <label for="label">Name</label>
         <input type="text" id="label" bind:value={label} />
      </div>
      <div class="item">
         <label for="url">URL</label>
         <input type="text" id="url" bind:value={url} />
      </div>
      <div class="buttom">
         <button type="submit"> Add Bookmark </button>
      </div>
   </form>
</div>

<style>
   .close-btn {
      position: absolute;
      right: 10px;
      top: 5px;
      user-select: none;
      cursor: pointer;
      color: #444;
   }
   .close-btn:hover {
      color: #aaa;
   }
   .hidden {
      display: none !important;
   }
   .overlay {
      width: 100vw;
      height: 100vh;
      position: absolute;
      justify-content: center;
      align-items: flex-start;
      /* margin-top: 40px; */
      background-color: #0000007e;
      z-index: 1;
      display: flex;
   }
   form {
      padding: 1em;
      position: relative;
      background-color: #211f1f;
      display: flex;
      display: inline-block;
      flex-direction: column;
      align-items: center;
      width: 500px;
      border: 2px solid #444;
      border-radius: 8px;
   }
   .buttom {
      width: 100%;
      margin-top: 20px;
      padding: 0 20px;
   }
   button {
      display: block;
      width: 100%;
      border: 2px solid #444;
      border-radius: 8px;
      padding: 10px 20px;
      background-color: transparent;
      color: #aaa;
      cursor: pointer;
      text-align: center;
   }
   button:hover {
      border-color: #666;
      color: #ccc;
   }

   .item {
      margin: 0.2em 0;
   }
   label {
      background-color: #211f1f;
      text-align: left;
      display: inline-block;
      width: 50px;
   }
   input {
      background-color: #211f1f;
      border-bottom: 1px solid #444 !important;
      border: none;
      color: #aaa;
      font-size: 1em;
      height: 2em;
      outline: none;
      width: 400px;
      /* removes default style */
      -moz-appearance: none;
      -ms-appearance: none;
      -o-appearance: none;
      -webkit-appearance: none;
      appearance: none;
   }
</style>
