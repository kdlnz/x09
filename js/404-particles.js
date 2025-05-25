// Create floating particles for 404 page
const particlesContainer = document.getElementById('particles');
const particleCount = 50; // Number of particles

if (particlesContainer) {
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('span');
    particle.className = 'particle';
    
    // Random positioning
    const posX = Math.random() * 100;
    // const posY = Math.random() * 100; // posY is not used for 'fall' animation start
    
    // Random size
    const size = Math.random() * 6 + 2; // size between 2px and 8px
    
    // Random animation duration for fall
    const duration = Math.random() * 8 + 7; // duration between 7s and 15s
    
    // Random delay for fall
    const delay = Math.random() * 10; // delay up to 10s
    
    // Random opacity
    const opacity = Math.random() * 0.4 + 0.1; // opacity between 0.1 and 0.5
    
    // Apply styles
    particle.style.left = `${posX}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.opacity = opacity;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;
    
    particlesContainer.appendChild(particle);
  }
}
