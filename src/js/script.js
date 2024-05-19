window.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".hamburger"),
          navbar = document.querySelector(".navbar");

    burger.addEventListener("click", () => {
        burger.classList.toggle("hamburger_active");
        navbar.classList.toggle("navbar_active");
    });


});