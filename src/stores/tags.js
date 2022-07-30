import { writable, get, derived } from "svelte/store";
import { bookmarks } from "./bookmarks";

const data = ["mytag1", "mytag2"];

function createTags() {
   const { subscribe, update } = writable(data);

   const insert = (value) => {
      update((current) => [...current, value]);
   };
   const remove = (value) => {
      update((current) => current.filter((t) => t.value != value));
   };
   const insertFromArray = (tags) => {
      tags.map((t) => insert(t));
   };
   const insertFromBookmarks = () => {
      const tags = new Set();

      get(bookmarks).map((b) => {
         b.tags.map((tag) => tags.add(tag));
      });

      insertFromArray(Array.from(tags));
   };

   return {
      subscribe,
      insert,
      remove,
      insertFromArray,
      insertFromBookmarks,
   };
}
const tags = createTags();

const createSelectedTags = () => {
   const { subscribe, update } = writable(["favorite"]);

   const select = (tag) => {
      update((current) => [...current, tag]);
   };
   const unselect = (tag) => {
      update((current) => current.filter((t) => t != tag));
   };
   const unselectAll = () => {
      update((_current) => []);
   };
   const toggleSelect = (tag) => {
      update((current) => {
         if (current.includes(tag)) {
            return current.filter((t) => t != tag);
         } else {
            return [...current, tag];
         }
      });
   };

   return { subscribe, select, unselect, unselectAll, toggleSelect };
};
const selectedTags = createSelectedTags();

export { tags, selectedTags };
