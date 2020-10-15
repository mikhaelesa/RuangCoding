// DOM
let tagline = document.querySelector('.tagline');
let about = document.querySelector('#about');
let cases = document.querySelectorAll('.case');
let links = document.querySelectorAll('a.go');
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('nav .container')

// Event handler for scrolling.
window.onscroll = function(){
  // Current Y scroll offset
  let windowScroll = this.pageYOffset;

  // Parallax effect for tagline
  tagline.style.transform = `translateY(${windowScroll/10}%)`;
  tagline.style.opacity = `${1 - (windowScroll / 500)}`;

  // Effect for about section
  cases.forEach(c =>{
    (windowScroll >= about.offsetTop -500)? c.classList.add('show') : c.classList.remove('show');
  })
}

// Smooth scrolling effect
links.forEach(link =>{
  link.addEventListener('click', function(e){
    e.preventDefault();
    let targetAttr = link.getAttribute('href');
    if(nav.classList.contains('slide'))
      nav.classList.remove('slide')
    let targetSection = document.querySelector(targetAttr);
    targetSection.scrollIntoView({
      behavior: "smooth"
    })
  })
})

hamburger.addEventListener('click', function(){
  nav.classList.toggle('slide');
})