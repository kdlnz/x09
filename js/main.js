// Main JavaScript for x09.dev portfolio interactive elements
// Mobile navigation toggle
const mobileNavToggle = document.getElementById('mobileNavToggle');
const navLinks = document.getElementById('navLinks');

mobileNavToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileNavToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    mobileNavToggle.textContent = '☰';
  });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('nav-scrolled');
  } else {
    navbar.classList.remove('nav-scrolled');
  }
});
