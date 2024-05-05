// const fetch = require('node-fetch');

// Fetches the date in which this resume is updated.
async function getResumeLastCommitDate(filePath) {
    let json = null;

    try {
        json = await fetchFromGiHubAPI(filePath); // Get JSON response from GitHub API.
    } catch (error) {
        console.error(error.message);
        document.getElementById("resume-updated-on-date").textContent = "Fetching date failed :(";
        return;
    }

    const dateString = json[0].commit.author.date; // Get last commit date.
    const resumeLastCommitDate = new Date(dateString);

    console.log(`Last commit date for ${filePath}: ${resumeLastCommitDate}`);

    document.getElementById("resume-updated-on-date").textContent = resumeLastCommitDate.toLocaleDateString('en-US', options);
}

// Setting the ``filePath`` variable before fetching dates for the current resume.
filePath = 'assets/my-resume.pdf';
getResumeLastCommitDate(filePath);

