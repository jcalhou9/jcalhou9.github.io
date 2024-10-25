let active = window.location.pathname;
if (active === '/') {
    active = '/index.html';
}

const navLinks = document.querySelectorAll('.nav-bar li a');

navLinks.forEach((link) => {
    const linkPage = link.pathname;
    if (linkPage === active) {
        link.parentElement.classList.add('currentpage');
    }
});