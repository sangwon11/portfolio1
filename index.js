let lastScrollTop = 0; 
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop; 
  if (currentScroll > lastScrollTop) {
    nav.style.top = '-100px'; 
  } else {
    nav.style.top = '0';
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
}, false);
