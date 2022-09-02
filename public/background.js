const initializeStorage = async () => {
   // creates extension root folder
   await chrome.bookmarks.getTree();
   const newFolder = await chrome.bookmarks.create({ title: "tabs" });
   const rootId = newFolder.id;
   // adds the default bookmark folder
   await chrome.bookmarks.create({
      title: "Favorites",
      parentId: newFolder.id,
   });
   // sync the data with the storage
   await chrome.storage.sync.set({ rootId, tabs: [] });
};

const readFromBookmarks = async () => {
   const response = await chrome.storage.sync.get(["rootId"]);
   const rootId = response.rootId;
   if (!rootId) {
      console.error("Coudn't get rootId from storage");
   }
   console.log(rootId);
   const allTabs = await chrome.bookmarks.getChildren(rootId);
   if (!allTabs) {
      console.error("Couldn't get root");
   }

   const tabs = [];
   await Promise.all(
      allTabs.map(async (tab) => {
         const children = await chrome.bookmarks.getChildren(tab.id);
         if (!children) {
            console.error(`Couldn't get children of ${tab}`);
         }
         console.log("tab is fine");

         const bookmarks = [];
         children.map((bookmark) => {
            const splitedTitle = bookmark.title.split("_");
            let icon = "";
            // assume that there is no icon ar first
            let label = splitedTitle[0];

            // if there is an icon change the label accordingly
            const hasIcon = splitedTitle.length > 1;
            if (hasIcon) {
               icon = splitedTitle[0];
               label = splitedTitle.slice(1).join(" ");
            }
            const url = bookmark.url;

            bookmarks.push({ icon, label, url });
         });
         tabs.push({ tabLabel: tab.title, bookmarks: bookmarks });
      })
   );

   console.log(`read from bookmarks with data`);
   await chrome.storage.sync.set({ rootId, tabs });
};

const getDataFromBookmarks = async () => {
   await readFromBookmarks();
};

chrome.runtime.onInstalled.addListener(async () => {
   console.log("extension installed");

   await initializeStorage();
   await readFromBookmarks();
});

chrome.bookmarks.onChanged.addListener(async (id, changeInfo) => {
   await getDataFromBookmarks();
});
chrome.bookmarks.onCreated.addListener(async (id, bookmark) => {
   await getDataFromBookmarks();
});
chrome.bookmarks.onRemoved.addListener(async (id, removeInfo) => {
   await getDataFromBookmarks();
});
chrome.bookmarks.onChildrenReordered.addListener(async (id, removeInfo) => {
   await getDataFromBookmarks();
});
chrome.bookmarks.onMoved.addListener(async (id, moveInfo) => {
   await getDataFromBookmarks();
});
