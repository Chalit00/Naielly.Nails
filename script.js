// Scroll suave en navegación
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Animación suave en servicios
const cards = document.querySelectorAll("article");

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.5s";
});

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        const visible = window.innerHeight;

        if (top < visible - 50) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});