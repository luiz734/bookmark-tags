import { derived, readable } from "svelte/store";
import { bookmarks } from "./bookmarks";

function createTags() {
   const { subscribe, update } = derived(bookmarks, ($bookmarks) => {
      const tags = new Set();

      $bookmarks.map((b) => {
         b.tags.map((tag) => tags.add(tag));
      });

      return Array.from(tags);
   });

   return { subscribe };
}
const fags = createTags();

function createSelectedTags() {
   const { subscribe, update } = derived(fags, ($fags) => {
      return ["favorites"];
   });

   const insert = (tag) => {
      update((current) => {
         current = [...current, tag];
      });
   };

   return { subscribe, insert};
}
const selectedFags = createSelectedTags();

export { fags, selectedFags };
