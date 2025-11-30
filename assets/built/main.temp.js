[37m$[0m[37m([0m[35mfunction[0m[37m [0m[37m([0m[37m)[0m[37m [0m[37m{[0m
[37m    [0m[37m'[0m[32muse strict[0m[37m'[0m[37m;[0m
[37m    [0m[37mfeatured[0m[37m()[0m[37m;[0m
[37m    [0m[37mpagination[0m[37m([0m[38;5;9mfalse[0m[37m)[0m[37m;[0m
[37m    [0m[37mtocToggle[0m[37m()[0m[37m;[0m
[37m}[0m[37m)[0m[37m;[0m

[35mfunction[0m[37m [0m[34mfeatured[0m[37m([0m[37m)[0m[37m [0m[37m{[0m
[37m    [0m[37m'[0m[32muse strict[0m[37m'[0m[37m;[0m
[37m    [0m[37m$[0m[37m([0m[37m'[0m[32m.featured-feed[0m[37m'[0m[37m)[0m[37m.[0m[37mowlCarousel[0m[37m([0m[37m{[0m
[37m        [0m[32mdots[0m[38;5;9m:[0m[37m [0m[38;5;9mfalse[0m[37m,[0m
[37m        [0m[32mmargin[0m[38;5;9m:[0m[37m [0m[38;5;9m30[0m[37m,[0m
[37m        [0m[32mnav[0m[38;5;9m:[0m[37m [0m[38;5;9mtrue[0m[37m,[0m
[37m        [0m[32mnavText[0m[38;5;9m:[0m[37m [0m[37m[[0m
[37m            [0m[37m'[0m[32m<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="icon"><path d="M20.547 22.107L14.44 16l6.107-6.12L18.667 8l-8 8 8 8 1.88-1.893z"></path></svg>[0m[37m'[0m[37m,[0m
[37m            [0m[37m'[0m[32m<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="icon"><path d="M11.453 22.107L17.56 16l-6.107-6.12L13.333 8l8 8-8 8-1.88-1.893z"></path></svg>[0m[37m'[0m[37m,[0m
[37m        [0m[37m][0m[37m,[0m
[37m        [0m[32mresponsive[0m[38;5;9m:[0m[37m [0m[37m{[0m
[37m            [0m[38;5;9m0[0m[37m:[0m[37m [0m[37m{[0m
[37m                [0m[32mitems[0m[38;5;9m:[0m[37m [0m[38;5;9m1[0m[37m,[0m
[37m            [0m[37m}[0m[37m,[0m
[37m            [0m[38;5;9m768[0m[37m:[0m[37m [0m[37m{[0m
[37m                [0m[32mitems[0m[38;5;9m:[0m[37m [0m[38;5;9m2[0m[37m,[0m
[37m            [0m[37m}[0m[37m,[0m
[37m            [0m[38;5;9m992[0m[37m:[0m[37m [0m[37m{[0m
[37m                [0m[32mitems[0m[38;5;9m:[0m[37m [0m[38;5;9m3[0m[37m,[0m
[37m            [0m[37m}[0m[37m,[0m
[37m        [0m[37m}[0m[37m,[0m
[37m    [0m[37m}[0m[37m)[0m[37m;[0m
[37m}[0m

[35mfunction[0m[37m [0m[34mtocToggle[0m[37m([0m[37m)[0m[37m [0m[37m{[0m
[37m    [0m[37m'[0m[32muse strict[0m[37m'[0m[37m;[0m
[37m    [0m[35mvar[0m[37m [0m[37m$tocToggle[0m[37m [0m[37m=[0m[37m [0m[37m$[0m[37m([0m[37m'[0m[32m.gh-toc-toggle[0m[37m'[0m[37m)[0m[37m;[0m
[37m    [0m[35mvar[0m[37m [0m[37m$tocContainer[0m[37m [0m[37m=[0m[37m [0m[37m$[0m[37m([0m[37m'[0m[32m.gh-toc-container[0m[37m'[0m[37m)[0m[37m;[0m

[37m    [0m[37m$tocToggle[0m[37m.[0m[37mon[0m[37m([0m[37m'[0m[32mclick[0m[37m'[0m[37m, [0m[35mfunction[0m[37m([0m[37m)[0m[37m [0m[37m{[0m
[37m        [0m[37m$tocContainer[0m[37m.[0m[37mtoggleClass[0m[37m([0m[37m'[0m[32mis-open[0m[37m'[0m[37m)[0m[37m;[0m
[37m    [0m[37m}[0m[37m)[0m[37m;[0m

[37m    [0m[38;5;8m//[0m[38;5;8m Close TOC when clicking outside[0m
[37m    [0m[37m$[0m[37m([0m[37mdocument[0m[37m)[0m[37m.[0m[37mon[0m[37m([0m[37m'[0m[32mclick[0m[37m'[0m[37m, [0m[35mfunction[0m[37m([0m[37me[0m[37m)[0m[37m [0m[37m{[0m
[37m        [0m[35mif[0m[37m [0m[37m([0m[37m![0m[37m$[0m[37m([0m[37me[0m[37m.[0m[37mtarget[0m[37m)[0m[37m.[0m[37mclosest[0m[37m([0m[37m'[0m[32m.gh-toc-container, .gh-toc-toggle[0m[37m'[0m[37m)[0m[37m.[0m[37mlength[0m[37m)[0m[37m [0m[37m{[0m
[37m            [0m[37m$tocContainer[0m[37m.[0m[37mremoveClass[0m[37m([0m[37m'[0m[32mis-open[0m[37m'[0m[37m)[0m[37m;[0m
[37m        [0m[37m}[0m
[37m    [0m[37m}[0m[37m)[0m[37m;[0m
[37m}[0m
