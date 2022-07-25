export const getAllTags = (bookmarks) => {
   const tags = new Set();

   bookmarks.map((b) => {
      b.tags.map((tag) => tags.add(tag));
   });

   const a = Array.from(tags);
   return a;
};

export const getBooksMarksWithTags = (bookmarks, tags) => {
   const filtredBookmarks = new Set();
   bookmarks.filter((b) => {
      tags.map((t) => {
         if (b.tags.includes(t)) {
            filtredBookmarks.add(b);
         }
      });
   });

   return Array.from(filtredBookmarks);
};
