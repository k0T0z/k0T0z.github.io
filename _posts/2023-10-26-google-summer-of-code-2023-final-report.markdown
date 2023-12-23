---
layout: post
title:  "Google Summer of Code 2023 Final Report"
date:   2023-10-26 12:00:00 +0200
---

<!-- You MUST NOT change the original link of this post which is https://k0t0z.github.io/posts/2023/GSoC_2023_final_evaluation_report.html -->

Contributor Name: Saif Kandil

GitHub: [k0T0z](https://github.com/k0T0z)

LinkedIn: [saifkandil02](https://www.linkedin.com/in/saifkandil02)

Organization: [The ENIGMA Team](https://summerofcode.withgoogle.com/programs/2023/organizations/the-enigma-team)

Organization GitHub: [enigma-dev](https://github.com/enigma-dev)

Project Description: [Steam Workshop SDK/Third Party Integration For ENIGMA](https://summerofcode.withgoogle.com/programs/2023/projects/kHDskccO)

Primary Mentor's GitHub: 
- [Robert Colton](https://github.com/RobertBColton)
- [Josh Ventura](https://github.com/JoshDreamland)
- [Russell Johnston](https://github.com/rpjohnst)
- [Patrick Greene](https://github.com/hpgDesigns)

Secondary Mentor's GitHub: 
- [Greg Williamson](https://github.com/fundies)

Repositories Worked On:
- [enigma-dev/enigma-dev](https://github.com/enigma-dev/enigma-dev)

Issues Worked On:
- [#1881](https://github.com/enigma-dev/enigma-dev/issues/1881)
- [#1951](https://github.com/enigma-dev/enigma-dev/issues/1951)
- [#2354](https://github.com/enigma-dev/enigma-dev/issues/2354)
- [#2339](https://github.com/enigma-dev/enigma-dev/issues/2339)
- [#2338](https://github.com/enigma-dev/enigma-dev/issues/2338)

# Project Goals

ENIGMA currently lacks third-party integration with various digital distribution platforms such
as Steam, Xbox, or Origin. First-class support for these services would make it easier for Indie
developers to publish ENIGMA-created games. Developers would like for it to be easier to
monetize their games and enable them to release bigger and better updates to their users.

# Completed Work

## Part 1: [#2343](https://github.com/enigma-dev/enigma-dev/pull/2343)

This part includes the following work:

- [Management API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Management).
- [General API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/General).
- [Overlay API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Overlay).
- [Stats and Achievements API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Stats-and-Achievements).
- Writing a new Async system for ENIGMA (Structure can be found in the appendix below).

## Part 2: [#2350](https://github.com/enigma-dev/enigma-dev/pull/2350)

This part includes the following work:

- [Leaderboards API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Leaderboards).
- Fixing ENIGMA's Json extension.
- [Social API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Social). This API is tested under `AST-Generation` branch, which contains the buffer work from previous GSoC 2022 project. Social API depends on that buffer work.
- Testing:
  - GTests and SOGs.
  - Extensions Stubs.
  - Steamworks Fake API (AKA Mocking).

# Final Project Structure

<span style='color:#800080; '>Steamworks</span>
<span style='color:#800080; '>├── gameclient</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>├── steambinder</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>├── SteamFake</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>└── sdk</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>    ├── public</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>    │   └── steam</span>    
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>    │       ├── *.h</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>    │       └── *.cpp</span>    
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>    │</span>    
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>    └── README.md</span>  
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>├── SteamvXXX</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>└── sdk</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>    ├── public</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>    │   └── steam</span>    
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>    │       └── *.h</span>    
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>    │</span>    
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>   <span style='color:#000080; '>    └── Readme.txt</span>    
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>│</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>├── .gitignore</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>├── steambinder.h</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>   <span style='color:#006400; '>└── steambinder.cpp</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>├── utils</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│   ├── *.h</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│   └── *.cpp</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>│</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>├── gameclient.h</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>├── gameclient.cpp</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>├── *.h</span>
<span style='color:#800080; '>│</span>   <span style='color:#800000; '>└── *.cpp</span>
<span style='color:#800080; '>│</span>
<span style='color:#800080; '>├── steamworks_demo</span>
<span style='color:#800080; '>│   ├── *</span>
<span style='color:#800080; '>│   └── demo.project.gmx</span>
<span style='color:#800080; '>│</span>
<span style='color:#800080; '>├── .gitignore</span>
<span style='color:#800080; '>├── About.ey</span>
<span style='color:#800080; '>├── implement.h</span>
<span style='color:#800080; '>├── include.h</span>
<span style='color:#800080; '>├── CMakelists.txt</span>
<span style='color:#800080; '>├── Makefile</span>
<span style='color:#800080; '>├── README.md</span>
<span style='color:#800080; '>├── *.svg</span>
<span style='color:#800080; '>├── steamworks.h</span>
<span style='color:#800080; '>├── steamworks.cpp</span>
<span style='color:#800080; '>├── *.h</span>
<span style='color:#800080; '>└── *.cpp</span>

# Work To Be Done

- [Lobbies API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Lobbies).
- [Cloud API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Cloud) (My only missed goal).
- [DLC API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/DLC).
- [UGC API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/UGC).
- [Inventory API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Inventory).
- [Networking API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Networking).
- [Input API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Input).
- [Utils API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Utils).
- Fixing the memory leak inside the Fake API. Check `Steamworks/gameclient/SteamFake/sdk/public/steam/fake_steam_api_internal.cpp`.
- Implementing a new draw function for drawing leaderboards.
- Getting an `AppId` and upload a game on Steam for testing.
- Cleaning up and organizing the new Async System to match Robert's needs.
- There is a bunch of TODOs in the [#2350](https://github.com/enigma-dev/enigma-dev/pull/2350)'s description that need to be done as well.
- Currently, all the documentation is in the code files, it should exists in the [docs/Wiki/Category:Function:ENIGMA](https://enigma-dev.org/docs/Wiki/Category:Function:ENIGMA) as well.
- Adding support for other platforms in the Steam Binder as it currently supports Ubuntu Linux only. Testing Steamworks extension on other Linux distros is the easier part. Windows requires MSVC support for ENIGMA which is a project on its own. Upgrading the engine's build system from GNU Make to CMake will make it more easier ([#2334](https://github.com/enigma-dev/enigma-dev/pull/2334)). Currently, ENIGMA is failing on macOS which means we can't test the Steamworks extension on it yet.
- Implement user functions related to [#2349](https://github.com/enigma-dev/enigma-dev/pull/2349).
- Work on LGM and RGM GUI with the Steamworks extension.
- currently, ENIGMA's asset array class doesn't support pointers, so maybe we need to look into that as well.

# List of Merged Patches

| Patch Link | Description |
| --- | --- |
| [#2335](https://github.com/enigma-dev/enigma-dev/pull/2335) (Unrelated) | Created 2 user functions for dealing with short JSONs and fixed [#2339](https://github.com/enigma-dev/enigma-dev/issues/2339). Actually, I need to look more into this later because I may need to redefine what is a short JSON. I found out that for example, consider this short JSON: `[ [ 1 , 2 ] , 2 ]`, what will be its JSON? It can be `{ " 0 " : { " 0 " : 1 , " 1 " : 2 }, " 1 " : 2}` or `[ { " 0 " : 1 , " 1 " : 2 } , 2 ]`. Two different outputs for the same input. This is a complete miss!!! |
| [#2340](https://github.com/enigma-dev/enigma-dev/pull/2340) (Unrelated) | This issue was becasue of a newer GCC version used. |
| [#2341](https://github.com/enigma-dev/enigma-dev/pull/2341) (Unrelated) | This issue was becasue of a newer GCC version used. |
| [#2352](https://github.com/enigma-dev/enigma-dev/pull/2352) (Related) | The `json_encode()` function was unimplemented. |
| [#2353](https://github.com/enigma-dev/enigma-dev/pull/2353) (Related) | In this one, I provided a fix for a weird issue that I explained here [GSoC '23 - Week 11 & 12: Divergence? or...](https://k0t0z.github.io/posts/2023/GSoC_2023_week_11_and_12_divergence_or.html#solving-seven-day-problem) and using `std::sstream` instead of `std::string` in my use case is better as recommended by [Josh](https://github.com/JoshDreamland). |
| [#2355](https://github.com/enigma-dev/enigma-dev/pull/2355) (Related) | This one is related to [#2354](https://github.com/enigma-dev/enigma-dev/issues/2354). I provided a fix for the issue related to Json extension. |
| [#2357](https://github.com/enigma-dev/enigma-dev/pull/2357) (Related) | Fixed another bug found in the Json extension. Overall, with this [#2358](https://github.com/enigma-dev/enigma-dev/pull/2358) merged, the Json extension is now fully functional. |
| [#2360](https://github.com/enigma-dev/enigma-dev/pull/2360) (Related) | In [#2335](https://github.com/enigma-dev/enigma-dev/pull/2335), I provided a fix for [#2339](https://github.com/enigma-dev/enigma-dev/issues/2339) but it was wrong solution. This patch fixes the issue with the right and perfect solution. |
| [#2297](https://github.com/enigma-dev/enigma-dev/pull/2297) (Unelated) | This is my first patch when I started working on ENIGMA. It's simple cleaning for dead files. |

`Note that related/unrelated means that the patch is related/unrelated to the Steam SDK integration project.`

# List of Unmerged Patches

| Patch Link | Description |
| --- | --- |
| [#2358](https://github.com/enigma-dev/enigma-dev/pull/2358) (Related) | The `json_encode()` function requires a recursive algorithm to handle nested JSONs. Solutions to this are theoretical till now. Currently, the function will print the ID of any nested JSON instead of printing the JSON itself. |
| [#2361](https://github.com/enigma-dev/enigma-dev/pull/2361) (Related) | The [Social API](https://github.com/YoYoGames/GMEXT-Steamworks/wiki/Social) requires the buffer work from the previous GSoC 2022 project as the current buffer work is completely broken. The [Data Buffers / Serialization](https://summerofcode.withgoogle.com/programs/2022/projects/BrXiUNA2) project is the one. This code is merged into `AST-Generation` branch so I had to test my Social API inside that branch. My both PRs in the Completed Work section are intended to be merged into `master` branch. After discussing with Dhruv (Original author of the buffer work), he suggested to split the buffer work into a separate PR and merge it into `master` branch. So, I created a new PR for the buffer work. |
| [#2337](https://github.com/enigma-dev/enigma-dev/pull/2337) (Unrelated) | Before getting familiar with `pacman`, I downloaded GTest and built it from source. I got only the `*.a` files with no `*.dll`s. ENIGMA links to `*.dll`s so the code crashes obviously. I provided my report for [rpjohnst](https://github.com/rpjohnst) and he suggested to use `pacman` as it downloads the `*.dll`s as well. The thing is using the `dll`, GTest will be linked dynamically. Also, using the `.a`, GTest will be linked statically. So that patch changes the way we link GTest which are two different approaches with pros and cons. I don't think this should be merged. |
| [#2334](https://github.com/enigma-dev/enigma-dev/pull/2334) (Unrelated) | This is related to [#2286](https://github.com/enigma-dev/enigma-dev/issues/2286). This is my PR for upgrading the build system from GNU Make to CMake. This was my Google Summer of
Code 2022 project before getting rejected. I intend to work on it after stabilizing the
Steamworks extension. |
| [#2333](https://github.com/enigma-dev/enigma-dev/pull/2333), [#2321](https://github.com/enigma-dev/enigma-dev/pull/2321), and [#2314](https://github.com/enigma-dev/enigma-dev/pull/2314) (All unrelated) | No longer needed PRs, these are just was for testing things out. |

# Related Patches List

| Patch Link | Description |
| --- | --- |
| [#2356](https://github.com/enigma-dev/enigma-dev/pull/2356) (Related) | There was a missing function that I requested from Robert and actually there was no
problem with not adding it because I can just use `instance_create()` and
set the `depth`. |
| [#2349](https://github.com/enigma-dev/enigma-dev/pull/2349) (Related) | This PR is for firing events from the Steamworks extension manually. The functions are
not implemented yet. These are just useful constants for the user to use. Also Robert
submitted this PR. Actually, this is a TODO that I mentioned in the work to be done. |

# Challenges

1. I started working on Windows on this project until I faced an ABI (Application Binary
Interface) problem. I explained this problem in my proposal and expected that I won't
face it but I did. I spent nearly 3-5 days trying to figure out where is the problem
until my mentor suggested building the same code using GCC and MSVC. As expected the
code worked well on MSVC but it gives SEGMENTATION FAULT on GCC. I switched to Linux after this problem.

2. Implementing a new Async system for ENIGMA. As the old Async system is not thread safe. [Robert](https://github.com/RobertBColton) helped with implementing the new one.

3. Solving CI problem by 2 steps:
    1. Creating the Steamworks Fake API. There are 2 approaches when creating the Fake API:
        1. Linking the libsteam_api.so statically in the `Makefile` file.
        2. Linking a Fake API (AKA Mocking) statically in the `Makefile` file
        and load the real `libsteam_api.so` dynamically at runtime.

    I started with the first approach until I realized the CI problem. The CI needs to
    know which API (Fake/Real API) to link statically. We want to link the Fake API
    when running tests (GTests and SOGs (Single Object Games)) but at the same time
    we want to link the Real API when running a real game. There is only one solution
    for this problem which is Sending a flag when running tests to indicate that we are running tests and we need to link the Fake API. When running from the IDE, this flag won't be sent so we will link the Real API.

    Instead, [fundies](https://github.com/fundies) suggested the second approach. This approach requires adding another layer between the `Steamworks SDK` and `Game Client` layers. I will call this layer `Steam Binder`.
    
    2. Creating Stubs for the `Steamworks` and `DataStructures` extensions.

4. Implementing the Steamworks Fake API. I had to dig deeper into Steamworks official headers to understand how the API works and then mock main interfaces.

# [Project Demo On Youtube](https://youtu.be/EfhD1yMTIXk)

# Actknowledgement

الحَمْدُ لِله دائما وأبدا

First things first, Thanks to everyone who has contributed to the success of my Google Summer of Code 2023 project. This journey would not have been possible without the support, guidance, and collaboration of many individuals and organizations.

First and foremost, I would like to extend my deepest appreciation to Robert, Josh, Russell (rpjohnst), Patrick (Hugar), and Greg (fundies), my mentors throughout this program. Their expertise, patience, and continuous guidance have been invaluable. I have learned immeasurable skills and insights under their mentorship.

Thank you.

# Appendix

## Async System's Structure

{% highlight cpp %}
// PFmain.cpp

#include "Universal_System/Extensions/Steamworks/steamworks.h"

namespace enigma {

    std::queue&lt;std::map&lt;std::string, variant&gt;&gt; posted_async_events;

    std::mutex posted_async_events_mutex;

    void fireEventsFromQueue() {
        // Acquire lock and release it when out of scope of fireEventsFromQueue().
        std::lock_guard&lt;std::mutex&gt; guard(posted_async_events_mutex);
        while (!posted_async_events.empty()) {
            
            ...
        
            enigma::fireSteamworksEvent();
        }
    }
    
    int enigma_main(int argc, char** argv) {
        enigma_user::async_load = enigma_user::ds_map_create();

        ...

        while (!game_isending) {

        ...
            
        fireEventsFromQueue(&extension_steamworks_mutex);

        ...

        }
        
        ...
    }
    
}

namespace enigma_user {

    int async_load;
    
}
{% endhighlight %}

{% highlight cpp %}
// PFmain.h

namespace enigma {

    extern std::queue&lt;std::map&lt;std::string, variant&gt;&gt; posted_async_events;

    extern std::mutex posted_async_events_mutex;

    void fireEventsFromQueue();

}

namespace enigma_user {

    extern int async_load;

}
{% endhighlight %}
