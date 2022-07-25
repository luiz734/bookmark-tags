import { writable } from "svelte/store";

export const bookmarks = writable([
   {
      icon: "輸",
      label: "Youtubesssss",
      link: "https://www.youtube.com/",
      tags: ["social", "favorite", "sadadasdasda", "hey"],
   },
   {
      icon: "輸",
      label: "Google",
      link: "google.com",
      tags: ["social", "favorite"],
   },
   {
      icon: "輸",
      label: "ThePirateBay",
      link: "facebook.com",
      tags: [
         // "social",
         // "favorite",
         "windows",
         // "1social",
         // "1favorite",
         // "1windows",
         // "ssocial",
         // "fsavorite",
         // "windosws",
      ],
   },
   {
      icon: "輸",
      label: "Wikipedia",
      link: "wikipedia.org",
      tags: ["social", "favorite"],
   },
   {
      icon: "輸",
      label: "Github",
      link: "github.com",
      tags: ["social", "favorite", "other"],
   },
   {
      icon: "輸",
      label: "1Youtube",
      link: "https://www.youtube.com/",
      tags: ["social", "favorite", "sadadasdasdas"],
   },
   {
      icon: "輸",
      label: "1Google",
      link: "google.com",
      tags: ["social", "favorite"],
   },
   {
      icon: "輸",
      label: "1Facebook",
      link: "facebook.com",
      tags: ["social", "favorite", "windows"],
   },
   {
      icon: "輸",
      label: "1Wikipedia",
      link: "wikipedia.org",
      tags: ["social", "favorite"],
   },
   {
      icon: "輸",
      label: "1Github",
      link: "github.com",
      tags: ["social", "favorite", "other"],
   },
]);
export const selectedBookmarks = writable([]);

export const tags = writable([]);
export const selectedTags = writable(["favorite"]);

export const userConfig = writable({
   tagColors: [
      "#3a3a3a",
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
