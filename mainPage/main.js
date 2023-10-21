document.addEventListener("DOMContentLoaded", function () {
    const scrollTextElements = document.querySelectorAll(".scroll-text");
    const glowTextElements = document.querySelectorAll(".glow");
    const lineTextElements = document.querySelectorAll(".Line");

    function onScroll() {

        scrollTextElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition <= windowHeight * 0.70) {
                element.classList.add("fade-in");
            } else {
                element.classList.remove("fade-in");
            }
        });

        glowTextElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition <= windowHeight * 0.70) {
                element.classList.add("h2glow");
            } else {
                element.classList.remove("h2glow");
            }
        });

        lineTextElements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition <= windowHeight * 0.70) {
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
