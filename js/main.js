// Navbar — add background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
const menuBtn    = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const iconMenu   = document.getElementById('iconMenu');
const iconX      = document.getElementById('iconX');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  iconMenu.style.display = menuOpen ? 'none'  : 'block';
  iconX.style.display    = menuOpen ? 'block' : 'none';
});

function closeMobileMenu() {
  menuOpen = false;
  mobileMenu.classList.remove('open');
  iconMenu.style.display = 'block';
  iconX.style.display    = 'none';
}
