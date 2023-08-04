const postId = 7;

title = posts[postId].title;

postFileName = posts[postId].fileName;

postTitle = posts[postId].postTitle;

previousPostFileName = posts[postId - 1].fileName;
nextPostFileName = posts[postId + 1].fileName;

document.title = title;

document.getElementById("post-title").innerHTML = postTitle;

if (previousPostFileName !== null)
    document.getElementById("prev-post").href = `${previousPostFileName}.html`;

document.getElementById("prev-post").textContent = "previous post";

if (nextPostFileName !== null)
    document.getElementById("next-post").href = `${nextPostFileName}.html`;

document.getElementById("next-post").textContent = "next post";

document.getElementById("u-url-id").href = `${postFileName}.html`;

document.getElementById("embed-title").innerHTML = postTitle;

document.getElementById("embed-author").textContent = postAuthor;

document.getElementById("post-link").href = `https://k0T0z.github.io/posts/${postFileName}.html`;
document.getElementById("post-link").textContent = `https://k0T0z.github.io/posts/${postFileName}.html`;

// Setting the global ``filePath`` variable before fetching dates for the current post.
filePath = `posts/${posts[postId].year}/${postFileName}.html`;
getPostLastCommitDate(filePath);
getPostFirstCommitDate(filePath);

