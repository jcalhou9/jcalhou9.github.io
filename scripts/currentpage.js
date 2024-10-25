const active = window.location.pathname;
const navLinks = document.querySelectorAll('.nav-bar li a');
navLinks.forEach((link) => {
    if (link.href.includes(`${active}`)) {
        link.parentElement.classList.add('currentpage');
    }
});