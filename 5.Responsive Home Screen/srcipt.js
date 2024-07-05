// JavaScript to toggle navbar collapse visibility
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarNav = document.querySelector('.navbar-nav');

navbarToggler.addEventListener('click', function() {
    navbarNav.classList.toggle('active');
});
