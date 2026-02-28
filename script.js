// Menú móvil
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Simulación envío formulario
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        message.textContent = "Gracias por contactarnos. Te responderemos pronto.";
        form.reset();
    });
}