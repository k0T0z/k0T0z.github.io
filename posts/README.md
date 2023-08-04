# Assumptions

  - File name inside ``posts/`` and ``posts/js/`` must match.
  - Any new post added, you need to add a Javascript file with the same name inside ``posts/js/`` and modify ``js/posts.js``.


# Adding a new post

  - [If needed] Add a Javascript file inside ``posts/js/`` directory and name it just like your new html file name.
  - Add post details inside ``js/posts.js`` Javascript file.
  - Modify the ``script`` tags inside html files to point to the right Javascript file if needed.

# DON'Ts

  - DON'T rename any post html file because this will reset ``post created on`` date to the current date.
  - DON'T use symbols like ``&`` in the file names as it causes errors when fetching from GitHub API.
