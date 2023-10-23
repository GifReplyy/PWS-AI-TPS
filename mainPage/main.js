document.addEventListener("DOMContentLoaded", function () {
    const scrollTextElements = document.querySelectorAll(".scroll-text");
    const glowTextElements = document.querySelectorAll(".glow");
    const lineTextElements = document.querySelectorAll(".Line");
    const lineImageTextElements = document.querySelectorAll(".lineImage");


    function onScroll() {

        scrollTextElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition <= windowHeight * 0.58) {
                element.classList.add("fade-in");
            } else {
                element.classList.remove("fade-in");
            }
        });

        lineImageTextElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition <= windowHeight * 0.60) {
                element.classList.add("lineImage-fade-in");
            } else {
                element.classList.remove("lineImage-fade-in");
            }
        });

        glowTextElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition <= windowHeight * 0.60) {
                element.classList.add("h2glow");
            } else {
                element.classList.remove("h2glow");
            }
        });

        lineTextElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition <= windowHeight * 0.60) {
                element.classList.add("LineANIME");
            } else {
                element.classList.remove("LineANIME");
            }
        });
        
    }

    // Initial check when the page loads
    onScroll();

    // Attach the event listener to scroll event
    window.addEventListener("scroll", onScroll);
});

// Selecteer de knoppen en de inhoudselementen
const btnBenefits = document.getElementById('btnBenefits');
const btnCons = document.getElementById('btnCons');
const btnFear = document.getElementById('btnFear');
const btnImpact = document.getElementById('btnImpact');

const benefitsContent = document.getElementById('benefitsContent');
const consContent = document.getElementById('consContent');
const fearContent = document.getElementById('fearContent');
const impactContent = document.getElementById('impactContent');

// Voeg klikgebeurtenissen toe aan de knoppen
btnBenefits.addEventListener('click', () => {
    // Verberg alle inhoudselementen
    hideAllContent();
    // Toon de gewenste inhoud
    benefitsContent.style.display = 'block';
});

btnCons.addEventListener('click', () => {
    hideAllContent();
    consContent.style.display = 'block';
});

btnFear.addEventListener('click', () => {
    hideAllContent();
    fearContent.style.display = 'block';
});

btnImpact.addEventListener('click', () => {
    hideAllContent();
    impactContent.style.display = 'block';
});

// Functie om alle inhoudselementen te verbergen
function hideAllContent() {
    benefitsContent.style.display = 'none';
    consContent.style.display = 'none';
    fearContent.style.display = 'none';
    impactContent.style.display = 'none';
}

// Verberg alle inhoudselementen bij het laden van de pagina
hideAllContent();




const mouseGlow = document.querySelector(".mouseEffect");

mouseGlow.addEventListener("mousemove", (e) => {
  const { x, y } = mouseGlow.getBoundingClientRect();
  mouseGlow.style.setProperty("--x", e.clientX - x);
  mouseGlow.style.setProperty("--y", e.clientY - y);
});