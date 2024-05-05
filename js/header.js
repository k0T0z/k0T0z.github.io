const mainContent = document.getElementById("main-content");
mainContent.insertAdjacentHTML("beforebegin",
    `
<header id="main-header" class="site-header" role="banner">
    <div class="wrapper">
        <a id="main-header-avatar" class="site-avatar">
            <img id="main-avatar" alt="k0T0z avatar" />
        </a>

        <div class="site-info">
          <h1 class="site-name"><a id="home-page">k0T0z</a></h1>
          <p class="site-description">Just a place for me to dump my thoughts</p>
        </div>

        <nav>
          <a id="about-page" href="/about">About</a>
        </nav>
    </div>
</header>
    `
);
