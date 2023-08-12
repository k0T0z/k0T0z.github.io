// Stores the <title></title> tag content.
const title = "k0T0z";

document.title = title;

// Stores how many posts to show per page.
const postsPerPage = 10;

// Stores the current page number.
let currentPage = 1;

// Stores fetched dates so that no need for fetching again.
const postsDatesCache = {};

// For the current page: Fetch the dates for the posts and display them.
async function getPostsDates(startIndex, endIndex, page) {
    for (let i = startIndex; i >= endIndex; i--) {
        const post = posts[i];
        filePath = `posts/${post.year}/${post.fileName}.html`;

        // If the date is already fetched, then no need to fetch again.
        if (postsDatesCache[post.id]) {
            document.getElementById(`post-${i}`).textContent = postsDatesCache[post.id];
            continue;
        }

        let json = null;

        try {
            json = await fetchFromGiHubAPI(filePath); // Get JSON response from GitHub API.
        } catch (error) {
            console.error(error.message);
            document.getElementById(`post-${i}`).textContent = "Fetching date failed :(";
            continue;
        }

        const addedOnDateString = json[(json.length) - 1].commit.author.date; // Get first commit date.
        const postFirstCommitDate = new Date(addedOnDateString);

        console.log(`First commit date for ${filePath}: ${postFirstCommitDate}`);

        document.getElementById(`post-${i}`).textContent = postFirstCommitDate.toLocaleDateString("en-US", options);
        postsDatesCache[post.id] = postFirstCommitDate.toLocaleDateString("en-US", options);
    }
}

// Displays the posts for the given page number.
function displayPosts(page) {
    const postsContainer = document.getElementById("posts-container");
    postsContainer.innerHTML = "";

    const totalPosts = posts.length;
    const startIndex = totalPosts - ((page - 1) * postsPerPage) - 1;
    const endIndex = Math.max(startIndex - postsPerPage + 1, 0);

    for (let i = startIndex; i >= endIndex; i--) {
        const post = posts[i];
        const postElement = document.createElement("li");
        postElement.innerHTML = `
          <span id="post-${i}" class="post-meta"><span class="spinner"></span><span class="post-meta-placeholder">Fetching date...</span></span>
          <h3>
            <a class="post-link" href="posts/${post.year}/${post.fileName}.html">
              ${post.postTitle}
            </a>
          </h3>
          <hr class="separator" />
        `;
        postsContainer.appendChild(postElement);
    }

    // Fetch the dates for the posts in the current page.
    getPostsDates(startIndex, endIndex, currentPage);
}

// Updates the pagination buttons.
function updatePaginationButtons() {
    const olderPostsButton = document.getElementById("older-posts-button");
    const newerPostsButton = document.getElementById("newer-posts-button");

    olderPostsButton.disabled = currentPage === Math.ceil(posts.length / postsPerPage);
    newerPostsButton.disabled = currentPage === 1;
}

// When switching pages, the posts are displayed and the pagination buttons are updated.
function olderPosts() {
    if (currentPage >= Math.ceil(posts.length / postsPerPage)) return;

    currentPage++;
    displayPosts(currentPage);
    updatePaginationButtons();
}

function newerPosts() {
    if (currentPage <= 1) return;

    currentPage--;
    displayPosts(currentPage);
    updatePaginationButtons();
}

/*
    Setting attributes for the elements in the header.
*/
document.getElementById("main-header-avatar").href = "index.html";
document.getElementById("main-avatar").setAttribute("src", "assets/main-logo.jpeg");
document.getElementById("home-page").href = "index.html";
document.getElementById("about-page").href = "about/index.html";

/*
    Setting attributes for the elements in the footer.
*/
document.getElementById("u-url-id").href = "index.html";

// Add event listeners to the pagination buttons.
document.getElementById("older-posts-button").addEventListener("click", olderPosts);
document.getElementById("newer-posts-button").addEventListener("click", newerPosts);

// Initial display.
displayPosts(currentPage);
updatePaginationButtons();

