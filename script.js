const menu = document.getElementById("menu");
window.addEventListener("scroll", () => {
 if (window.scrollY > 50) {
   menu.classList.add("scrolled");
 } else {
   menu.classList.remove("scrolled");
 }
});

const elementos = document.querySelectorAll('.tratamiento');

window.addEventListener('scroll', () => {

  const alturaPantalla = window.innerHeight;

  elementos.forEach(el => {

    const posicion = el.getBoundingClientRect().top;

    if (posicion < alturaPantalla - 100) {

      el.classList.add('visible');

    }

  });

});

const toggle = document.querySelector(".menu-toggle");

const menuLinks = document.querySelector("nav ul");

toggle.addEventListener("click", () => {

  menuLinks.classList.toggle("active");

});
 
 