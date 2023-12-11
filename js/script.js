


//  ========= loader page start ===============
//  ========= loader page start ===============
//  ========= loader page start ===============


gsap.to(".box", {
    opacity: 1,
    duration: 0.5,
    stagger: true,
    repeat: -1,
    stagger: 0.4,
    scale: .0,
})


function move() {
    document.getElementById("preload").style.display = "none";
}




//  ========= loader page end ===============
//  ========= loader page end ===============
//  ========= loader page end ===============



function showDetails(currency) {
    let currencyType = currency.getAttribute("data-currency-type");
    document.getElementById("currency-change").innerHTML = ( currencyType) ;
  }

  
  


var landing = gsap.timeline();

landing.from(".hero-bg-content h4", {
    y: 40,
    duration: 0.5,
    opacity: 0,

    // stagger: true,
    // repeat: -1,
    //   stagger: 0.4,
})

landing.from(".hero-bg-content h1", {
    y: 40,
    duration: 0.5,
    opacity: 0,

    // stagger: true,
    // repeat: -1,
    //   stagger: 0.4,
})

landing.from(".hero-bg-content p", {
    y: 40,
    duration: 0.5,
    opacity: 0,

   
})

landing.from(".button", {
    y: 40,
    duration: 0.5,
    opacity: 0,

  
})






// <!-- Initialize Swiper --> 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
   loop: true,
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      "@0.75": {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      "@1.00": {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      "@1.50": {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
  });


  

  /* ================= section4 =============== */ 
  /* ================= section4 =============== */
  /* ================= section4 =============== */ 



  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });