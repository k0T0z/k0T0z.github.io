// const fetch = require('node-fetch');

// Stores the <title></title> tag content.
let title = null;

// Stores the file name of the post on GitHub repo. This is used to fetch data related to that file directly using GitHub API.
let postFileName = null;

// Stores the author name of the post.
let postAuthor = "Saif Kandil";

// Stores the <h1 id="post-title"></h1> content. This is can be HTML string.
let postTitle = null;

// Stores the file name of previous post on GitHub repo to be easily reached using ``previous post`` button.
let previousPostFileName = null;

// Stores the file name of next post on GitHub repo to be easily reached using ``next post`` button.
let nextPostFileName = null;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

