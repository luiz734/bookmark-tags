const data = {
   rootId: "",
   tabs: [],
};

const initializeStorage = async () => {
   // creates extension root folder
   await chrome.bookmarks.getTree();
   const newFolder = await chrome.bookmarks.create({ title: "tabs" });
   data.rootId = newFolder.id;
   // adds the default bookmark folder
   await chrome.bookmarks.create({
      title: "Favorites",
      parentId: newFolder.id,
   });
   // sync the data with the storage
   // await chrome.storage.sync.remove(["data"]);
   console.log(data);
   await chrome.storage.sync.set({ ...data });
};

const readFromBookmarks = async () => {
   const allTabs = await chrome.bookmarks.getChildren(data.rootId);

   data.tabs = [];
   await Promise.all(
      allTabs.map(async (tab) => {
         const children = await chrome.bookmarks.getChildren(tab.id);
         const bookmarks = [];
         children.map((bookmark) => {
            const splitedTitle = bookmark.title.split("_");
            let icon = splitedTitle[0];
            let label = splitedTitle.slice(1).join(" ");
            // Fix when there is no icon
            if (label == "") {
               label = icon;
               icon = "";
            }
            const url = bookmark.url;

            bookmarks.push({ icon, label, url });
         });
         data.tabs.push({ tabLabel: tab.title, bookmarks: bookmarks });
      })
   );

   // await chrome.storage.sync.remove(["data"]);
   console.log("read from bookmarks");
   console.log(data);
   await chrome.storage.sync.set({ ...data });
};

const getDataFromBookmarks = async () => {
   await readFromBookmarks();
   // try {
   // readFromBookmarks(() => {
   //       console.log("get data from bookmarks done");
   //    });
   // } catch (e) {
   //    console.error(e);
   // }
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
