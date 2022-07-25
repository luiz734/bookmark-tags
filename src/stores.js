import { writable } from "svelte/store";

export const bookmarks = writable([
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
      tags: ["mail", "google", "favorite"],
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
      tags: ["google", "storage"],
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
      tags: ["tutorial", "stack", "js", "regex"],
   },
]);
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
