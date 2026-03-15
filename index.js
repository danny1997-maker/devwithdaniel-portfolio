// Grab elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle menu on click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');   // animate bars into X
  navMenu.classList.toggle('active');   // show/hide nav links

  // Accessibility: update aria-expanded
  const expanded = hamburger.classList.contains('open');
  hamburger.setAttribute('aria-expanded', expanded);
});
