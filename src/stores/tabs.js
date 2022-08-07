import { writable, get } from "svelte/store";

const bookmarks = [
   {
      icon: "輸",
      label: "Youtube",
      url: "https://www.youtube.com/",
   },
   {
      icon: "",
      label: "WhatsApp",
      url: "https://sistemas2.utfpr.edu.br/dpls/sistema/aluno01/mpmenu.inicio/",
   },
   {
      icon: "",
      label: "Github",
      url: "https://www.github.com/",
   },
   {
      icon: "",
      label: "Drive",
      url: "https://drive.google.com/drive/my-drive",
   },
   {
      icon: "",
      label: "Jeyllyfin",
      url: "http://localhost:8096/",
   },
   {
      icon: "ﮊ",
      label: "ThePirateBay",
      url: "https://thepiratebay.org/",
   },
];
const utfpr = [
   {
      icon: "拾",
      label: "UTFPR",
      url: "https://sistemas2.utfpr.edu.br/login?returnUrl=%2Fdpls%2Fsistema%2Faluno01%2Fmpmenu.inicio",
   },
   {
      icon: "龎",
      label: "DAINF",
      url: "https://moodle.dainf.ct.utfpr.edu.br/",
   },
   {
      icon: "",
      label: "Drive",
      url: "https://drive.google.com/drive/u/1/my-drive",
   },
];

const mail = [
   {
      icon: "",
      label: "Gmail",
      url: "https://mail.google.com/mail/u/1/#inbox=https://www.wikipedia.org/",
   },
   {
      icon: "",
      label: "Outlook",
      url: "https://outlook.live.com/mail/0/",
   },
];
const localhost = [
   {
      icon: "泌",
      label: "8080",
      url: "http://localhost:8080",
   },
   {
      icon: "泌",
      label: "5000",
      url: "http://localhost:5000",
   },
];
function createSelectedBookmarks() {
   const { subscribe, update, set } = writable([]);

   const insert = (icon, label, url) => {
      update((current) => {
         return [
            ...current,
            {
               icon,
               label,
               url,
            },
         ];
      });
   };
   const remove = (label) => {
      update((current) => current.filter((b) => b.label != label));
   };

   return {
      subscribe,
      insert,
      remove,
      set,
   };
}
const selectedBookmarks = createSelectedBookmarks();

const data = [
   {
      tabLabel: "Favorites",
      bookmarks: bookmarks,
   },
   {
      tabLabel: "UTFPR",
      bookmarks: utfpr,
   },

   {
      tabLabel: "Mail",
      bookmarks: mail,
   },
   {
      tabLabel: "localhost",
      bookmarks: localhost,
   },
];

function createTabs() {
   const { subscribe, update } = writable(data);

   const insert = (tabLabel, icon, label, url) => {
      update((current) => {
         // if not exists, create one
         let tab = current.find((t) => t.tabLabel == tabLabel);
         if (!tab) {
            tab = { tabLabel: tabLabel, bookmarks: [] };
            current.push(tab);
         }
         tab.bookmarks.push({ icon, label, url });
         return current;
      });
   };
   const remove = (tabLabel, bookmarkLabel) => {
      update((current) => {
         try {
            let tab = current.find((t) => t.tabLabel == tabLabel);
            tab.bookmarks = tab.bookmarks.filter(
               (b) => b.label != bookmarkLabel
            );
         } catch (e) {
            console.log(e);
         }
         return current;
      });
   };
   return {
      subscribe,
      insert,
      remove,
   };
}
const tabs = createTabs();

const createSelectedTab = () => {
   const { subscribe, update, set } = writable("Favorites");

   const select = (tabLabel) => {
      update((_current) => tabLabel);
   };

   return { subscribe, select, set };
};
const selectedTab = createSelectedTab();

export { selectedBookmarks, tabs, selectedTab };
