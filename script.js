// Asegúrate de que GSAP esté cargado correctamente en el HTML

const egg = document.getElementById("egg-overall");
const avocado = document.getElementById("avocado-overall");

// Usar la nueva forma de crear una animación en GSAP v3
const eggTl = gsap.timeline({ repeat: -1 });

// Animación de texto
const tl = gsap.timeline();
const splitText = new SplitText("#text", { type: "words, chars" });
const chars = splitText.chars;
tl.staggerFrom(chars, 0.08, { display: "none", ease: Power1.easeIn }, 0.08, "+=0.1");

// Animación del corazón (aplicando latido)
const heartTl = gsap.timeline({ repeat: -1, yoyo: true });
heartTl.to("#Heart", 1.5, { 
    scale: 1.2, // Aumenta el tamaño para crear el efecto de latido
    y: -10,    // Movimiento hacia arriba
    opacity: 0.5, // Hace que el corazón se desvanezca un poco
    ease: "power1.inOut"
}).to("#Heart", 0.5, { 
    scale: 1, // Vuelve al tamaño normal
    y: 0,     // Vuelve a la posición original
    opacity: 1, // Vuelve a la opacidad normal
    ease: "power1.inOut"
});
