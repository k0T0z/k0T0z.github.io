# Assumptions

  - File name inside ``posts/${year}/`` and ``posts/${year}/js/`` must match.
  - Any new post added, you need to add a Javascript file with the same name inside ``posts/${year}/js/`` and modify ``js/posts.js``.

# Adding a new post

  - Add a Javascript file inside ``posts/${year}/js/`` directory and name it just like your new HTML file name.
  - Add post details inside ``js/posts.js`` Javascript file.
  - Modify the ``script`` tags inside HTML files to point to the right Javascript file.
  - Modify ``previousPostFileName`` and ``nextPostFileName`` in other posts to point to the right HTML file.

# DON'Ts

  - DON'T rename any post HTML file because this will reset ``post created on`` date to the current date.
  - DON'T use symbols like ``&`` in the file names as it causes errors when fetching from GitHub API.
