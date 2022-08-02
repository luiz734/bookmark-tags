import { writable } from "svelte/store";

const data = [
   {
      icon: "輸",
      label: "Youtubes",
      url: "https://www.youtube.com/",
      tags: ["favorite"],
   },
   {
      icon: "",
      label: "WhatsApp",
      url: "https://sistemas2.utfpr.edu.br/dpls/sistema/aluno01/mpmenu.inicio/",
      tags: ["social", "favorite"],
   },
   {
      icon: "龎",
      label: "DAINF",
      url: "https://moodle.dainf.ct.utfpr.edu.br/",
      tags: ["UTFPR"],
   },
   {
      icon: "",
      label: "Gmail",
      url: "https://mail.google.com/mail/u/1/#inbox=https://www.wikipedia.org/",
      tags: ["favorite"],
   },
   {
      icon: "",
      label: "Github",
      url: "https://www.github.com/",
      tags: ["social", "coding", "favorite"],
   },
   {
      icon: "",
      label: "Drive",
      url: "https://drive.google.com/drive/u/0/my-drive/",
      tags: ["storage"],
   },
   {
      icon: "",
      label: "Outlook",
      url: "https://outlook.live.com/mail/0/",
      tags: ["mail"],
   },
   {
      icon: "",
      label: "Jeyllyfin",
      url: "http://localhost:8096/",
      tags: ["media", "favorite"],
   },
   {
      icon: "ﮊ",
      label: "ThePirateBay",
      url: "https://thepiratebay.org/index.html/",
      tags: ["download"],
   },
   {
      icon: "~",
      label: "",
      url: "https://stackoverflow.com/questions/432493/how-do-you-access-the-matched-groups-in-a-javascript-regular-expression/",
      tags: ["tutorial", "regex"],
   },
   {
      icon: "~",
      label: "",
      url: "https://stackoverflow.com/questions/432493/how-do-you-access-the-matched-groups-in-a-javascript-regular-expression/",
      tags: ["favorite", "regex"],
   },

   {
      icon: "~",
      label: "",
      url: "https://stackoverflow.com/questions/432493/how-do-you-access-the-matched-groups-in-a-javascript-regular-expression/",
      tags: ["favorite", "regex"],
   },
   {
      icon: "~",
      label: "",
      url: "https://stackoverflow.com/questions/432493/how-do-you-access-the-matched-groups-in-a-javascript-regular-expression/",
      tags: ["favorite", "regex"],
   },

   {
      icon: "~",
      label: "",
      url: "https://stackoverflow.com/questions/432493/how-do-you-access-the-matched-groups-in-a-javascript-regular-expression/",
      tags: ["favorite", "regex"],
   },
   {
      icon: "~",
      label: "",
      url: "https://stackoverflow.com/questions/432493/how-do-you-access-the-matched-groups-in-a-javascript-regular-expression/",
      tags: ["favorite", "regex"],
   },
   {
      icon: "~",
      label: "",
      url: "https://stackoverflow.com/questions/432493/how-do-you-access-the-matched-groups-in-a-javascript-regular-expression/",
      tags: ["favorite", "regex"],
   },
];

function createBookmarks() {
   const { subscribe, update } = writable(data);

   const insert = (icon, label, url, tags) => {
      update((current) => {
         return [
            ...current,
            {
               icon,
               label,
               url,
               tags,
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
   };
}
const bookmarks = createBookmarks();

function createSelectedBookmarks() {
   const { subscribe, update, set } = writable([]);

   const insert = (icon, label, url, tags) => {
      update((current) => {
         return [
            ...current,
            {
               icon,
               label,
               url,
               tags,
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
export { bookmarks, selectedBookmarks };
