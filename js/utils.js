// My GitHub username.
const owner = 'k0T0z';

// My GitHub repository name.
const repo = 'k0T0z.github.io';

// Branch name.
const branch = 'master-published';

// Date format for displaying dates on the website.
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Global variable for storing file path on the GitHub repository.
let filePath = null;

// Fetches commits data from GitHub API.
async function fetchFromGiHubAPI(filePath) {
    let response = null;

    try {
        const url = `https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}&sha=${branch}`;
        response = await fetch(url);
    }
    catch (error) {
        throw new Error(error.message);
    }

    if (!response.ok) {
        throw new Error(`Network response was not OK. Status code: ${response.status}`);
    }

    let json = null;

    try {
        json = await response.json();
    } catch (error) {
        throw new Error(error.message);
    }

    if (json === null) {
        throw new Error("JSON response is null.");
    }

    if (json.length === 0) {
        throw new Error("No commits found.");
    }

    return json;
}
