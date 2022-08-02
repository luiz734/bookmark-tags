<script>
   import { bookmarks } from "../stores/bookmarks";

   let icon = "~";
   let label = "";
   let url = "";
   let tags = "";

   const onSubmit = () => {
      console.log(icon);
      bookmarks.insert(
         icon,
         label,
         url,
         tags.split(" ").filter((str) => str.length > 0)
      );
      console.log($bookmarks);
   };
</script>

<form on:submit|preventDefault={onSubmit}>
   <div class="item">
      <label for="icon">Icon</label>
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
   <div class="item">
      <label for="tags">Tags</label>
      <input type="text" id="tags" bind:value={tags} />
   </div>
   <div class="buttom">
      <button type="submit"> Add Bookmark </button>
   </div>
</form>

<style>
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
   form {
      padding: 1em;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 500px;
      border: 2px solid #444;
      border-radius: 8px;
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
