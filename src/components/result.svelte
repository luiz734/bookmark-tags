<script>
   export let url;

   export const onClick = () => {
      window.open(url).focus();
   };
   console.log(url);

   const regexTitle = /\/([\w-]+)\/?$/.exec(url);
   const regexWebsite = /^https?:\/\/(?:www\.)?((?:\w+\.)+\w+)/.exec(url);

   const title = regexTitle ? regexTitle[1] : "";
   const website = regexWebsite ? regexWebsite[1] : "";
</script>

<div class="result" on:click={onClick}>
   <div class="icon">~</div>
   <div class="website">{website}</div>
   <div class="title">{title ? title : ""}</div>
   <div class="url">{url}</div>
</div>

<style>
   .icon {
      font-size: 1em;
      margin: 0 0.5em;
   }
   .website {
      margin-right: 20px;
   }
   .title {
      overflow: hidden;
   }
   .url {
      color: #777;
      width: 90%;
      font-size: 0.8em;
      max-height: 1.3em;
      overflow: hidden;
   }
   .result {
      align-items: center;
      border-radius: 5px;
      border: 1px solid transparent;
      cursor: pointer;
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      margin: 0.25em 0.25em;
      padding: 15px;
      user-select: none;
      flex: 0 0 100%;
      max-height: calc(100px);
   }

   .result:hover {
      border: 1px solid #777;
   }
</style>
