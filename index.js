// responsive navbar toggle
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("Plz Subscribe ");
    nav_header.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());


//scroll to top (without html)

const heroSection = document.querySelector(".section-hero");
const footerElem = document.querySelector(".section-footer");

const scrollElem = document.createElement("div");
scrollElem.classList.add("scrollTop-style");
scrollElem.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerElem.after(scrollElem);

const scrolltop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElem.addEventListener("click", scrolltop);

//swiper js code

let imgCount = 1;
let img1 = document.querySelector('.slider');
setInterval(()=>{

    if(imgCount > 3){
        imgCount = 1;
    }

    img1.src =`sliderimg/photo${imgCount}.gif`;
    imgCount++;
}, 1500);