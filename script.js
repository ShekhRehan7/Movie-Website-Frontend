let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
  header.classList.toggle('shadow', window.scrollY > 0);
})


menu.onclick = ()=>{
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}
window.onscroll = ()=>{
  menu.classList.remove('bx-x')
  navbar.classList.remove('active')
}

// 


let swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });


  let swipper = new Swiper(".coming-container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });