const navLinks =document.querySelectorAll(".nav-menu .nav-link")
const menuOpenbutton =document.querySelector("#menu-open-button")
const menuClosebutton =document.querySelector("#menu-close-button")
menuOpenbutton.addEventListener("click",()=>{
    //toggle mobile menu
   document.body.classList.toggle("show-mobile-menu")
})
menuClosebutton.addEventListener("click",()=> menuOpenbutton.click())

navLinks.forEach(Link=>{
    Link.addEventListener("click",()=> menuOpenbutton.click())
})
// initialize swiper
const swiper = new Swiper('.slider-container.swiper', {
  loop: true,
  grabCursor:true,
  spaceBetween:25,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
// responsive breakpoints
  breakpoints:{
    0:{
      slidesPerView:1
    },
    768:{
      slidesPerView:2
    },
    1024:{
      slidesPerView:3
    },
  }
});