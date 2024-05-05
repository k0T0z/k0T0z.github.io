const title = 'About';

document.title = title;

/*
    Setting attributes for the elements in the header.
*/
document.getElementById("main-header-avatar").href = "../index.html";
document.getElementById("main-avatar").setAttribute("src", "../assets/main-logo.jpeg");
document.getElementById("home-page").href = "../index.html";

document.getElementById("about-page").style.display = "none";

/*
    Setting attributes for the elements in the footer.
*/
document.getElementById("u-url-id").href = "index.html";

