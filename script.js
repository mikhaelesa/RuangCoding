// DOM
let tagline = document.querySelector('.tagline');
let about = document.querySelector('#about');
let cases = document.querySelectorAll('.case');
let links = document.querySelectorAll('.links a');

// Event handler for scrolling.
window.onscroll = function(){
  // Current Y scroll offset
  let windowScroll = this.pageYOffset;

  // Parallax effect for tagline
  tagline.style.transform = `translateY(${windowScroll/10}%)`;
  tagline.style.opacity = `${1 - (windowScroll / 500)}`;

  // Effect for about section
  if(windowScroll >= about.offsetTop - 500)
    cases.forEach(c => c.classList.add('show'));
  else
    cases.forEach(c => c.classList.remove('show'));
}

// Smooth scrolling effect
links.forEach(link =>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    let targetAttr = link.getAttribute('href');
    let targetSection = document.querySelector(targetAttr);
    targetSection.scrollIntoView({
      behavior: "smooth"
    })
  })
})