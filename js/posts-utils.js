// const fetch = require('node-fetch');

// Fetches the date in which this post is created.
async function getPostFirstCommitDate(filePath) {
    let json = null;

    try {
        json = await fetchFromGiHubAPI(filePath); // Get JSON response from GitHub API.
    } catch (error) {
        console.error(error.message);

        // Set an error message to indicate that the date is not fetched.
        document.getElementById("post-created-on-date").textContent = "Fetching date failed :(";
        document.getElementById("post-added-on-date").textContent = "Fetching date failed :(";
        document.getElementById("embed-created-on-date").textContent = "Fetching date failed :(";
        return;
    }

    const addedOnDateString = json[(json.length) - 1].commit.author.date; // Get first commit date
    const postFirstCommitDate = new Date(addedOnDateString);

    console.log(`First commit date for ${filePath}: ${postFirstCommitDate}`);

    document.getElementById("post-created-on-date").textContent = postFirstCommitDate.toLocaleDateString('en-US', options);
    document.getElementById("post-added-on-date").textContent = postFirstCommitDate.toLocaleDateString('en-US', options);
    document.getElementById("embed-created-on-date").textContent = postFirstCommitDate.toLocaleDateString('en-US', options);
}

// Fetches the date in which this post is updated.
async function getPostLastCommitDate(filePath) {
    let json = null;

    try {
        json = await fetchFromGiHubAPI(filePath); // Get JSON response from GitHub API.
    } catch (error) {
        console.error(error.message);

        // Set an error message to indicate that the date is not fetched.
        document.getElementById("post-updated-on-date").textContent = "Fetching date failed :(";
        return;
    }

    const updatedOnDateString = json[0].commit.author.date; // Get last commit date
    const postLastCommitDate = new Date(updatedOnDateString);

    console.log(`Last commit date for ${filePath}: ${postLastCommitDate}`);

    document.getElementById("post-updated-on-date").textContent = postLastCommitDate.toLocaleDateString('en-US', options);
}

/*
    Setting attributes for the elements in the header.
*/
document.getElementById("main-header-avatar").href = "../../index.html";
document.getElementById("main-avatar").setAttribute("src", "../../assets/main-logo.jpeg");
document.getElementById("home-page").href = "../../index.html";
document.getElementById("about-page").href = "../../about/index.html";

const postMainContent = document.getElementById("post-main-content");
postMainContent.insertAdjacentHTML("afterbegin",
    `
<header class="post-header">
<h1 id="post-title" class="post-title p-name" itemprop="name headline"></h1>
<span class="post-meta">
    <time id="post-created-on-date" class="dt-published" itemprop="datePublished">
        <span class="spinner"></span><span class="post-meta-placeholder">Fetching date...</span>
    </time>
</span>
</header>
    `
);

// Stores the <title></title> tag content.
const title = posts[postId].title;

// Stores the file name of the post on GitHub repo. This is used to fetch data related to that file directly using GitHub API.
const postFileName = posts[postId].fileName;

// Stores the author name of the post.
const postAuthor = "Saif Kandil";

// Stores the <h1 id="post-title"></h1> content. This is can be HTML string.
const postTitle = posts[postId].postTitle;

document.title = title;

document.getElementById("post-title").innerHTML = postTitle;

postMainContent.insertAdjacentHTML("afterend",
    `
<h3>
    <span>Post manual update on: <span id="post-updated-on-date"><span class="spinner"></span></span></span>
</h3>
<h3>
    <span>Post added on: <span id="post-added-on-date"><span class="spinner"></span></span></span>
</h3>
<h2>
    <a href="#main-header">Back to top &uarr;</a>
</h2>
<h2>
    <a id="prev-post">previous post</a>
    <span class="list-separator">|</span>
    <a id="next-post">next post</a>
</h2>
<div class="embed">
    <span id="embed-title"></span>
    <span id="embed-author"></span>
    <span id="embed-created-on-date">
        <span class="spinner"></span><span class="embed-created-on-date-placeholder">Fetching date...</span>
    </span>
    <span><a id="post-link"></a></span>
</div>
    `
);

if (previousPostFileName !== null)
    document.getElementById("prev-post").href = `${previousPostFileName}.html`;

document.getElementById("prev-post").textContent = "previous post";

if (nextPostFileName !== null)
    document.getElementById("next-post").href = `${nextPostFileName}.html`;

document.getElementById("next-post").textContent = "next post";

document.getElementById("u-url-id").href = `${postFileName}.html`;

document.getElementById("embed-title").innerHTML = postTitle;

document.getElementById("embed-author").textContent = postAuthor;

document.getElementById("post-link").href = `https://k0T0z.github.io/posts/${posts[postId].year}/${postFileName}.html`;
document.getElementById("post-link").textContent = `https://k0T0z.github.io/posts/${posts[postId].year}/${postFileName}.html`;

// Setting the global ``filePath`` variable before fetching dates for the current post.
filePath = `posts/${posts[postId].year}/${postFileName}.html`;
getPostLastCommitDate(filePath);
getPostFirstCommitDate(filePath);

// This is the path to the arrow that is used to highlight the headers.
const highlightHeadersArrowPath = "../../assets/arrow-outward.svg";

// Add the arrow to all headers with the class "permalink-headline-arrow".
const highlightHeadersArrowElements = document.getElementsByClassName("permalink-headline-arrow");
for (var i = 0; i < highlightHeadersArrowElements.length; i++) {
    highlightHeadersArrowElements[i].innerHTML =
        `
    <img src="${highlightHeadersArrowPath}" alt="Arrow Outward" />
        `
}

