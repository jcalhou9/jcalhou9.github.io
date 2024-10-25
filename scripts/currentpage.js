const active = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-bar li a');
navLinks.forEach((link) => {
    if (active === '/' && link.href.includes('index.html')) {
        link.parentElement.classList.add('currentpage');
    } else if (link.href.includes(`${active}`)) {
        link.parentElement.classList.add('currentpage');
    }
});