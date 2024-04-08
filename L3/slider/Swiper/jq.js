const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    grid:{
       row:2,
       column:2
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

   slidesPerView: 2,
  
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



$(document).ready(function(){
  
   


})