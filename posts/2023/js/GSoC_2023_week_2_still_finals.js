const postId = 4;

const isPreviousPostAvailable = (postId !== null && postId + 1 > 1);
const isNextPostAvailable = (postId !== null && ((postId + 1) < posts.length));

// Stores the file name of previous post on GitHub repo to be easily reached using ``previous post`` button.
const previousPostFileName = isPreviousPostAvailable ? posts[postId - 1].fileName : null;

// Stores the file name of next post on GitHub repo to be easily reached using ``next post`` button.
const nextPostFileName = isNextPostAvailable ? posts[postId + 1].fileName : null;

