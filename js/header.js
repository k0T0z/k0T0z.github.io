const mainContent = document.getElementById("main-content");
mainContent.insertAdjacentHTML("beforebegin",
    `
<header id="main-header" class="site-header" role="banner">
    <div class="wrapper">
        <div id="site-header-h-card">
            <div id="main-avatar-h-card">
                <a id="main-header-avatar">
                    <img id="main-avatar" alt="k0T0z avatar" />
                </a>
                <div id="site-header-v-card">
                    <a id="home-page" class="site-title" rel="author">k0T0z</a>
                    <span id="what-is-this">
                        Just a place for me to dump my thoughts.
                    </span>
                </div>
            </div>
            <a id="about-page" class="site-title">About</a>
        </div>
    </div>
</header>
    `
);
