/* ============================================================
   HOW TO WRITE A NEW POST
   ------------------------------------------------------------
   1. Copy one of the objects below (the { ... } block), including
      the curly braces and the comma after it.
   2. Paste your copy right under the line that says
      "NEW POSTS GO HERE" (newest posts go at the top).
   3. Fill in:
        slug  -> the web address for this post, lowercase,
                 words separated by hyphens, no spaces.
                 e.g. "on-silence" becomes yoursite.com/post.html?on-silence
        title -> the title as you want it to appear
        date  -> "YYYY-MM-DD" format, e.g. "2026-07-05"
        content -> your writing. Leave a blank line between
                 paragraphs. That's it.
   4. Save the file. That's the whole process — no other file
      needs to change.

   A little formatting is available inside `content`, entirely
   optional:
     > A line starting with "> " becomes a quoted line.
     ## A line starting with "## " becomes a subheading.
     *word* becomes italic. **word** becomes bold.
   ============================================================ */

const POSTS = [

  // ---------- NEW POSTS GO HERE ----------

  {
    slug: "on-starting-empty",
    title: "On Starting Empty",
    date: "2026-07-05",
    content: `
This is your first post. You can edit or delete it — it's only here to show you how the pieces fit together.

Everything on this page lives in one file: posts.js. There is no database, no admin panel, no login screen. When you want to publish something new, you open this file, copy one entry, and write.

> A blank page is not empty. It is just quiet.

That's really the whole idea behind this site. One column, one voice, nothing competing for attention. Delete this post whenever you're ready to replace it with your own first thought.
`
  },

];
