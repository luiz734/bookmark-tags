import { writable } from "svelte/store";

function createSearchQueue() {
   const { subscribe, update } = writable([]);

   const insert = (tag) => {
      update((current) => [...current, tag]);
   };
   const clear = () => {
      update((current) => []);
   };

   return {
      subscribe,
      insert,
      clear,
   };
}
const searchQueue = createSearchQueue();

const userConfig = writable({
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

export { searchQueue, userConfig };
