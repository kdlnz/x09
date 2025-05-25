// JavaScript for Axis Bot TOS page tab functionality
// Tab Functionality
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all buttons and contents
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(c => c.classList.remove('active'));
    
    // Add active class to clicked button and corresponding content
    btn.classList.add('active');
    document.getElementById(`${btn.dataset.tab}-tab`).classList.add('active');
    
    // Update URL hash for bookmarking
    history.pushState(null, null, `#${btn.dataset.tab}`);
  });
});

// Handle initial load with hash in URL
window.addEventListener('load', () => {
  const hash = window.location.hash.substring(1);
  if (hash === 'privacy' || hash === 'terms') {
    const tabButton = document.querySelector(`.tab-btn[data-tab="${hash}"]`);
    if (tabButton) {
      tabButton.click();
    }
  }
});

// Smooth scroll for table of contents
document.querySelectorAll('.toc-list a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjusted offset for fixed navbar
        behavior: 'smooth'
      });
    }
  });
});
