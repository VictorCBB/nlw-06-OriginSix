// abrir e fechar menu

const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

for(const element of toggle) {
    element.addEventListener("click",function() {
        nav.classList.toggle("show");
    })
}

// Ao clicar em um ítem do menu, esconder o menu

const links = document.querySelectorAll("nav ul li a");

for(const link of links) {
    link.addEventListener("click",function() {
        nav.classList.remove("show");
    })
}

// Sombra do cabeçalho quando scrollar

const header = document.querySelector("#header");
const navHeader = header.offsetHeight //altura do objeto na página

function changeHeaderWhenScroll() {

    if (window.scrollY >= navHeader) {
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
}

// Testimonials carrossel slider swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
       767: {
           slidesPerView: 2,
           setWrappersize: true
       } 
    }
});

// scrollreveal: Mostrar elementos quando der scroll na página

const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonial
    #contact .text, #contact .links,
    footer .brand, footer .social`,
    { interval: 100 }
);

// button back to top

const backToTopButton = document.querySelector(".back-to-top");

function backToTop() {

    if (window.scrollY >= 700) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    } 
}

// Menu ativo conforme seção visível na página

const sections = document.querySelectorAll("main section[id]")
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

    for (const section of sections) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if (checkpointStart && checkpointEnd) {
            document
                .querySelector("nav ul li a[href*=" + sectionId + "]")
                .classList.add("active");
        } else {
            document
                .querySelector("nav ul li a[href*=" + sectionId + "]")
                .classList.remove("active");
        }
    }
}

// When Scroll

window.addEventListener("scroll", function() {
    changeHeaderWhenScroll();
    backToTop();
    activateMenuAtCurrentSection();
});
