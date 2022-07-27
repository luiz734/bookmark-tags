import { writable } from "svelte/store";

export const selectedBookmarks = writable([]);

export const tags = writable([]);
export const selectedTags = writable(["favorite"]);

export const searchQueue = writable([]);
export const userConfig = writable({
   tagColors: [
      // "#3a3a3a",
      "#5a5a5a",
      "#623f26",
      "#865500",
      "#867503",
      "#0a6a44",
      "#3a146f",
      "#580065",
      "#710049",
      "#723125",
   ],
});
