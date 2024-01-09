


//  ========= loader page start ===============
//  ========= loader page start ===============
//  ========= loader page start ===============




gsap.from(".box", {
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

// navbar scroll 










//  ========= loader page end ===============
//  ========= loader page end ===============
//  ========= loader page end ===============



function showDetails(currency) {
    let currencyType = currency.getAttribute("data-currency-type");
    document.getElementById("currency-change").innerHTML = (currencyType);
}


const USD = document.querySelector(".USD");
const EUR = document.querySelector(".EUR");
const GBP = document.querySelector(".GBP");
const INR = document.querySelector(".INR");
const BDT = document.querySelector(".BDT");
const JPY = document.querySelector(".JPY");
const CAD = document.querySelector(".CAD");
const AUD = document.querySelector(".AUD");

var currency_icon = document.querySelectorAll("#currency-praice");

USD.addEventListener("click", () => usd());
EUR.addEventListener("click", () => eur());
GBP.addEventListener("click", () => gbp());
INR.addEventListener("click", () => inr());
BDT.addEventListener("click", () => bdt());
JPY.addEventListener("click", () => jpy());
CAD.addEventListener("click", () => cad());
AUD.addEventListener("click", () => aud());

const usd = () => {
    // currency_icon.classList.toggle("fa-dollar-sign")
    currency_icon.classList.remove('fa-euro-sign', 'fa-sterling-sign', 'fa-indian-rupee-sign', 'fa-bangladeshi-taka-sign', 'fa-yen-sign');
    currency_icon.classList.add("fa-dollar-sign");  // Add newone class
};

const eur = () => {
    // currency_icon.classList.toggle("fa-euro-sign")
    currency_icon.classList.remove('fa-dollar-sign', 'fa-sterling-sign', 'fa-indian-rupee-sign', 'fa-bangladeshi-taka-sign', 'fa-yen-sign');
    currency_icon.classList.add("fa-euro-sign");  // Add newone class

};

const gbp = () => {
    currency_icon.classList.add("fa-sterling-sign")
    currency_icon.classList.remove('fa-euro-sign', 'fa-dollar-sign', 'fa-indian-rupee-sign', 'fa-bangladeshi-taka-sign', 'fa-yen-sign');

};

const inr = () => {
    currency_icon.classList.add("fa-indian-rupee-sign")
    currency_icon.classList.remove('fa-euro-sign', 'fa-dollar-sign', 'fa-sterling-sign', 'fa-bangladeshi-taka-sign', 'fa-yen-sign');
};

const bdt = () => {
    currency_icon.classList.add("fa-bangladeshi-taka-sign")
    currency_icon.classList.remove('fa-euro-sign', 'fa-dollar-sign', 'fa-sterling-sign', 'fa-indian-rupee-sign', 'fa-yen-sign');
};

const jpy = () => {
    currency_icon.classList.add("fa-yen-sign")
    currency_icon.classList.remove('fa-euro-sign', 'fa-dollar-sign', 'fa-sterling-sign', 'fa-indian-rupee-sign', 'fa-bangladeshi-taka-sign');
};

const cad = () => {
    currency_icon.classList.remove('fa-euro-sign', 'fa-sterling-sign', 'fa-indian-rupee-sign', 'fa-bangladeshi-taka-sign', 'fa-yen-sign');
    currency_icon.classList.add("fa-dollar-sign");  // Add newone class
};

const aud = () => {
    currency_icon.classList.remove('fa-euro-sign', 'fa-sterling-sign', 'fa-indian-rupee-sign', 'fa-bangladeshi-taka-sign', 'fa-yen-sign');
    currency_icon.classList.add("fa-dollar-sign");  // Add newone class
};





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



var swiper = new Swiper(".productSwiper", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    centarSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
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
            spaceBetween: 20,
        },
    },
});















// SECTION 9 
// SECTION 9

var swiper = new Swiper(".eventswiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});




// ADD TO CART JS 
// ADD TO CART JS 
// ADD TO CART JS 
var count = 0;

var img = document.getAttribute("src");

document.getElementById("count-count-total").innerHTML = count;
document.getElementById("total-products-count").innerHTML = count;

function add(val){
    document.getElementById("products-list").innerHTML += "<li>" + val + "</li>";
count=count+1;
document.getElementById("count-count-total").innerHTML=count;
document.getElementById("total-products-count").innerHTML=count;
}

