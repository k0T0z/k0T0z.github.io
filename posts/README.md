# Assumptions

# Adding a new post

  - Add a new Javascript file inside ``posts/${year}/js/`` and paste a copied old Javascript file content from 
    the same directory then modify the id or set it to ``null``.
  - Add a new HTML file inside ``posts/${year}/`` directory and paste a copied old HTML post file content from 
    the same directory then modify the script tag to point to the new Javascript file and delete the old content.
  - Add post details inside ``js/posts.js`` Javascript file.

# DON'Ts

  - DON'T rename any post HTML file because this will reset ``post created on`` date to the current date.
  - DON'T use symbols like ``&`` in the file names as it causes errors when fetching from GitHub API.
