import { writable, get } from "svelte/store";

const createTabs = () => {
   const { subscribe, set } = writable([]);

   const pullData = async () => {
      const response = await chrome.storage.sync.get(["tabs"]);
      set(response.tabs);
   };
   // const pushData = async (data) => {
   //    await chrome.storage.sync.set({ tabs: data });
   //    set(data);
   // };
   return { pullData, subscribe };
};
const tabs = createTabs();
const selectedTab = writable("Favorites");
const selectedBookmarks = writable([]);

export { selectedBookmarks, tabs, selectedTab };
