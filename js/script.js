

let searchForm = document.querySelector('.search-form');
 let searchBtn = document.querySelector('#search-btn');

 searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

    navbar.classList.remove('active'); };


 let shoppingCart = document.querySelector('.shopping-cart');
 let cartBtn = document.querySelector('#cart-btn');

 cartBtn.onclick = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.toggle('active');
    loginForm.classList.remove('active');

    navbar.classList.remove('active');
 };


 let loginForm = document.querySelector('.login-form');
 let loginBtn = document.getElementById('login-btn');

 loginBtn.onclick = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.toggle('active');

    navbar.classList.remove('active'); };

let navbar = document.querySelector('.navbar');
 let menuBtn = document.getElementById('menu-btn');

 menuBtn.onclick = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

    navbar.classList.toggle('active'); };



 window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

    navbar.classList.remove('active');
 }


 var swiper = new Swiper(".product-slider", {
    loop: true,
   spaceBetween: 20,
   autoplay: { 
      delay: 6500,
      disableOnInteraction: false,
   },

   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
 });


 var swiper = new Swiper(".review-slider", {
   loop: true,
  spaceBetween: 20,
  autoplay: { 
     delay: 6500,
     disableOnInteraction: false,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});