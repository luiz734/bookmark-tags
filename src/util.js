export const getAllTags = (bookmarks) => {
   console.log(bookmarks);
   const tags = new Set();

   bookmarks.map((b) => {
      b.tags.map((tag) => tags.add(tag));
   });

   const a = Array.from(tags);
   console.log(a);
   return a;
};
