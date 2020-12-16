$(document).ready(() => {
    gsap.from(['.img-profil',".hello-world", ".name-title", ".job-title", ".presentation", ".fill-contact"], { visibility:0 ,opacity: 0, duration: 2, y: 50});
    gsap.from([".sub-liner"], {visibility: 0, opacity: 0, duration: 3, y: 90})
});